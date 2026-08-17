import React, { useState } from 'react';
import {
  Box,
  Container,
  Paper,
  InputBase,
  Select,
  MenuItem,
  Button,
  Stack,
  Divider,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import { categories, locations } from '../../mock/mockData';

export default function SubHeader() {
  const [keyword, setKeyword] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tất cả ngành nghề');
  const [selectedLocation, setSelectedLocation] = useState('Tất cả địa điểm');

  return (
    <Box sx={{ backgroundColor: '#005826', py: 1.5 }}>
      <Container maxWidth="lg">
        <Paper
          elevation={0}
          sx={{
            p: 0.5,
            display: 'flex',
            alignItems: 'center',
            borderRadius: 2,
            backgroundColor: '#ffffff',
          }}
        >
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={1}
            alignItems="center"
            sx={{ width: '100%' }}
          >
            {/* Search Keyword */}
            <Box sx={{ display: 'flex', alignItems: 'center', flex: 2, px: 1.5, py: 0.5, width: '100%' }}>
              <SearchIcon sx={{ color: '#00b14f', mr: 1 }} />
              <InputBase
                placeholder="Tên công việc, vị trí, từ khóa..."
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                sx={{ flex: 1, fontSize: '0.95rem' }}
              />
            </Box>

            <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', md: 'block' } }} />

            {/* Category Select */}
            <Box sx={{ display: 'flex', alignItems: 'center', flex: 1.2, px: 1, width: '100%' }}>
              <WorkOutlineOutlinedIcon sx={{ color: '#6c757d', mr: 1 }} />
              <Select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                variant="standard"
                disableUnderline
                fullWidth
                sx={{ fontSize: '0.9rem' }}
              >
                {categories.map((cat) => (
                  <MenuItem key={cat} value={cat}>
                    {cat}
                  </MenuItem>
                ))}
              </Select>
            </Box>

            <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', md: 'block' } }} />

            {/* Location Select */}
            <Box sx={{ display: 'flex', alignItems: 'center', flex: 1.2, px: 1, width: '100%' }}>
              <LocationOnIcon sx={{ color: '#6c757d', mr: 1 }} />
              <Select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                variant="standard"
                disableUnderline
                fullWidth
                sx={{ fontSize: '0.9rem' }}
              >
                {locations.map((loc) => (
                  <MenuItem key={loc} value={loc}>
                    {loc}
                  </MenuItem>
                ))}
              </Select>
            </Box>

            {/* Search Button */}
            <Button
              variant="contained"
              color="primary"
              startIcon={<SearchIcon />}
              sx={{
                px: 3.5,
                py: 1.2,
                borderRadius: 1.5,
                whiteSpace: 'nowrap',
                width: { xs: '100%', md: 'auto' },
                fontSize: '0.95rem',
              }}
            >
              Tìm kiếm
            </Button>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}
