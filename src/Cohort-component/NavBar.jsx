import { AppBar, Button, Menu, MenuItem } from "@mui/material"
import logo from '../assets/Frame.png';
import { FaRegBell } from 'react-icons/fa';
import user from '../assets/userIcon.png'
import group from '../assets/Group.png'
import { useState } from "react";
import unsplash from '../assets/unsplash.png';
import { NavLink } from "react-router-dom";
import EastIcon from '@mui/icons-material/East';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Nav = () => {
  const [activeButton, setActiveButton] = useState(0);
  const [anchorEl, setAnchorEl] = useState('');


  const handleClick = (index) => {
    setActiveButton(index);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuClick = (event) => { 
    setAnchorEl(event.currentTarget ); 
  };

  const handleMenuItemClick = (option) => {
    handleMenuClose();
  };
  return (

    <AppBar position="static" color="default"  >

        <div className='pt-5 px-5 md:px-20'>
          <div className='flex justify-between sm:gap-18'>
              <div className='flex gap-1'>
                  <img src={logo} alt="" />
                  <p className='font-bold text-2xl text-blue-400 hidden sm:block'>enum</p>
              </div>

              <div className='md:flex flex-row hidden justify-center gap-12'>
              <NavLink to="/homepage">
                    Home
              </NavLink> 
                  
                <NavLink to="/workspace"> 
                    Workspace
                </NavLink> 
              
              <NavLink to="/resourceslibrarypage">
                    Resources Library
              </NavLink>  
            </div>

              <div className='flex gap-7'>
                  <div><FaRegBell /></div>

                  <div>
                      <img src={user} alt="" />
                  </div>

                  <Button
              variant="text"
              onClick={handleMenuClick}
              sx={{ 
              display: { xs: 'none', md: 'flex' },
              textTransform: 'none',
              color: 'black'
              }}
              endIcon={<ExpandMoreIcon/>}
            >
              Onomowano
            </Button>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={() => handleMenuItemClick('Option 1')}>Option 1</MenuItem>
                <MenuItem onClick={() => handleMenuItemClick('Option 2')}>Option 2</MenuItem>
                <MenuItem onClick={() => handleMenuItemClick('Option 3')}>Option 3</MenuItem>
              </Menu>


                  <div className='hidden sm:block'>
                      <img src={group} alt="" />
                  </div>

              </div>
          </div>
        </div>
        <div className='relative '> 

          <div className='relative'>
            <div className='h-48'> 
              <img src={unsplash} 
              alt='background' 
              className='flex h-full mt-2 w-full'/>
            </div>
              <div className='absolute md:top-10 top-12 flex flex-col
              gap-2 p-4 md:px-20'>

                <div className='flex flex-row gap-3 items-center'>
                <button className='text-white items-center 
                text-center bg-purple-500 h-6 w-6 font-bold
                 border border-white border-1' 
                disabled="disabled">S</button>
                  <p className='text-sm font-bold text-white 
                  leading-6'>Semicolon Africa</p>
                </div>
                <Button 
                  variant='text' 
                  style={{color: 'black', 
                  backgroundColor: 'white', 
                  gap: '2px', 
                  fontSize: 12}}>
                    View Profile 
                  <EastIcon style={{color: 'black'}}/>
                </Button>
              </div>
          </div>
        </div>
    </AppBar>
    );
  }
  
  export default Nav