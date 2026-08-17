import React from 'react';
import { Box } from '@mui/material';
import HeroBanner from '../components/home/HeroBanner';
import TopEmployers from '../components/home/TopEmployers';
import HotJobsSection from '../components/home/HotJobsSection';

export default function Home() {
  return (
    <Box>
      <HeroBanner />
      <TopEmployers />
      <HotJobsSection />

    </Box>
  );
}
