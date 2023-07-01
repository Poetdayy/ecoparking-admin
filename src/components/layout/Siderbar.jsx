import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { 
  Drawer, 
  Box, 
  Typography, 
  Divider, 
  ListItemIcon, 
  ListItemButton, 
  ListItemText,
} from "@mui/material"
import HomeIcon from '@mui/icons-material/Home'
import GroupIcon from '@mui/icons-material/Group';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import EditIcon from '@mui/icons-material/Edit';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import PersonIcon from '@mui/icons-material/Person';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';
import SettingsIcon from '@mui/icons-material/Settings';

const navItems = [
  {
    icon: <HomeIcon></HomeIcon>,
    label: "Dashboard",
    route: "/"
  },
  {
    icon: <GroupIcon></GroupIcon>,
    label: "Users",
    route: "/users",
    children: [
      {
        icon: <TimeToLeaveIcon></TimeToLeaveIcon>,
        label: "Parking Employee"
      },
      {
        icon: <PersonIcon></PersonIcon>,
        label: "Customer"
      }
    ]
  },
  {
    icon: <LocalParkingIcon></LocalParkingIcon>,
    label: "Parkings",
    route: "/parking"
  },
  {
    icon: <NotificationImportantIcon></NotificationImportantIcon>,
    label: "Notifications",
    route: "/notifications"
  },
  {
    icon: <EditIcon></EditIcon>,
    label: "Blog Posts",
    route: "/add-new-post"
  },
  {
    icon: <SettingsIcon></SettingsIcon>,
    label: "User Profile",
    route: "/user-profile"
  }
]

export function Sidebar({ sidebarWidth }) {
  const navigate = useNavigate();

  return (
    <>
      <Drawer
        anchor="left"
        variant="permanent"
      >
        <Box
          textAlign='center'
          role='presentation'
          sx={{width:`${sidebarWidth}px`}}
        >
          <Typography sx={{padding:"16px 0px"}} variant="h6" component='div'>
            Ecoparking Admin
          </Typography>
          <Divider></Divider>
            { navItems && navItems.map((item, index) => {
              return ( 
                <ListItemButton 
                  key={index}
                  onClick={() => navigate(item.route)}
                >
                  <ListItemIcon>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.label}></ListItemText>
                </ListItemButton>
              )}
            )}
        </Box>
      </Drawer>
    </>
  )
}

Sidebar.propTypes = {
  sidebarWidth: PropTypes.number.isRequired,
};
