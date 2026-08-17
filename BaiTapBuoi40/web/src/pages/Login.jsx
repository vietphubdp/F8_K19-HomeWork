import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Stack,
  Divider,
  IconButton,
  InputAdornment,
  Link,
} from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Static navigation back to Home
    navigate('/');
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#f4f5f7',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        py: 4,
        px: 2,
      }}
    >
      <Container maxWidth="xs">
        <Paper
          elevation={1}
          sx={{
            p: { xs: 3, sm: 4 },
            borderRadius: 4,
            backgroundColor: '#ffffff',
            border: '1px solid #e9ecef',
          }}
        >
          {/* Logo & Title */}
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <Box
              component="img"
              src="/logo.png"
              alt="TopCV Logo"
              onClick={() => navigate('/')}
              sx={{ height: 44, cursor: 'pointer', objectFit: 'contain', mb: 1 }}
            />
            <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#212529' }}>
              Chào mừng quay trở lại
            </Typography>
          </Box>



          {/* Divider */}
          <Divider sx={{ my: 2.5 }}>
            <Typography variant="caption" sx={{ color: '#6c757d', px: 1 }}>
              Hoặc đăng nhập bằng email
            </Typography>
          </Divider>

          {/* Email & Password Form */}
          <Box component="form" onSubmit={handleLogin}>
            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#212529', mb: 0.5 }}>
                Email
              </Typography>
              <TextField
                placeholder="Nhập email"
                fullWidth
                size="small"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                    '&.Mui-focused fieldset': { borderColor: '#00b14f' },
                  },
                }}
              />
            </Box>

            <Box sx={{ mb: 2.5 }}>
              <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 0.5 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#212529' }}>
                  Password
                </Typography>

              </Stack>
              <TextField
                placeholder="Nhập mật khẩu"
                type={showPassword ? 'text' : 'password'}
                fullWidth
                size="small"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowPassword(!showPassword)} edge="end" size="small">
                        {showPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                    '&.Mui-focused fieldset': { borderColor: '#00b14f' },
                  },
                }}
              />
            </Box>

            {/* Login Submit Button */}
            <Button
              type="submit"
              variant="contained"
              fullWidth
              endIcon={<ArrowForwardIcon />}
              sx={{
                py: 1.2,
                borderRadius: 20,
                fontSize: '1rem',
                fontWeight: 700,
                backgroundColor: '#00b14f',
                '&:hover': { backgroundColor: '#008f40' },
              }}
            >
              Đăng nhập
            </Button>
          </Box>

          {/* Register Link */}
          <Box sx={{ textAlign: 'center', mt: 3, mb: 2 }}>
            <Typography variant="body2" sx={{ color: '#565e6c' }}>
              Bạn chưa có tài khoản?{' '}
              <Link href="#" underline="hover" sx={{ color: '#00b14f', fontWeight: 700 }}>
                Đăng ký ngay
              </Link>
            </Typography>
          </Box>

          {/* Support Helpline Callout Box */}
          <Box
            sx={{
              backgroundColor: '#f8f9fa',
              border: '1px solid #e9ecef',
              borderRadius: 2,
              p: 1.5,
              textAlign: 'center',
            }}
          >
            <Typography variant="caption" sx={{ color: '#6c757d', display: 'block', lineHeight: 1.5 }}>
              Bạn gặp khó khăn khi tạo tài khoản? Vui lòng gọi tới số{' '}
              <Typography component="span" variant="caption" sx={{ fontWeight: 700, color: '#00b14f' }}>
                1900 068 889 | Nhánh 2
              </Typography>{' '}
              (giờ hành chính).
            </Typography>
          </Box>
        </Paper>

        {/* Footer Copyright */}
        <Typography variant="caption" sx={{ display: 'block', textAlign: 'center', color: '#adb5bd', mt: 4 }}>
          © 2016 - 2026. All Rights Reserved. TopCV Vietnam JSC.
        </Typography>
      </Container>
    </Box>
  );
}
