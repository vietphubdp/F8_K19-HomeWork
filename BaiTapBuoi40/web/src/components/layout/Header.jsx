import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  Container,
  Stack,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from '@mui/material';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isLoginPage = location.pathname === '/login';

  if (isLoginPage) return null;

  const navItems = [
    { label: 'Việc làm', path: '/' },
    { label: 'Hồ sơ & CV', path: '#' },
    { label: 'Công ty', path: '#' },
    { label: 'Công cụ', path: '#' },
    { label: 'Cẩm nang nghề nghiệp', path: '#' },
  ];

  const handleNavClick = (path) => {
    if (path !== '#') {
      navigate(path);
    }
    setMobileOpen(false);
  };

  return (
    <AppBar position="sticky" color="default" elevation={0} sx={{ borderBottom: '1px solid #e9ecef', backgroundColor: '#ffffff' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: 64, justifyContent: 'space-between' }}>
          {/* Left section: Mobile Hamburger Menu & Logo */}
          <Stack direction="row" alignItems="center" spacing={1.5}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={() => setMobileOpen(true)}
              sx={{ display: { md: 'none' }, color: '#212529', p: 0.5 }}
            >
              <MenuIcon />
            </IconButton>

            <Box
              component="img"
              src="/logo.png"
              alt="TopCV Logo"
              onClick={() => navigate('/')}
              sx={{ height: 36, cursor: 'pointer', objectFit: 'contain' }}
            />
          </Stack>

          {/* Desktop Navigation Links */}
          <Stack direction="row" spacing={0.5} sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, ml: 3 }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                onClick={() => handleNavClick(item.path)}
                sx={{
                  color: location.pathname === item.path ? '#00b14f' : '#212529',
                  fontWeight: location.pathname === item.path ? 700 : 500,
                  fontSize: '0.9rem',
                  px: 1.5,
                  '&:hover': { color: '#00b14f', backgroundColor: 'transparent' },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Stack>

          {/* Desktop Right Actions */}
          <Stack direction="row" spacing={1.5} alignItems="center" sx={{ display: { xs: 'none', sm: 'flex' } }}>
            <Button
              variant="outlined"
              color="primary"
              startIcon={<AddCircleOutlinedIcon />}
              onClick={() => navigate('/post-job')}
              sx={{
                borderRadius: 20,
                px: 2,
                py: 0.7,
                borderColor: '#00b14f',
                color: '#00b14f',
                fontWeight: 600,
                fontSize: '0.85rem',
                '&:hover': {
                  borderColor: '#008f40',
                  backgroundColor: '#e6f7ef',
                },
              }}
            >
              Đăng tin tuyển dụng
            </Button>

            <Button
              variant="text"
              onClick={() => navigate('/login')}
              sx={{
                color: '#00b14f',
                fontWeight: 600,
                px: 1.5,
                '&:hover': { backgroundColor: '#e6f7ef' },
              }}
            >
              Đăng nhập
            </Button>

            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate('/login')}
              sx={{
                borderRadius: 20,
                px: 2.5,
                fontWeight: 600,
              }}
            >
              Đăng ký
            </Button>
          </Stack>

          {/* Mobile Right Quick Action button */}
          <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={() => navigate('/login')}
              sx={{ borderRadius: 20, fontSize: '0.8rem', fontWeight: 600 }}
            >
              Đăng nhập
            </Button>
          </Box>
        </Toolbar>
      </Container>

      {/* Mobile Navigation Drawer (Sidebar takes 60% of screen width) */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            width: '60vw',
            minWidth: 260,
            maxWidth: 320,
            backgroundColor: '#ffffff',
            p: 2.5,
            boxSizing: 'border-box',
            overflowX: 'hidden',
          },
        }}
      >
        {/* Drawer Header */}
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ pb: 1.5, mb: 1 }}>
          <Box
            component="img"
            src="/logo.png"
            alt="TopCV Logo"
            onClick={() => handleNavClick('/')}
            sx={{ height: 28, cursor: 'pointer', objectFit: 'contain' }}
          />
          <IconButton onClick={() => setMobileOpen(false)} size="small" sx={{ color: '#6c757d', p: 0.5 }}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </Stack>

        <Divider sx={{ mb: 2 }} />

        {/* Navigation items list with padding */}
        <List disablePadding sx={{ mb: 2 }}>
          {navItems.map((item) => (
            <ListItem key={item.label} disablePadding sx={{ mb: 0.8 }}>
              <ListItemButton
                onClick={() => handleNavClick(item.path)}
                selected={location.pathname === item.path}
                sx={{
                  borderRadius: 2,
                  py: 1,
                  px: 1.8,
                  width: '100%',
                  '&.Mui-selected': {
                    backgroundColor: '#e6f7ef',
                    color: '#00b14f',
                    fontWeight: 700,
                  },
                  '&:hover': {
                    backgroundColor: '#f8f9fa',
                  },
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontSize: '0.9rem',
                    fontWeight: location.pathname === item.path ? 700 : 500,
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider sx={{ my: 2 }} />

        {/* Action Buttons inside Sidebar */}
        <Stack spacing={1.5} sx={{ pt: 0.5, width: '100%', boxSizing: 'border-box' }}>
          <Button
            variant="outlined"
            color="primary"
            fullWidth
            startIcon={<AddCircleOutlinedIcon sx={{ fontSize: '18px !important' }} />}
            onClick={() => handleNavClick('/post-job')}
            sx={{
              borderRadius: 2,
              py: 1,
              px: 1.5,
              fontSize: '0.82rem',
              fontWeight: 600,
              borderColor: '#00b14f',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
              overflow: 'hidden',
            }}
          >
            Đăng tin tuyển dụng
          </Button>

          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => handleNavClick('/login')}
            sx={{
              borderRadius: 2,
              py: 1,
              px: 1.5,
              fontSize: '0.85rem',
              fontWeight: 700,
              backgroundColor: '#00b14f',
              whiteSpace: 'nowrap',
            }}
          >
            Đăng nhập / Đăng ký
          </Button>
        </Stack>
      </Drawer>
    </AppBar>
  );
}
