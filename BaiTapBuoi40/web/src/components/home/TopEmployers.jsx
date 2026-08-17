import React from 'react';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import CompanyCard from '../common/CompanyCard';
import { mockCompanies } from '../../mock/mockData';

export default function TopEmployers() {
  return (
    <Box sx={{ py: 6, backgroundColor: '#ffffff', overflow: 'hidden' }}>
      <Container maxWidth="lg">
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 4 }}>
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 800, color: '#212529' }}>
              TOP CÔNG TY HÀNG ĐẦU
            </Typography>
            <Typography variant="body2" sx={{ color: '#6c757d', mt: 0.5 }}>
              Khám phá các doanh nghiệp có môi trường làm việc tốt nhất Việt Nam
            </Typography>
          </Box>

          <Button variant="text" color="primary" sx={{ fontWeight: 700 }}>
            Xem tất cả
          </Button>
        </Stack>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, minmax(0, 1fr))',
              lg: 'repeat(4, minmax(0, 1fr))',
            },
            gap: 2.5,
            width: '100%',
          }}
        >
          {mockCompanies.map((company) => (
            <Box key={company.id} sx={{ minWidth: 0, height: '100%' }}>
              <CompanyCard company={company} />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
