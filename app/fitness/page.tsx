'use client';

import { useState } from 'react';
import { 
  Box, 
  Button, 
  Typography, 
  Container, 
  Paper,
  Grid,
  useTheme
} from '@mui/material';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

export default function FitnessPage() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [isViewing, setIsViewing] = useState(false);
  const theme = useTheme();

  return (
    <Box>
      <Navbar />
      <Box
        sx={{
          minHeight: '100vh',
          background: `
            linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
            url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          py: 8,
          pt: 16
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  fontWeight: 'bold',
                  mb: 2,
                  color: 'white',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                }}
              >
                Personalized Fitness & Nutrition
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  maxWidth: '2xl',
                  mx: 'auto',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
                }}
              >
                Get your customized diet and workout plan tailored to your goals, preferences, and lifestyle. 
                Our AI-powered system creates comprehensive plans to help you achieve your fitness objectives.
              </Typography>
            </Box>
          </motion.div>


          <Grid container spacing={4} sx={{ mt: 8 }}>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    borderRadius: 2,
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}
                >
                  <Typography variant="h4" sx={{ fontWeight: 'medium', mb: 2, color: 'black' }}>
                    Diet Plan
                  </Typography>
                  <Typography color="text.secondary">
                    Get a customized nutrition plan that aligns with your dietary preferences, 
                    restrictions, and fitness goals. Our AI considers your lifestyle and 
                    creates a sustainable eating plan.
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    borderRadius: 2,
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}
                >
                  <Typography variant="h4" sx={{ fontWeight: 'medium', mb: 2, color: 'black' }}>
                    Workout Plan
                  </Typography>
                  <Typography color="text.secondary">
                    Receive a personalized workout routine designed for your fitness level, 
                    available equipment, and time constraints. Progress tracking and 
                    adjustments included.
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>

          <Grid container spacing={4} maxWidth="md" mx="auto">
            <Grid item xs={12} md={6}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Button
                  fullWidth
                  variant="contained"
                  color="success"
                  size="large"
                  onClick={() => setIsGenerating(true)}
                  sx={{
                    py: 3,
                    borderRadius: 2,
                    boxShadow: 3,
                    background: 'linear-gradient(45deg, #4CAF50 30%, #45a049 90%)',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #45a049 30%, #3d8b40 90%)',
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="h6" sx={{ mb: 1, color: 'white' }}>
                      Generate Plan
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.9, color: 'white' }}>
                      Create your personalized plan
                    </Typography>
                  </Box>
                </Button>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Button
                  fullWidth
                  variant="contained"
                  color="success"
                  size="large"
                  onClick={() => setIsViewing(true)}
                  sx={{
                    py: 3,
                    borderRadius: 2,
                    boxShadow: 3,
                    background: 'linear-gradient(45deg, #4CAF50 30%, #45a049 90%)',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #45a049 30%, #3d8b40 90%)',
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="h6" sx={{ mb: 1, color: 'white' }}>
                      View Plan
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.9, color: 'white' }}>
                      Access your existing plan
                    </Typography>
                  </Box>
                </Button>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
