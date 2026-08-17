import React from 'react';
import { Box, Container, Grid, Typography, Card, Stack, Button } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import StarsIcon from '@mui/icons-material/Stars';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';

export default function MarketTrends() {
  return (
    <Box sx={{ py: 6, backgroundColor: '#ffffff' }}>
      <Container maxWidth="lg">
        {/* Market Insights Banner */}
        <Card
          elevation={0}
          sx={{
            background: 'linear-gradient(135deg, #004025 0%, #00b14f 100%)',
            color: '#ffffff',
            p: { xs: 3, md: 5 },
            borderRadius: 4,
            mb: 6,
          }}
        >
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7}>
              <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 2 }}>
                <StarsIcon sx={{ color: '#ffb703', fontSize: 36 }} />
                <Typography variant="h4" sx={{ fontWeight: 800 }}>
                  Huy Hiệu Tin Tốt TopCV
                </Typography>
              </Stack>
              <Typography variant="body1" sx={{ opacity: 0.9, lineHeight: 1.7, mb: 3 }}>
                Gia tăng cơ hội ứng tuyển thành công với các việc làm được gắn huy hiệu xác thực thông tin minh bạch, mức lương rõ ràng và phản hồi nhanh từ NTD.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#ffffff',
                  color: '#00b14f',
                  fontWeight: 700,
                  px: 3,
                  py: 1,
                  '&:hover': { backgroundColor: '#e6f7ef' },
                }}
              >
                Khám phá ngay
              </Button>
            </Grid>

            <Grid item xs={12} md={5}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Box sx={{ p: 2.5, backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: 3, textAlign: 'center' }}>
                    <Typography variant="h3" sx={{ fontWeight: 800, color: '#ffb703' }}>
                      98%
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.9, mt: 0.5 }}>
                      Tỷ lệ phản hồi nhanh
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box sx={{ p: 2.5, backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: 3, textAlign: 'center' }}>
                    <Typography variant="h3" sx={{ fontWeight: 800, color: '#ffb703' }}>
                      24h
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.9, mt: 0.5 }}>
                      Thời gian duyệt hồ sơ
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </Box>
  );
}
