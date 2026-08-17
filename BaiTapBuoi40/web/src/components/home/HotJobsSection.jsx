import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Tabs,
  Tab,
  Button,
  Stack,
} from '@mui/material';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import JobCard from '../common/JobCard';
import { mockJobs } from '../../mock/mockData';

export default function HotJobsSection() {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ py: 6, backgroundColor: '#f4f5f7', overflow: 'hidden' }}>
      <Container maxWidth="lg">
        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
          <LocalFireDepartmentIcon sx={{ color: '#e65100', fontSize: 32 }} />
          <Typography variant="h5" sx={{ fontWeight: 800, color: '#212529' }}>
            VIỆC LÀM TỐT NHẤT
          </Typography>
        </Stack>
        <Typography variant="body2" sx={{ color: '#6c757d', mb: 3 }}>
          Ứng tuyển ngay các công việc hấp dẫn được tuyển dụng gấp từ các doanh nghiệp hàng đầu
        </Typography>

        {/* Tabs Filter */}
        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            textColor="primary"
            indicatorColor="primary"
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab label="Tất cả việc làm" sx={{ fontWeight: 700 }} />
            <Tab label="Hà Nội" sx={{ fontWeight: 600 }} />
            <Tab label="TP. Hồ Chí Minh" sx={{ fontWeight: 600 }} />
            <Tab label="IT / Phần mềm" sx={{ fontWeight: 600 }} />
            <Tab label="Kinh doanh / Sales" sx={{ fontWeight: 600 }} />
          </Tabs>
        </Box>

        {/* CSS Grid layout using minmax(0, 1fr) to strictly prevent horizontal overflow */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, minmax(0, 1fr))',
              lg: 'repeat(3, minmax(0, 1fr))',
            },
            gap: 2.5,
            width: '100%',
          }}
        >
          {mockJobs.map((job) => (
            <Box key={job.id} sx={{ minWidth: 0, height: '100%' }}>
              <JobCard job={job} />
            </Box>
          ))}
        </Box>

        {/* Load More Button */}
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            sx={{
              px: 4,
              py: 1.2,
              borderRadius: 20,
              fontWeight: 700,
              borderWidth: 2,
              '&:hover': { borderWidth: 2 },
            }}
          >
            Xem thêm việc làm tốt nhất
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
