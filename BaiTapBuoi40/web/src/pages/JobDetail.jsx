import React, { useState } from 'react';
import {
  Box,
  Container,
  Paper,
  Typography,
  Button,
  Chip,
  Stack,
  Divider,
  Breadcrumbs,
  Link,
  Avatar,
} from '@mui/material';
import SubHeader from '../components/layout/SubHeader';
import JobCard from '../components/common/JobCard';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import SendIcon from '@mui/icons-material/Send';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import PeopleIcon from '@mui/icons-material/People';
import CategoryIcon from '@mui/icons-material/Category';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { mockJobs, mockCompanies } from '../mock/mockData';

export default function JobDetail() {
  const [saved, setSaved] = useState(false);

  const job = mockJobs[0];
  const company = job.company || mockCompanies[0];
  const relatedJobs = mockJobs.slice(1, 4);

  return (
    <Box sx={{ backgroundColor: '#f4f5f7', minHeight: '100vh', pb: 8 }}>
      {/* Search SubHeader */}
      <SubHeader />

      <Container maxWidth="lg" sx={{ mt: 3 }}>
        {/* Breadcrumb Navigation */}
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} sx={{ mb: 2.5 }}>
          <Link underline="hover" color="inherit" href="/" sx={{ fontSize: '0.85rem', color: '#6c757d' }}>
            Trang chủ
          </Link>
          <Link underline="hover" color="inherit" href="#" sx={{ fontSize: '0.85rem', color: '#6c757d' }}>
            Việc làm IT / Phần mềm
          </Link>
          <Typography color="text.primary" sx={{ fontSize: '0.85rem', fontWeight: 600 }}>
            {job.title}
          </Typography>
        </Breadcrumbs>

        {/* Guaranteed 2-Column Flex Layout (Left content ~68%, Right sidebar ~32%) */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 3,
            alignItems: 'flex-start',
            width: '100%',
          }}
        >
          {/* LEFT COLUMN: Job Header + Job Details + Related Jobs */}
          <Box sx={{ flex: 1, minWidth: 0, width: '100%' }}>
            <Stack spacing={3}>
              {/* Card 1: Job Header Banner */}
              <Paper elevation={0} sx={{ p: 3, borderRadius: 3, border: '1px solid #e9ecef', backgroundColor: '#ffffff' }}>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2.5} alignItems="flex-start">
                  {/* Company Logo */}
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: 3,
                      border: '1px solid #e9ecef',
                      p: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#ffffff',
                      flexShrink: 0,
                    }}
                  >
                    <Box
                      component="img"
                      src={company.logo_url}
                      alt={company.company_name}
                      sx={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                  </Box>

                  {/* Job Header Info */}
                  <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Typography variant="h5" sx={{ fontWeight: 800, color: '#212529', mb: 0.8, fontSize: { xs: '1.2rem', sm: '1.35rem' } }}>
                      {job.title}
                    </Typography>
                    <Typography variant="subtitle2" sx={{ color: '#00b14f', fontWeight: 700, mb: 2 }}>
                      {company.company_name}
                    </Typography>

                    {/* Metadata Badges */}
                    <Box
                      sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(4, 1fr)' },
                        gap: 2,
                        mb: 3,
                      }}
                    >
                      <Stack direction="row" spacing={1} alignItems="center">
                        <AttachMoneyIcon sx={{ color: '#00b14f', fontSize: 20 }} />
                        <Box>
                          <Typography variant="caption" sx={{ color: '#6c757d', display: 'block', fontSize: '0.75rem' }}>
                            Mức lương
                          </Typography>
                          <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#00b14f', fontSize: '0.85rem' }}>
                            {job.salary}
                          </Typography>
                        </Box>
                      </Stack>

                      <Stack direction="row" spacing={1} alignItems="center">
                        <LocationOnIcon sx={{ color: '#00b14f', fontSize: 20 }} />
                        <Box>
                          <Typography variant="caption" sx={{ color: '#6c757d', display: 'block', fontSize: '0.75rem' }}>
                            Địa điểm
                          </Typography>
                          <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#212529', fontSize: '0.85rem' }}>
                            {job.location}
                          </Typography>
                        </Box>
                      </Stack>

                      <Stack direction="row" spacing={1} alignItems="center">
                        <WorkHistoryIcon sx={{ color: '#00b14f', fontSize: 20 }} />
                        <Box>
                          <Typography variant="caption" sx={{ color: '#6c757d', display: 'block', fontSize: '0.75rem' }}>
                            Kinh nghiệm
                          </Typography>
                          <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#212529', fontSize: '0.85rem' }}>
                            {job.experience_level}
                          </Typography>
                        </Box>
                      </Stack>

                      <Stack direction="row" spacing={1} alignItems="center">
                        <AccessTimeIcon sx={{ color: '#00b14f', fontSize: 20 }} />
                        <Box>
                          <Typography variant="caption" sx={{ color: '#6c757d', display: 'block', fontSize: '0.75rem' }}>
                            Hạn nộp
                          </Typography>
                          <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#212529', fontSize: '0.85rem' }}>
                            {job.deadline}
                          </Typography>
                        </Box>
                      </Stack>
                    </Box>

                    {/* Action Buttons */}
                    <Stack direction="row" spacing={1.5} alignItems="center" flexWrap="wrap" rowGap={1}>
                      <Button
                        variant="contained"
                        color="primary"
                        size="medium"
                        startIcon={<SendIcon />}
                        sx={{
                          px: 3,
                          py: 1,
                          borderRadius: 20,
                          fontWeight: 700,
                          fontSize: '0.9rem',
                          backgroundColor: '#00b14f',
                          '&:hover': { backgroundColor: '#008f40' },
                        }}
                      >
                        Ứng tuyển ngay
                      </Button>

                      <Button
                        variant="outlined"
                        color="primary"
                        size="medium"
                        startIcon={saved ? <FavoriteIcon sx={{ color: '#e65100' }} /> : <FavoriteBorderIcon />}
                        onClick={() => setSaved(!saved)}
                        sx={{
                          px: 2.5,
                          py: 1,
                          borderRadius: 20,
                          fontWeight: 600,
                          borderColor: '#00b14f',
                          color: '#00b14f',
                          fontSize: '0.85rem',
                        }}
                      >
                        {saved ? 'Đã lưu tin' : 'Lưu tin'}
                      </Button>

                      <Button
                        variant="outlined"
                        size="medium"
                        startIcon={<ShareIcon />}
                        sx={{
                          borderRadius: 20,
                          px: 2,
                          py: 1,
                          color: '#565e6c',
                          borderColor: '#ced4da',
                          fontSize: '0.85rem',
                        }}
                      >
                        Chia sẻ
                      </Button>
                    </Stack>
                  </Box>
                </Stack>
              </Paper>

              {/* Card 2: Job Description Details */}
              <Paper elevation={0} sx={{ p: 3, borderRadius: 3, border: '1px solid #e9ecef', backgroundColor: '#ffffff' }}>
                <Typography variant="h6" sx={{ fontWeight: 800, color: '#00b14f', mb: 3, pb: 1, borderBottom: '2px solid #00b14f', display: 'inline-block' }}>
                  Chi tiết tin tuyển dụng
                </Typography>

                {/* Job Description HTML */}
                <Box sx={{ mb: 4 }} dangerouslySetInnerHTML={{ __html: job.description_html }} />

                <Divider sx={{ my: 3 }} />

                {/* Job Requirements HTML */}
                <Box sx={{ mb: 4 }} dangerouslySetInnerHTML={{ __html: job.requirements_html }} />

                <Divider sx={{ my: 3 }} />

                {/* Benefits HTML */}
                <Box sx={{ mb: 4 }} dangerouslySetInnerHTML={{ __html: job.benefits_html }} />

                <Divider sx={{ my: 3 }} />

                {/* Work Location */}
                <Box sx={{ mb: 3 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#00b14f', mb: 1 }}>
                    Địa điểm làm việc
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#212529', lineHeight: 1.6 }}>
                    • {job.address_detail}
                  </Typography>
                </Box>

                {/* How to Apply Box */}
                <Box sx={{ backgroundColor: '#e6f7ef', p: 2.5, borderRadius: 2, mt: 3 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#004025', mb: 1 }}>
                    Cách thức ứng tuyển
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#004025', mb: 2 }}>
                    Ứng viên nộp hồ sơ trực tuyến bằng cách bấm nút <strong>"Ứng tuyển ngay"</strong> dưới đây.
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<SendIcon />}
                    sx={{ borderRadius: 20, px: 3, fontWeight: 700, backgroundColor: '#00b14f' }}
                  >
                    Ứng tuyển ngay
                  </Button>
                </Box>
              </Paper>

              {/* Card 3: Related Jobs Stack */}
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 800, color: '#212529', mb: 2 }}>
                  Việc làm tương tự
                </Typography>
                <Stack spacing={2}>
                  {relatedJobs.map((item) => (
                    <JobCard key={item.id} job={item} />
                  ))}
                </Stack>
              </Box>
            </Stack>
          </Box>

          {/* RIGHT COLUMN: Sidebar (Company Card + General Info + Report Box) */}
          <Box
            sx={{
              width: { xs: '100%', md: 350 },
              flexShrink: 0,
            }}
          >
            <Stack spacing={3} sx={{ stickyPosition: 'sticky', top: 80 }}>
              {/* Box 1: Company Profile Box */}
              <Paper elevation={0} sx={{ p: 3, borderRadius: 3, border: '1px solid #e9ecef', backgroundColor: '#ffffff' }}>
                <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
                  <Avatar src={company.logo_url} variant="rounded" sx={{ width: 54, height: 54, border: '1px solid #e9ecef' }} />
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#212529', lineHeight: 1.3 }}>
                      {company.short_name || company.company_name}
                    </Typography>
                    <Chip
                      icon={<CheckCircleIcon sx={{ fontSize: '13px !important', color: '#00b14f' }} />}
                      label="Doanh nghiệp xác thực"
                      size="small"
                      sx={{ height: 20, fontSize: '0.7rem', fontWeight: 600, mt: 0.5, backgroundColor: '#e6f7ef', color: '#00b14f' }}
                    />
                  </Box>
                </Stack>

                <Stack spacing={1.5} sx={{ mb: 3 }}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <PeopleIcon fontSize="small" sx={{ color: '#6c757d' }} />
                    <Typography variant="body2" sx={{ color: '#565e6c', fontSize: '0.85rem' }}>
                      Quy mô: <strong>{company.company_size}</strong>
                    </Typography>
                  </Stack>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <CategoryIcon fontSize="small" sx={{ color: '#6c757d' }} />
                    <Typography variant="body2" sx={{ color: '#565e6c', fontSize: '0.85rem' }}>
                      Lĩnh vực: <strong>{company.category}</strong>
                    </Typography>
                  </Stack>
                  <Stack direction="row" spacing={1} alignItems="flex-start">
                    <LocationOnIcon fontSize="small" sx={{ color: '#6c757d', mt: 0.3 }} />
                    <Typography variant="body2" sx={{ color: '#565e6c', fontSize: '0.85rem' }}>
                      Địa điểm: {company.address}
                    </Typography>
                  </Stack>
                </Stack>

                <Button
                  variant="outlined"
                  fullWidth
                  sx={{
                    color: '#00b14f',
                    borderColor: '#00b14f',
                    fontWeight: 600,
                    borderRadius: 2,
                    py: 0.8,
                    '&:hover': { backgroundColor: '#e6f7ef' },
                  }}
                >
                  Xem trang công ty
                </Button>
              </Paper>

              {/* Box 2: General Information Box */}
              <Paper elevation={0} sx={{ p: 3, borderRadius: 3, border: '1px solid #e9ecef', backgroundColor: '#ffffff' }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#212529', mb: 2 }}>
                  Thông tin chung
                </Typography>

                <Stack spacing={2}>
                  <Box>
                    <Typography variant="caption" sx={{ color: '#6c757d', display: 'block' }}>
                      Cấp bậc
                    </Typography>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#212529' }}>
                      Nhân viên / Senior
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="caption" sx={{ color: '#6c757d', display: 'block' }}>
                      Số lượng tuyển
                    </Typography>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#212529' }}>
                      {job.quantity} người
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="caption" sx={{ color: '#6c757d', display: 'block' }}>
                      Hình thức làm việc
                    </Typography>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#212529' }}>
                      {job.job_type}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="caption" sx={{ color: '#6c757d', display: 'block' }}>
                      Giới tính
                    </Typography>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#212529' }}>
                      {job.gender}
                    </Typography>
                  </Box>
                </Stack>
              </Paper>

              {/* Box 3: Report & Support Box */}
              <Paper elevation={0} sx={{ p: 2.5, borderRadius: 3, border: '1px solid #e9ecef', backgroundColor: '#ffffff' }}>
                <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1 }}>
                  <ReportProblemOutlinedIcon color="warning" fontSize="small" />
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#212529' }}>
                    Báo cáo tin tuyển dụng
                  </Typography>
                </Stack>
                <Typography variant="caption" sx={{ color: '#6c757d', display: 'block', mb: 1.5, lineHeight: 1.5 }}>
                  Nếu bạn thấy tin tuyển dụng này có dấu hiệu lừa đảo hoặc vi phạm điều khoản, vui lòng báo cáo cho TopCV.
                </Typography>
                <Button variant="text" size="small" sx={{ color: '#e65100', p: 0, fontWeight: 700, fontSize: '0.8rem' }}>
                  Báo cáo ngay
                </Button>
              </Paper>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
