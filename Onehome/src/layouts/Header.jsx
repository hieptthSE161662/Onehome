import React from 'react';
import GoogleLogin from '../components/LoginPopup';
import { AppBar, Toolbar, Typography, Button, Box, Link } from '@mui/material';
import { Link as RouterLink} from 'react-router-dom';

const Header = () => {
  return (
    <Box className="bg-white shadow-md">
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar className="container mx-auto flex justify-between items-center">


          <Link underline="none" component={RouterLink} to="/">
            <Box variant="h6" className="text-blue-600 font-bold cursor-pointer">
              ONEHOME
            </Box>
          </Link>


          <Box display="flex" gap={3} alignItems="center">
            <Link href="#" color="inherit" underline="none" className="text-gray-700 hover:text-blue-500">Mua</Link>
            <Link href="#" color="inherit" underline="none" className="text-gray-700 hover:text-blue-500">Thuê</Link>
            <Link href="#" color="inherit" underline="none" className="text-gray-700 hover:text-blue-500">Dự án</Link>
            <Link href="#" color="inherit" underline="none" className="text-gray-700 hover:text-blue-500">Chuyên viên</Link>
            <Link href="#" color="inherit" underline="none" className="text-gray-700 hover:text-blue-500">Trong tin</Link>
            <Link href="#" color="inherit" underline="none" className="text-gray-700 hover:text-blue-500">Về Onehome</Link>
            <GoogleLogin />
            <Link href="#" color="inherit" underline="none" className="text-gray-700 hover:text-blue-500">Ký gửi nhà đất</Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
