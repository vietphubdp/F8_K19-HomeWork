import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Stack,
  Divider,
} from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: '#ffffff', color: '#212529', pt: 6, pb: 4, borderTop: '1px solid #e9ecef', mt: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Brand Info */}
          <Grid item xs={12} md={3}>
            <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
              <Box
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  backgroundColor: '#00b14f',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                }}
              >
                <WorkIcon />
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 800, color: '#00b14f' }}>
                top<Typography component="span" variant="h6" sx={{ fontWeight: 800, color: '#212529' }}>cv</Typography>
              </Typography>
            </Stack>
            <Typography variant="body2" sx={{ color: '#6c757d', mb: 2, lineHeight: 1.6 }}>
              Tiên phong công nghệ HR Tech tại Việt Nam. Kết nối hàng triệu ứng viên tiềm năng với nhà tuyển dụng hàng đầu.
            </Typography>
            <Stack direction="row" spacing={1.5}>
              <Box sx={{ width: 36, height: 36, borderRadius: '50%', backgroundColor: '#f4f5f7', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00b14f', cursor: 'pointer' }}>
                <FacebookIcon fontSize="small" />
              </Box>
              <Box sx={{ width: 36, height: 36, borderRadius: '50%', backgroundColor: '#f4f5f7', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00b14f', cursor: 'pointer' }}>
                <YouTubeIcon fontSize="small" />
              </Box>
              <Box sx={{ width: 36, height: 36, borderRadius: '50%', backgroundColor: '#f4f5f7', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00b14f', cursor: 'pointer' }}>
                <LinkedInIcon fontSize="small" />
              </Box>
            </Stack>
          </Grid>

          {/* Về TopCV */}
          <Grid item xs={12} sm={6} md={2.2}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, color: '#00b14f' }}>
              Về TopCV
            </Typography>
            <Stack spacing={1}>
              {['Giới thiệu', 'Góc báo chí', 'Tuyển dụng', 'Liên hệ', 'Điều khoản sử dụng', 'Quy chế hoạt động', 'Chính sách bảo mật'].map((text) => (
                <Link key={text} href="#" underline="hover" sx={{ color: '#565e6c', fontSize: '0.875rem' }}>
                  {text}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Khai phá bản thân */}
          <Grid item xs={12} sm={6} md={2.3}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, color: '#00b14f' }}>
              Khai phá bản thân
            </Typography>
            <Stack spacing={1}>
              {['Tạo CV online', 'Mẫu CV xin việc', 'Mẫu Cover Letter', 'Tìm việc làm', 'Công cụ tính lương Gross - Net', 'Trắc nghiệm MBTI', 'Báo cáo thị trường tuyển dụng'].map((text) => (
                <Link key={text} href="#" underline="hover" sx={{ color: '#565e6c', fontSize: '0.875rem' }}>
                  {text}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Xây dựng sự nghiệp */}
          <Grid item xs={12} sm={6} md={2.2}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, color: '#00b14f' }}>
              Dành cho Doanh nghiệp
            </Typography>
            <Stack spacing={1}>
              {['Đăng tin tuyển dụng', 'Tìm hồ sơ ứng viên', 'Giải pháp HRM', 'Giải pháp Employer Branding', 'TopCV Insights'].map((text) => (
                <Link key={text} href="#" underline="hover" sx={{ color: '#565e6c', fontSize: '0.875rem' }}>
                  {text}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Trụ sở & Contact */}
          <Grid item xs={12} sm={6} md={2.3}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, color: '#00b14f' }}>
              Liên hệ
            </Typography>
            <Stack spacing={1.5}>
              <Stack direction="row" spacing={1} alignItems="flex-start">
                <LocationOnIcon fontSize="small" sx={{ color: '#00b14f', mt: 0.2 }} />
                <Typography variant="body2" sx={{ color: '#565e6c', fontSize: '0.85rem' }}>
                  Tầng 3, Tòa FS GoldSeason, 47 Nguyễn Tuân, Thanh Xuân, Hà Nội
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <PhoneIcon fontSize="small" sx={{ color: '#00b14f' }} />
                <Typography variant="body2" sx={{ color: '#565e6c', fontSize: '0.85rem' }}>
                  Hotline: (024) 6680 5588
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <EmailIcon fontSize="small" sx={{ color: '#00b14f' }} />
                <Typography variant="body2" sx={{ color: '#565e6c', fontSize: '0.85rem' }}>
                  Email: hotro@topcv.vn
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3 }} />

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
          <Typography variant="body2" sx={{ color: '#6c757d', fontSize: '0.8rem' }}>
            © 2014 - 2026 Công ty Cổ phần Công nghệ TopCV Việt Nam. Tất cả quyền được bảo lưu.
          </Typography>
          <Typography variant="body2" sx={{ color: '#6c757d', fontSize: '0.8rem' }}>
            Giấy phép thiết lập MXH số 331/GP-BTTTT do Bộ Thông tin và Truyền thông cấp ngày 10/06/2019
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
