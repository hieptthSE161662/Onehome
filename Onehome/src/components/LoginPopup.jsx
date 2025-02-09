import { useState, useEffect } from "react";
import { Avatar, Modal, Button, Box, Typography, Divider, IconButton, Menu, MenuItem } from "@mui/material";
import { auth, googleProvider, facebookProvider, signInWithPopup, signOut } from "../configs/FirebaseConfig";
import { TextField } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import CloseIcon from '@mui/icons-material/Close';

const Login = () => {
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null); // Điều khiển menu

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async (provider) => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      setOpen(false);
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
    setAnchorEl(null);
  };

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget); // Mở menu khi click vào avatar
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      {user ? (
        <>
          <Avatar
            src={user.photoURL}
            alt="Avatar"
            onClick={handleAvatarClick}
            className="cursor-pointer"
          />
          {/* Menu hiển thị khi click vào avatar */}
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCloseMenu} >
            <MenuItem  >Thông tin cá nhân</MenuItem>
            <MenuItem  onClick={handleLogout}>Đăng xuất</MenuItem>
          </Menu>
        </>
      ) : (
        <Avatar onClick={() => setOpen(true)} className="cursor-pointer" />
      )}

      {/* Modal đăng nhập */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10/12 h-5/6 bg-white p-4 rounded-lg shadow-lg flex bg-gradient-to-tr from-orange-100 to-gray-200"
        >
          {/* Left section: Information */}
          <Box className="w-1/2 p-4  border-gray-300 space-y-5">
            <Typography variant="h5" className="font-bold mb-2">
              Giải pháp giao dịch Bất động sản trực tuyến
            </Typography>
            <Typography variant="h5" className="mb-2">Vinhomes Market</Typography>
            <Typography variant="body1" className="mb-2">
              Đăng nhập ngay để khám phá toàn bộ thông tin và tận hưởng mọi tính năng tuyệt vời trên Vinhomes Market!
            </Typography>
            <Divider />
            <Typography variant="h9" className="font-bold mt-4">Khách đã đăng nhập:</Typography>
            <Typography variant="body2">- Xem thông tin chi tiết các dự án.</Typography>
            <Typography variant="body2">- Công cụ tính giá và dòng tiền.</Typography>
            <Typography variant="body2">- Cập nhật thông tin dự án mới.</Typography>
            <Divider />
            <Typography variant="h9" className="font-bold mt-4">Khách chưa đăng nhập:</Typography>
            <Typography variant="body2">- Xem thông tin dự án.</Typography>
            <Typography variant="body2">- Tham quan ảo Vinhomes 360.</Typography>
          </Box>

          {/* Right section: Login Form */}
          <Box className="w-1/2 m-4 text-center space-y-5 content-center bg-white rounded-lg">
            <IconButton
              onClick={() => setOpen(false)}
              sx={{
                position: "absolute",
                top: 5,
                right: 5,
              }}>
              <CloseIcon />
            </IconButton>

            <Box className="m-4 p-4 text-center space-y-5 content-center bg-white rounded-lg">
              <Typography variant="h6" className="mb-2">Đăng nhập hoặc Đăng ký</Typography>
              <TextField fullWidth label="Email" variant="outlined" className="mb-2" />
              <TextField fullWidth label="Mật khẩu" type="password" variant="outlined" className="mb-2" />
              <Typography variant="body2" className="text-blue-500 cursor-pointer right-0 mb-2">
                Quên mật khẩu?
              </Typography>
              <Button fullWidth variant="contained" color="primary" className="mb-2">Đăng nhập</Button>
              <Button fullWidth variant="outlined" color="primary" className="mb-2">Đăng ký</Button>
              <Typography variant="body2" className="text-gray-500 mb-2">Hoặc đăng nhập bằng:</Typography>
              <div className="flex justify-center space-x-4 mb-4">
                <GoogleIcon onClick={() => handleLogin(googleProvider)} className="h-10 text-red-600 cursor-pointer" />
                <FacebookIcon onClick={() => handleLogin(facebookProvider)} className="h-10 text-blue-600 cursor-pointer" />
              </div>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default Login;
