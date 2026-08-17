import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Paper,
  Typography,
  TextField,
  Grid,
  MenuItem,
  Button,
  Stack,
  FormControlLabel,
  Switch,
  Divider,
  Alert,
  Snackbar,
} from '@mui/material';
import PostAddIcon from '@mui/icons-material/PostAdd';
import SendIcon from '@mui/icons-material/Send';
import SaveIcon from '@mui/icons-material/Save';
import RichTextEditor from '../components/common/RichTextEditor';
import { categories, locations } from '../mock/mockData';

export default function PostJob() {
  const navigate = useNavigate();

  // Form states
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState(categories[1]);
  const [jobType, setJobType] = useState('Toàn thời gian');
  const [level, setLevel] = useState('Nhân viên');
  const [experience, setExperience] = useState('1-3 năm');
  const [quantity, setQuantity] = useState(1);
  const [isNegotiable, setIsNegotiable] = useState(false);
  const [minSalary, setMinSalary] = useState('');
  const [maxSalary, setMaxSalary] = useState('');
  const [location, setLocation] = useState(locations[1]);
  const [addressDetail, setAddressDetail] = useState('');
  const [deadline, setDeadline] = useState('');

  // Rich Text Editor states (CKEditor format)
  const [description, setDescription] = useState(
    '<h4>Mô tả công việc:</h4><ul><li>Thực hiện các công việc theo sự phân công của quản lý.</li></ul>'
  );
  const [requirements, setRequirements] = useState(
    '<h4>Yêu cầu ứng viên:</h4><ul><li>Tốt nghiệp ĐH/CĐ chuyên ngành liên quan.</li></ul>'
  );
  const [benefits, setBenefits] = useState(
    '<h4>Quyền lợi:</h4><ul><li>Đóng BHXH đầy đủ, thưởng tháng 13.</li></ul>'
  );

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpenSnackbar(true);
    setTimeout(() => {
      navigate('/');
    }, 1500);
  };

  return (
    <Box sx={{ backgroundColor: '#f4f5f7', minHeight: '100vh', py: 5 }}>
      <Container maxWidth="lg">
        {/* Page Title Header */}
        <Paper elevation={0} sx={{ p: 3, borderRadius: 3, mb: 4, background: 'linear-gradient(135deg, #005826 0%, #00b14f 100%)', color: '#ffffff' }}>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Box sx={{ width: 48, height: 48, borderRadius: 2, backgroundColor: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <PostAddIcon fontSize="large" />
            </Box>
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 800 }}>
                Đăng tin tuyển dụng mới
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                Tạo tin tuyển dụng chất lượng để thu hút ứng viên tiềm năng trên hệ thống TopCV
              </Typography>
            </Box>
          </Stack>
        </Paper>

        <Box component="form" onSubmit={handleSubmit}>
          {/* Section 1: Thông tin chung */}
          <Paper elevation={0} sx={{ p: 4, borderRadius: 3, mb: 4, border: '1px solid #e9ecef' }}>
            <Typography variant="h6" sx={{ fontWeight: 700, color: '#00b14f', mb: 3 }}>
              1. Thông tin chung về công việc
            </Typography>

            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5, color: '#212529' }}>
                  Tiêu đề công việc <Typography component="span" color="error">*</Typography>
                </Typography>
                <TextField
                  required
                  placeholder="Ví dụ: Senior Frontend Developer (ReactJS / MUI)"
                  fullWidth
                  size="small"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5, color: '#212529' }}>
                  Ngành nghề tuyển dụng <Typography component="span" color="error">*</Typography>
                </Typography>
                <TextField
                  select
                  fullWidth
                  size="small"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                >
                  {categories.filter((c) => c !== 'Tất cả ngành nghề').map((c) => (
                    <MenuItem key={c} value={c}>
                      {c}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5, color: '#212529' }}>
                  Cấp bậc <Typography component="span" color="error">*</Typography>
                </Typography>
                <TextField
                  select
                  fullWidth
                  size="small"
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
                  sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                >
                  {['Thực tập sinh', 'Nhân viên', 'Trưởng nhóm', 'Trưởng phòng', 'Giám đốc'].map((lvl) => (
                    <MenuItem key={lvl} value={lvl}>
                      {lvl}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid item xs={12} sm={4}>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5, color: '#212529' }}>
                  Hình thức làm việc
                </Typography>
                <TextField
                  select
                  fullWidth
                  size="small"
                  value={jobType}
                  onChange={(e) => setJobType(e.target.value)}
                  sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                >
                  {['Toàn thời gian', 'Bán thời gian', 'Thực tập', 'Remote / Làm từ xa'].map((t) => (
                    <MenuItem key={t} value={t}>
                      {t}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid item xs={12} sm={4}>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5, color: '#212529' }}>
                  Kinh nghiệm yêu cầu
                </Typography>
                <TextField
                  select
                  fullWidth
                  size="small"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                >
                  {['Chưa có kinh nghiệm', 'Dưới 1 năm', '1-3 năm', '3-5 năm', 'Trên 5 năm'].map((exp) => (
                    <MenuItem key={exp} value={exp}>
                      {exp}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid item xs={12} sm={4}>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5, color: '#212529' }}>
                  Số lượng cần tuyển
                </Typography>
                <TextField
                  type="number"
                  fullWidth
                  size="small"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                />
              </Grid>
            </Grid>
          </Paper>

          {/* Section 2: Mức lương & Địa điểm */}
          <Paper elevation={0} sx={{ p: 4, borderRadius: 3, mb: 4, border: '1px solid #e9ecef' }}>
            <Typography variant="h6" sx={{ fontWeight: 700, color: '#00b14f', mb: 3 }}>
              2. Mức lương & Địa điểm làm việc
            </Typography>

            <Grid container spacing={3}>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={isNegotiable}
                      onChange={(e) => setIsNegotiable(e.target.checked)}
                      color="primary"
                    />
                  }
                  label={
                    <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                      Mức lương thỏa thuận (Lương cạnh tranh)
                    </Typography>
                  }
                />
              </Grid>

              {!isNegotiable && (
                <>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5, color: '#212529' }}>
                      Mức lương tối thiểu (VNĐ)
                    </Typography>
                    <TextField
                      placeholder="Ví dụ: 15,000,000"
                      fullWidth
                      size="small"
                      value={minSalary}
                      onChange={(e) => setMinSalary(e.target.value)}
                      sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5, color: '#212529' }}>
                      Mức lương tối đa (VNĐ)
                    </Typography>
                    <TextField
                      placeholder="Ví dụ: 25,000,000"
                      fullWidth
                      size="small"
                      value={maxSalary}
                      onChange={(e) => setMaxSalary(e.target.value)}
                      sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                    />
                  </Grid>
                </>
              )}

              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5, color: '#212529' }}>
                  Tỉnh / Thành phố làm việc
                </Typography>
                <TextField
                  select
                  fullWidth
                  size="small"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                >
                  {locations.filter((l) => l !== 'Tất cả địa điểm').map((l) => (
                    <MenuItem key={l} value={l}>
                      {l}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5, color: '#212529' }}>
                  Địa chỉ chi tiết
                </Typography>
                <TextField
                  placeholder="Số nhà, Tên tòa nhà, Đường/Phường..."
                  fullWidth
                  size="small"
                  value={addressDetail}
                  onChange={(e) => setAddressDetail(e.target.value)}
                  sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                />
              </Grid>
            </Grid>
          </Paper>

          {/* Section 3: CKEditor Formats */}
          <Paper elevation={0} sx={{ p: 4, borderRadius: 3, mb: 4, border: '1px solid #e9ecef' }}>
            <Typography variant="h6" sx={{ fontWeight: 700, color: '#00b14f', mb: 3 }}>
              3. Nội dung chi tiết tin tuyển dụng (Định dạng CKEditor)
            </Typography>

            {/* Job Description with CKEditor */}
            <RichTextEditor
              label="Mô tả công việc *"
              value={description}
              onChange={setDescription}
              placeholder="Nhập chi tiết nhiệm vụ và trách nhiệm công việc..."
            />

            <Divider sx={{ my: 3 }} />

            {/* Requirements with CKEditor */}
            <RichTextEditor
              label="Yêu cầu ứng viên *"
              value={requirements}
              onChange={setRequirements}
              placeholder="Nhập yêu cầu trình độ, kinh nghiệm, kỹ năng..."
            />

            <Divider sx={{ my: 3 }} />

            {/* Benefits with CKEditor */}
            <RichTextEditor
              label="Quyền lợi ứng viên *"
              value={benefits}
              onChange={setBenefits}
              placeholder="Nhập các chế độ đãi ngộ, lương thưởng, phúc lợi..."
            />
          </Paper>

          {/* Section 4: Hạn nộp & Actions */}
          <Paper elevation={0} sx={{ p: 4, borderRadius: 3, mb: 4, border: '1px solid #e9ecef' }}>
            <Typography variant="h6" sx={{ fontWeight: 700, color: '#00b14f', mb: 3 }}>
              4. Thời hạn nhận hồ sơ
            </Typography>

            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5, color: '#212529' }}>
                  Hạn nộp hồ sơ <Typography component="span" color="error">*</Typography>
                </Typography>
                <TextField
                  type="date"
                  fullWidth
                  size="small"
                  InputLabelProps={{ shrink: true }}
                  value={deadline}
                  onChange={(e) => setDeadline(e.target.value)}
                  sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                />
              </Grid>
            </Grid>
          </Paper>

          {/* Action Bar */}
          <Stack direction="row" spacing={2} justifyContent="flex-end">
            <Button
              variant="outlined"
              size="large"
              onClick={() => navigate('/')}
              sx={{ borderRadius: 2, color: '#6c757d', borderColor: '#ced4da', px: 3 }}
            >
              Hủy bỏ
            </Button>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              startIcon={<SaveIcon />}
              sx={{ borderRadius: 2, px: 3, fontWeight: 600 }}
            >
              Lưu nháp
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              startIcon={<SendIcon />}
              sx={{ borderRadius: 2, px: 4, fontWeight: 700 }}
            >
              Đăng tin tuyển dụng
            </Button>
          </Stack>
        </Box>
      </Container>

      {/* Snackbar notification */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" variant="filled" sx={{ width: '100%' }}>
          Đăng tin tuyển dụng thành công! Đang chuyển hướng về trang chủ...
        </Alert>
      </Snackbar>
    </Box>
  );
}
