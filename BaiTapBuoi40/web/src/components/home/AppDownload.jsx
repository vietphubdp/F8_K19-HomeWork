import React from 'react';
import { Box, Container, Grid, Typography, Card, Stack, Button } from '@mui/material';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';

export default function AppDownload() {
  return (
    <Box sx={{ py: 6, backgroundColor: '#e6f7ef' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
            <Typography variant="h4" sx={{ fontWeight: 800, color: '#004025', mb: 1.5 }}>
              Tải ứng dụng TopCV ngay hôm nay!
            </Typography>
            <Typography variant="body1" sx={{ color: '#565e6c', mb: 4, lineHeight: 1.6 }}>
              Tìm kiếm việc làm mọi lúc, mọi nơi. Nhận thông báo tự động khi có công việc mới phù hợp với nhu cầu và kinh nghiệm của bạn.
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems="center">
              <Button
                variant="contained"
                startIcon={<AppleIcon fontSize="large" />}
                sx={{
                  backgroundColor: '#000000',
                  color: '#ffffff',
                  px: 3,
                  py: 1.2,
                  borderRadius: 2.5,
                  '&:hover': { backgroundColor: '#333333' },
                }}
              >
                <Box sx={{ textAlign: 'left' }}>
                  <Typography variant="caption" sx={{ display: 'block', textTransform: 'none', opacity: 0.8 }}>
                    Download on the
                  </Typography>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, textTransform: 'none' }}>
                    App Store
                  </Typography>
                </Box>
              </Button>

              <Button
                variant="contained"
                startIcon={<AndroidIcon fontSize="large" />}
                sx={{
                  backgroundColor: '#000000',
                  color: '#ffffff',
                  px: 3,
                  py: 1.2,
                  borderRadius: 2.5,
                  '&:hover': { backgroundColor: '#333333' },
                }}
              >
                <Box sx={{ textAlign: 'left' }}>
                  <Typography variant="caption" sx={{ display: 'block', textTransform: 'none', opacity: 0.8 }}>
                    Get it on
                  </Typography>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, textTransform: 'none' }}>
                    Google Play
                  </Typography>
                </Box>
              </Button>
            </Stack>
          </Grid>

          <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Card
              elevation={2}
              sx={{
                p: 3,
                borderRadius: 4,
                textAlign: 'center',
                backgroundColor: '#ffffff',
                maxWidth: 280,
              }}
            >
              <QrCode2Icon sx={{ fontSize: 160, color: '#00b14f' }} />
              <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#212529', mt: 1 }}>
                Quét mã QR để tải app
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
