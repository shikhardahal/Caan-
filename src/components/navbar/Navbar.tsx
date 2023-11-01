"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Logo } from "./Logo";
import { useRouter } from "next/navigation";

const pages = [
  { id: 1, page: "Home", path: "/" },
  { id: 2, page: "About Us", path: "/about-us" },
  { id: 3, page: "Activities", path: "/activities" },
  { id: 4, page: "Operation & Safety", path: "#" },
  { id: 5, page: "Documents", path: "/documents" },
  { id: 6, page: "Forms", path: "/forms" },
  { id: 7, page: "Contact", path: "/contact-us" },
];

function Navbar() {
  const router = useRouter();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar disableGutters>
          <Box display={{ xs: "none", md: "flex" }}>
            <Logo />
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.id}
                  onClick={() => {
                    handleCloseNavMenu();
                    router.push(page.path);
                  }}
                >
                  <Typography textAlign="center" fontWeight="600">
                    {page.page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            display={{ xs: "flex", md: "none" }}
            flexGrow="1"
            justifyContent="center"
          >
            <Logo />
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "end",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.id}
                onClick={() => {
                  handleCloseNavMenu();
                  router.push(page.path);
                }}
                sx={{
                  my: 2,
                  color: "#000",
                  display: "block",
                  textTransform: "capitalize",
                  fontWeight: "600",
                  paddingLeft: "15px",
                }}
              >
                {page.page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Container>
  );
}
export default Navbar;

// import styles from "./navbar.module.css";
// import { Logo } from "./Logo";
// import Image from "next/image";

// const Navbar = ({ hasColor = false }) => {
//   return (
//     <div className={`container ${styles['navbar__Container']} ${hasColor && styles['navbar__Container__Coloured']}`}>
//       <div className="navbar__Logo">
//         <Logo />
//       </div>
//       <div className={styles['navbar__Contents']}>
//         <div>
//           <ul className={styles['navbar__Links']}>
//             <li><a href="/">Home</a></li>
//             <li><a href="/about-us">About Us</a></li>
//             <li><a href="/activities">Activities</a></li>
//             <li><a href="#">Operation & Safety</a></li>
//             <li><a href="/documents">Documents</a></li>
//             <li><a href="/forms">Forms</a></li>
//             <li><a href="/contact-us">Contact</a></li>
//           </ul>
//         </div>
//         <div>
//           <Image src='/Magnifier.png' alt="magnifier" height={20} width={20} />
//         </div>
//       </div>
//     </div>
//     // <div className={`${styles['nav-container']}`}>
//     //   <div className="wrapper">
//     //     <nav className={styles.navbar}>
//     //       <a href="#" className={styles['nav-logo']}><Logo /></a>
//     //       <ul className={styles['nav-list']}>
//     //         <li><a href="/">Home</a></li>
//     //         <li><a href="/about-us">About Us</a></li>
//     //         <li><a href="/activities">Activities</a></li>
//     //         <li><a href="#">Operation & Safety</a></li>
//     //         <li><a href="/documents">Documents</a></li>
//     //         <li><a href="/forms">Forms</a></li>
//     //         <li><a href="/contact-us">Contact</a></li>
//     //       </ul>
//     //     </nav>
//     //   </div>
//     // </div>
//   );
// }

// export default Navbar;
