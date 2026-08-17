import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  InputBase,
  Select,
  MenuItem,
  Button,
  Stack,
  Chip,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import { categories, locations } from '../../mock/mockData';

export default function HeroBanner() {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('Tất cả ngành nghề');
  const [location, setLocation] = useState('Tất cả địa điểm');

  const popularTags = ['ReactJS', 'Sales Bất động sản', 'Digital Marketing', 'Kế toán tổng hợp', 'NodeJS', 'Chăm sóc khách hàng'];

  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #005826 0%, #00b14f 50%, #004025 100%)',
        pt: { xs: 4, md: 5 },
        pb: { xs: 5, md: 6 },
        color: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h3" component="h1" sx={{ fontWeight: 800, mb: 1.5, fontSize: { xs: '1.8rem', md: '2.4rem' }, lineHeight: 1.2 }}>
          TopCV - Tạo CV, Tìm việc làm, Tuyển dụng hiệu quả
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 400, opacity: 0.9, mb: 3.5, fontSize: { xs: '1rem', md: '1.15rem' } }}>
          Tiếp cận 60.000+ tin tuyển dụng việc làm mỗi ngày từ hàng nghìn doanh nghiệp uy tín tại Việt Nam
        </Typography>

        {/* Full-width Search Box Card inside maxWidth="lg" */}
        <Paper
          elevation={3}
          sx={{
            p: 1,
            borderRadius: 3,
            backgroundColor: '#ffffff',
            mb: 3,
            width: '100%',
          }}
        >
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={1} alignItems="center">
            {/* Keyword */}
            <Box sx={{ display: 'flex', alignItems: 'center', flex: 2, px: 1.5, py: 1, width: '100%' }}>
              <SearchIcon sx={{ color: '#00b14f', mr: 1 }} />
              <InputBase
                placeholder="Vị trí tuyển dụng, tên công ty..."
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                sx={{ flex: 1, color: '#212529', fontSize: '0.95rem' }}
              />
            </Box>

            {/* Category Dropdown */}
            <Box sx={{ display: 'flex', alignItems: 'center', flex: 1.2, px: 1, borderLeft: { md: '1px solid #e9ecef' }, width: '100%' }}>
              <WorkOutlineOutlinedIcon sx={{ color: '#6c757d', mr: 1 }} />
              <Select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                variant="standard"
                disableUnderline
                fullWidth
                sx={{ fontSize: '0.9rem', color: '#212529' }}
              >
                {categories.map((cat) => (
                  <MenuItem key={cat} value={cat}>
                    {cat}
                  </MenuItem>
                ))}
              </Select>
            </Box>

            {/* Location Dropdown */}
            <Box sx={{ display: 'flex', alignItems: 'center', flex: 1.2, px: 1, borderLeft: { md: '1px solid #e9ecef' }, width: '100%' }}>
              <LocationOnIcon sx={{ color: '#6c757d', mr: 1 }} />
              <Select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                variant="standard"
                disableUnderline
                fullWidth
                sx={{ fontSize: '0.9rem', color: '#212529' }}
              >
                {locations.map((loc) => (
                  <MenuItem key={loc} value={loc}>
                    {loc}
                  </MenuItem>
                ))}
              </Select>
            </Box>

            {/* Submit Button */}
            <Button
              variant="contained"
              color="primary"
              startIcon={<SearchIcon />}
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: 2,
                fontSize: '1rem',
                fontWeight: 700,
                width: { xs: '100%', md: 'auto' },
                whiteSpace: 'nowrap',
                backgroundColor: '#00b14f',
                '&:hover': { backgroundColor: '#008f40' },
              }}
            >
              Tìm kiếm
            </Button>
          </Stack>
        </Paper>

        {/* Popular Searches */}
        <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap" useFlexGap>
          <Typography variant="body2" sx={{ opacity: 0.85, fontWeight: 500 }}>
            Từ khóa phổ biến:
          </Typography>
          {popularTags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              size="small"
              onClick={() => setKeyword(tag)}
              sx={{
                backgroundColor: 'rgba(255,255,255,0.18)',
                color: '#ffffff',
                fontSize: '0.78rem',
                cursor: 'pointer',
                '&:hover': { backgroundColor: 'rgba(255,255,255,0.3)' },
              }}
            />
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
