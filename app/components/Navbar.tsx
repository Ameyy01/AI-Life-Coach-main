'use client';

import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        bgcolor: 'rgba(0, 0, 0, 0.9)',
        backdropFilter: 'blur(10px)',
        boxShadow: 'none',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}
    >
      <Toolbar sx={{ maxWidth: 'lg', mx: 'auto', width: '100%' }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h5"
            component={Link}
            href="/"
            sx={{
              flexGrow: 1,
              textDecoration: 'none',
              color: 'white',
              fontWeight: 'bold',
              letterSpacing: '1px',
              '&:hover': {
                color: '#4CAF50'
              }
            }}
          >
            AI Life Coach
          </Typography>
        </motion.div>
        <Box sx={{ display: 'flex', gap: 2, ml: 'auto' }}>
          {['Fitness', 'Mental', 'Career', 'Finance'].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Button
                color="inherit"
                component={Link}
                href={`/${item.toLowerCase()}`}
                sx={{
                  color: 'white',
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    width: '0%',
                    height: '2px',
                    bottom: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: '#4CAF50',
                    transition: 'width 0.3s ease-in-out'
                  },
                  '&:hover::after': {
                    width: '100%'
                  }
                }}
              >
                {item}
              </Button>
            </motion.div>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
} 