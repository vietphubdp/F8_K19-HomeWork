import api from '../plugins/api';

// Helper to format salary from db.json object or string
export const formatSalary = (salary) => {
  if (!salary) return 'Thỏa thuận';
  if (typeof salary === 'string') return salary;
  if (salary.type === 'RANGE') {
    const minM = Math.floor((salary.min || 0) / 1000000);
    const maxM = Math.floor((salary.max || 0) / 1000000);
    if (minM > 0 && maxM > 0) return `${minM} - ${maxM} triệu`;
    if (minM > 0) return `Từ ${minM} triệu`;
    if (maxM > 0) return `Tới ${maxM} triệu`;
  }
  return 'Thỏa thuận';
};

// Helper to format location string
export const formatLocation = (workLocation, defaultLoc) => {
  if (typeof workLocation === 'string') return workLocation;
  if (Array.isArray(workLocation) && workLocation.length > 0) {
    return workLocation[0].city_name || defaultLoc || 'Hà Nội';
  }
  return defaultLoc || 'Hà Nội';
};

// Helper to format ISO date to DD/MM/YYYY
export const formatDate = (dateStr) => {
  if (!dateStr) return '30/09/2026';
  if (dateStr.includes('/')) return dateStr;
  try {
    const date = new Date(dateStr);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  } catch (e) {
    return dateStr;
  }
};

// Normalize job object from db.json format to UI format
export const normalizeJob = (job) => {
  if (!job) return null;
  return {
    ...job,
    company_name: job.company?.company_name || job.company_name || 'CÔNG TY CỔ PHẦN TOPCV VIỆT NAM',
    logo_url: job.company?.logo_url || job.logo_url || 'https://cdn-new.topcv.vn/posts/test-logo-topcv.png',
    salary: formatSalary(job.salary),
    location: formatLocation(job.work_location, job.location),
    deadline: formatDate(job.deadline),
    address_detail: job.work_location?.[0]?.address_detail || job.address_detail || 'Tầng 3, Tòa FS GoldSeason, 47 Nguyễn Tuân, Thanh Xuân, Hà Nội',
    company: job.company || {
      company_name: job.company_name,
      logo_url: job.logo_url,
      company_size: '500-1000 nhân viên',
      category: job.category || 'Công nghệ Thông tin',
      address: 'Hà Nội',
    },
  };
};

// Normalize company object
export const normalizeCompany = (company) => {
  if (!company) return null;
  return {
    ...company,
    address: company.address_list?.[0]?.address_detail || company.headquarters_address || company.address || 'Hà Nội',
    open_jobs_count: company.open_jobs_count || (company.id === 'comp-001' ? 12 : 5),
  };
};

// Fetch all jobs
export async function getJobs() {
  try {
    const res = await api.get('/jobs');
    if (Array.isArray(res.data)) {
      return res.data.map(normalizeJob);
    }
  } catch (err) {
    console.error('Lỗi khi cào dữ liệu jobs từ API:', err);
  }
  return [];
}

// Fetch single job by ID
export async function getJobById(id) {
  try {
    const res = await api.get(`/jobs/${id}`);
    if (res.data) {
      return normalizeJob(res.data);
    }
  } catch (err) {
    console.error(`Lỗi khi cào dữ liệu job ${id} từ API:`, err);
  }
  return null;
}

// Fetch all companies
export async function getCompanies() {
  try {
    const res = await api.get('/companies');
    if (Array.isArray(res.data)) {
      return res.data.map(normalizeCompany);
    }
  } catch (err) {
    console.error('Lỗi khi cào dữ liệu companies từ API:', err);
  }
  return [];
}

// Create job (POST request to db.json via API)
export async function createJob(newJobData) {
  const jobPayload = {
    id: `job-${Date.now()}`,
    company: {
      id: 'comp-001',
      company_name: newJobData.company_name || 'CÔNG TY CỔ PHẦN CÔNG NGHỆ TOPCV VIỆT NAM',
      logo_url: 'https://cdn-new.topcv.vn/posts/test-logo-topcv.png',
      company_size: '500-1000 nhân viên',
      category: newJobData.category || 'Công nghệ Thông tin',
    },
    title: newJobData.title,
    slug: newJobData.title?.toLowerCase().replace(/\s+/g, '-'),
    category: newJobData.category,
    specialty: newJobData.specialty || 'Lập trình viên',
    job_type: newJobData.job_type || 'FULL_TIME',
    experience_level: newJobData.experience_level || '1-3 năm',
    gender: newJobData.gender || 'NOT_REQUIRED',
    quantity: Number(newJobData.quantity) || 1,
    salary: {
      type: 'RANGE',
      min: Number(newJobData.salary_min) * 1000000 || 15000000,
      max: Number(newJobData.salary_max) * 1000000 || 30000000,
      currency: 'VND',
      is_negotiable: false,
    },
    work_location: [
      {
        city_id: 1,
        city_name: newJobData.location || 'Hà Nội',
        address_detail: newJobData.address_detail || 'Hà Nội',
      },
    ],
    deadline: newJobData.deadline ? `${newJobData.deadline}T23:59:59Z` : '2026-10-30T23:59:59Z',
    status: 'PUBLISHED',
    is_hot: true,
    description_html: newJobData.description_html,
    requirements_html: newJobData.requirements_html,
    benefits_html: newJobData.benefits_html,
  };

  try {
    const res = await api.post('/jobs', jobPayload);
    if (res.data) {
      return normalizeJob(res.data);
    }
  } catch (err) {
    console.error('Lỗi khi POST job tới API:', err);
  }
  return null;
}

