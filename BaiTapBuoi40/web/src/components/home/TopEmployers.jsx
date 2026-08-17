import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Button, Stack, CircularProgress } from '@mui/material';
import CompanyCard from '../common/CompanyCard';
import { getCompanies } from '../../api/jobService';

export default function TopEmployers() {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    getCompanies().then((data) => {
      if (isMounted) {
        setCompanies(data);
        setLoading(false);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

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

        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
            <CircularProgress color="primary" />
          </Box>
        ) : (
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
            {companies.map((company) => (
              <Box key={company.id} sx={{ minWidth: 0, height: '100%' }}>
                <CompanyCard company={company} />
              </Box>
            ))}
          </Box>
        )}
      </Container>
    </Box>
  );
}
