import React, { useState } from 'react';
import { Card, Box, Typography, Chip, Avatar } from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';

export default function CompanyCard({ company }) {
  const [imgError, setImgError] = useState(false);
  const initialLetter = company.company_name ? company.company_name.charAt(0) : 'C';

  return (
    <Card
      sx={{
        p: 2,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        cursor: 'pointer',
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
          borderColor: '#00b14f',
          transform: 'translateY(-3px)',
          boxShadow: '0 6px 16px rgba(0, 177, 79, 0.12)',
        },
      }}
    >
      <Box
        sx={{
          width: 68,
          height: 68,
          borderRadius: 2,
          border: '1px solid #e9ecef',
          p: 0.8,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fff',
          mb: 1.5,
        }}
      >
        {!imgError && company.logo_url ? (
          <Box
            component="img"
            src={company.logo_url}
            alt={company.company_name}
            onError={() => setImgError(true)}
            sx={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        ) : (
          <Avatar sx={{ bgcolor: '#00b14f', width: 48, height: 48, fontWeight: 700 }}>
            {initialLetter}
          </Avatar>
        )}
      </Box>

      <Typography
        variant="subtitle1"
        sx={{
          fontWeight: 700,
          color: '#212529',
          mb: 0.5,
          fontSize: '0.95rem',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          '&:hover': { color: '#00b14f' },
        }}
      >
        {company.short_name || company.company_name}
      </Typography>

      <Typography variant="body2" sx={{ color: '#6c757d', fontSize: '0.8rem', mb: 2 }}>
        {company.category}
      </Typography>

      <Chip
        icon={<BusinessIcon sx={{ fontSize: '14px !important', color: '#00b14f' }} />}
        label={`${company.open_jobs_count} việc làm`}
        size="small"
        sx={{
          backgroundColor: '#e6f7ef',
          color: '#00b14f',
          fontWeight: 600,
          fontSize: '0.75rem',
          mt: 'auto',
        }}
      />
    </Card>
  );
}
