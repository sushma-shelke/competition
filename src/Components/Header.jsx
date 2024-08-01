import * as React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import logoImage from "../Assets/Images/Mumbai-Local-PNG1.png";
import { useCompitationContext } from "../Context/CompitationContext";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";

const pages = ["Products", "Categories", "Votes", "Faq"];

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [openModal, setOpenModal] = React.useState(false);
  const [mobileNumber, setMobileNumber] = React.useState("");

  const { isLoggedIn, registerOrLoginUser, logoutUser } =
    useCompitationContext();
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (page) => {
    setAnchorElNav(null);
    if (page) {
      navigate(`/${page.toLowerCase()}`);
    }
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleClick = () => {
    navigate("/userdetail");
  };

  const handleLogin = async () => {
    const result = await registerOrLoginUser(mobileNumber);
    if (result) {
      setOpenModal(false);
    } else {
      alert("Failed to login/register.");
    }
  };

  const handleLogout = () => {
    logoutUser();
    navigate("/");
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <AppBar position="sticky" sx={{ background: "#fff" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box>
            <img
              src={logoImage}
              className="logocss"
              onClick={handleLogoClick}
              style={{ cursor: "pointer" }}
            />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              className="menuButton"
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{ color: "#9C2946" }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              open={Boolean(anchorElNav)}
              onClose={() => handleCloseNavMenu(null)}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handleCloseNavMenu(page)}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
              {isLoggedIn ? (
                <>
                  <MenuItem onClick={handleClick}>
                    <StyledBadge
                      overlap="circular"
                      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                      variant="dot"
                    >
                      <Avatar />
                    </StyledBadge>
                    <Typography textAlign="center" sx={{ ml: 1 }}>
                      Profile
                    </Typography>
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>
                    <LogoutIcon sx={{ color: "#9C2946", mr: 1 }} />
                    <Typography textAlign="center">Logout</Typography>
                  </MenuItem>
                </>
              ) : (
                <MenuItem onClick={handleOpenModal}>
                  <LoginIcon sx={{ color: "#9C2946", mr: 1 }} />
                  <Typography textAlign="center">Login</Typography>
                </MenuItem>
              )}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Typography
                key={page}
                onClick={() => handleCloseNavMenu(page)}
                sx={{
                  margin: 2,
                  color: "#9C2946",
                  display: "block",
                  fontWeight: "700",
                  textTransform: "capitalize",
                  fontSize: "20px",
                  cursor: "pointer",
                  "&:hover": {
                    color: "#4A4A4A", // Dark gray color on hover
                  },
                }}
              >
                {page}
              </Typography>
            ))}
          </Box>
          <Box
            sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" }}
          >
            {isLoggedIn && (
              <Box
                onClick={handleClick}
                sx={{ cursor: "pointer", display: { xs: "flex", md: "none" } }}
              >
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  variant="dot"
                >
                  <Avatar />
                </StyledBadge>
              </Box>
            )}
          </Box>
          <Box
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
          >
            {isLoggedIn ? (
              <Button
                variant="contained"
                color="primary"
                onClick={handleLogout}
                sx={{
                  backgroundColor: "#9C2946",
                  fontWeight: "600",
                  textTransform: "capitalize",
                  borderRadius: "50px",
                  padding: "10px 20px",
                  fontSize: "16px",
                  boxShadow: "4px 6px 10px 0px grey",
                }}
              >
                Logout
                <LogoutIcon sx={{ color: "#fff", marginLeft: "10px" }} />
              </Button>
            ) : (
              <Button
                variant="contained"
                color="primary"
                onClick={handleOpenModal}
                sx={{
                  backgroundColor: "#9C2946",
                  fontWeight: "600",
                  textTransform: "capitalize",
                  borderRadius: "50px",
                  padding: "20px",
                  fontSize: "16px",
                  boxShadow: "4px 6px 10px 0px grey",
                }}
              >
                Login
                <LoginIcon sx={{ color: "#fff", marginLeft: "10px" }} />
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>

      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter your mobile number to login.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="mobileNumber"
            label="Mobile Number"
            type="text"
            fullWidth
            variant="outlined"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button
            sx={{
              color: "white",
              backgroundColor: "#9C2946",
              fontWeight: "800",
              width: "10rem",
              borderRadius: "50px",
            }}
            onClick={handleCloseModal}
            color="primary"
          >
            Cancel
          </Button>
          <Button
            sx={{
              color: "white",
              backgroundColor: "#9C2946",
              fontWeight: "800",
              width: "10rem",
              borderRadius: "50px",
            }}
            onClick={handleLogin}
            color="primary"
          >
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </AppBar>
  );
}

export default Header;
