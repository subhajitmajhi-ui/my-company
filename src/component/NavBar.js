import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, IconButton, Button, Typography, Drawer, List, ListItem, ListItemText, Divider, useMediaQuery } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

const NavBar = ({noOfProduct}) => {
  const isMobile = useMediaQuery('(max-width: 1376px)'); 
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [noOfItem, setNoOfItem] = useState(0)


  useEffect(() => {
    const initialCart = JSON.parse(localStorage.getItem('cart')) || [];
    setNoOfItem(initialCart.length);
  }, [noOfProduct])

  const removeCartItem = () => {
    localStorage.removeItem('cart');
    setNoOfItem(0)
  }

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setIsDrawerOpen(open);
  };

  const menuItems = (
    <div style={{ display: 'flex' }}>
      <Button component={Link} to="/the-edit" style={{ textDecoration: 'none', color: 'inherit', margin: '0 8px' }}>
        THE EDIT
      </Button>
      <Button component={Link} to="/new-arrivals" style={{ textDecoration: 'none', color: 'inherit', margin: '0 8px' }}>
        NEW ARRIVALS
      </Button>
      <Button component={Link} to="/designers" style={{ textDecoration: 'none', color: 'inherit', margin: '0 8px' }}>
        DESIGNERS
      </Button>
      <Button component={Link} to="/clothing" style={{ textDecoration: 'none', color: 'inherit', margin: '0 8px' }}>
        CLOTHING
      </Button>
      <Button component={Link} to="/shoes" style={{ textDecoration: 'none', color: 'inherit', margin: '0 8px' }}>
        SHOES
      </Button>
      <Button component={Link} to="/bags" style={{ textDecoration: 'none', color: 'inherit', margin: '0 8px' }}>
        BAGS
      </Button>
      <Button component={Link} to="/accessories" style={{ textDecoration: 'none', color: 'inherit', margin: '0 8px' }}>
        ACCESSORIES
      </Button>
      <Button component={Link} to="/jewelry" style={{ textDecoration: 'none', color: 'inherit', margin: '0 8px' }}>
        JEWELRY
      </Button>
      <Button component={Link} to="/beauty" style={{ textDecoration: 'none', color: 'inherit', margin: '0 8px' }}>
        BEAUTY
      </Button>
      <Button component={Link} to="/home" style={{ textDecoration: 'none', color: 'inherit', margin: '0 8px' }}>
        HOME
      </Button>
    </div>
  );

  return (
    <div>
      <AppBar
        position="fixed"
        style={{ backgroundColor: "white", color: "black" }}
      >
        <Toolbar style={{ justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            MY COMPANY
          </Typography>
          {isMobile ? (
            <div style={{ flexGrow: 1 }}>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  marginLeft: "20px",
                }}
              >
                <MenuIcon />
              </IconButton>
            </div>
          ) : (
            menuItems
          )}
          <div style={{ position: "relative",  display:'flex' }}>
            <IconButton color="inherit" style={{ marginRight: "16px" }}>
              <SearchIcon />
            </IconButton>
            <div style={{ position: "relative", }}>
              <IconButton
                color="inherit"
                className="cartIcon"
                style={{ marginRight: "16px" }}
              >
                <ShoppingCartIcon />
              </IconButton>
              <div
                style={{
                  position: "absolute",
                  top: "-4px",
                  right: "5px",
                  backgroundColor: "red",
                  borderRadius: "50%",
                  width: "20px",
                  height: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                }}
              >
                {noOfItem}
              </div>
              {noOfItem > 0 && <div
                style={{
                  position: "absolute",
                  bottom: "-4px",
                  right: "5px",
                  backgroundColor: "#e4e2e2",
                  borderRadius: "50%",
                  width: "15px",
                  height: "15px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "red",
                  border: "1px solid red",
                  cursor: "pointer"
                }}
                onClick={removeCartItem}
              >
                X
              </div>}
            </div>
            <IconButton color="inherit">
              <AccountCircleIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {isMobile && (
        <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
          <List>
            <ListItem button component={Link} to="/the-edit">
              <ListItemText primary="THE EDIT" />
            </ListItem>
            <ListItem button component={Link} to="/new-arrivals">
              <ListItemText primary="NEW ARRIVALS" />
            </ListItem>
            <ListItem button component={Link} to="/designers">
              <ListItemText primary="DESIGNERS" />
            </ListItem>
            <ListItem button component={Link} to="/clothing">
              <ListItemText primary="CLOTHING" />
            </ListItem>
            <ListItem button component={Link} to="/shoes">
              <ListItemText primary="SHOES" />
            </ListItem>
            <ListItem button component={Link} to="/bags">
              <ListItemText primary="BAGS" />
            </ListItem>
            <ListItem button component={Link} to="/accessories">
              <ListItemText primary="ACCESSORIES" />
            </ListItem>
            <ListItem button component={Link} to="/jewelry">
              <ListItemText primary="JEWELRY" />
            </ListItem>
            <ListItem button component={Link} to="/beauty">
              <ListItemText primary="BEAUTY" />
            </ListItem>
            <ListItem button component={Link} to="/home">
              <ListItemText primary="HOME" />
            </ListItem>
          </List>
          <Divider />
        </Drawer>
      )}
    </div>
  );
};

export default NavBar;
