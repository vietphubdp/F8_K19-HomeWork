import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  Box,
  Typography,
  Chip,
  IconButton,
  Stack,
  Tooltip,
  Avatar,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import BusinessIcon from '@mui/icons-material/Business';

export default function JobCard({ job }) {
  const navigate = useNavigate();
  const [saved, setSaved] = useState(false);
  const [imgError, setImgError] = useState(false);

  const initialLetter = job.company?.company_name ? job.company.company_name.charAt(0) : 'T';

  return (
    <Card
      onClick={() => navigate('/job-detail')}
      sx={{
        p: 2,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        cursor: 'pointer',
        transition: 'all 0.2s ease-in-out',
        backgroundColor: '#ffffff',
        '&:hover': {
          transform: 'translateY(-2px)',
          borderColor: '#00b14f',
          boxShadow: '0 6px 16px rgba(0, 177, 79, 0.12)',
        },
      }}
    >
      <Box>
        <Stack direction="row" spacing={1.5} alignItems="flex-start">
          {/* Company Logo / Avatar fallback */}
          <Box
            sx={{
              width: 52,
              height: 52,
              borderRadius: 2,
              border: '1px solid #e9ecef',
              p: 0.5,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#fff',
              flexShrink: 0,
            }}
          >
            {!imgError && job.company?.logo_url ? (
              <Box
                component="img"
                src={job.company.logo_url}
                alt={job.company?.company_name}
                onError={() => setImgError(true)}
                sx={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            ) : (
              <Avatar sx={{ bgcolor: '#00b14f', width: 42, height: 42, fontSize: '1rem', fontWeight: 700 }}>
                {initialLetter}
              </Avatar>
            )}
          </Box>

          {/* Job Main Info */}
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Stack direction="row" alignItems="center" spacing={0.8} sx={{ mb: 0.3 }}>
              {job.is_hot && (
                <Chip
                  icon={<LocalFireDepartmentIcon sx={{ fontSize: '13px !important', color: '#fff' }} />}
                  label="HOT"
                  size="small"
                  sx={{
                    height: 18,
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    backgroundColor: '#e65100',
                    color: '#ffffff',
                    px: 0.3,
                  }}
                />
              )}
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 700,
                  color: '#212529',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  fontSize: '0.95rem',
                  '&:hover': { color: '#00b14f' },
                }}
              >
                {job.title}
              </Typography>
            </Stack>

            <Typography
              variant="body2"
              sx={{
                color: '#6c757d',
                fontSize: '0.8rem',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {job.company?.company_name || job.company?.short_name}
            </Typography>
          </Box>

          {/* Save Button */}
          <Tooltip title={saved ? 'Đã lưu tin' : 'Lưu tin này'}>
            <IconButton
              size="small"
              onClick={(e) => {
                e.stopPropagation();
                setSaved(!saved);
              }}
              sx={{ color: saved ? '#e65100' : '#adb5bd', p: 0.5 }}
            >
              {saved ? <FavoriteIcon fontSize="small" /> : <FavoriteBorderIcon fontSize="small" />}
            </IconButton>
          </Tooltip>
        </Stack>

        {/* Badges / Details */}
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mt: 2 }}>
          <Chip
            icon={<AttachMoneyIcon sx={{ fontSize: '15px !important', color: '#00b14f' }} />}
            label={job.salary}
            size="small"
            sx={{
              backgroundColor: '#e6f7ef',
              color: '#00b14f',
              fontWeight: 700,
              fontSize: '0.78rem',
            }}
          />
          <Chip
            icon={<LocationOnIcon sx={{ fontSize: '15px !important', color: '#6c757d' }} />}
            label={job.location}
            size="small"
            variant="outlined"
            sx={{ fontSize: '0.78rem', color: '#565e6c' }}
          />
        </Stack>
      </Box>

      {/* Footer Info */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
        rowGap={1}
        sx={{ mt: 2, pt: 1.5, borderTop: '1px dashed #e9ecef' }}
      >
        <Typography variant="caption" sx={{ color: '#6c757d', display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <AccessTimeIcon sx={{ fontSize: 13 }} /> Hạn nộp: {job.deadline}
        </Typography>
        <Chip
          label={job.experience_level}
          size="small"
          sx={{
            height: 22,
            fontSize: '0.72rem',
            color: '#00b14f',
            backgroundColor: '#e6f7ef',
            fontWeight: 600,
          }}
        />
      </Stack>
    </Card>
  );
}
