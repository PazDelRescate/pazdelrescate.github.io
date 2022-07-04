import { useRef, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import 'firebase/compat/database';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
import { alpha } from '@mui/material/styles';
import { Box, Divider, Typography, Stack, MenuItem, Avatar, IconButton } from '@mui/material';
import Iconify from '../../components/Iconify';
// components
import MenuPopover from '../../components/MenuPopover';
// mocks_
import account from '../../_mock/account';

// ----------------------------------------------------------------------
const firebaseConfig = {
  apiKey: "AIzaSyB-xhOiVvJ-GqZ2bCvbeNXl6h745LSWW-E",
  authDomain: "clone-9da05.firebaseapp.com",
  databaseURL: "https://clone-9da05-default-rtdb.firebaseio.com",
  projectId: "clone-9da05",
  storageBucket: "clone-9da05.appspot.com",
  messagingSenderId: "983643125014",
  appId: "1:983643125014:web:881311943924bfebcc8c37",
  measurementId: "G-Z98P2RTGJ0"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;


const MENU_OPTIONS = [
  {
    label: 'Home',
    icon: 'eva:home-fill',
    linkTo: '/app',
  },
  {
    label: 'Request Analysis',
    linkTo: '/requests',
    icon: getIcon('fluent:drink-wine-24-filled'),
  },
  {
    label: 'Upload Analysis',
    linkTo: '/upload',
    icon: getIcon('ic:baseline-upload-file'),
  },
  {
    label: 'View Analysis',
    linkTo: '/analysis',
    icon: getIcon('eva:file-text-fill'),
  },
  {
    label: 'Settings',
    icon: 'eva:settings-2-fill',
    linkTo: '#',
  },
];

// ----------------------------------------------------------------------

export default function AccountPopover() {
  const anchorRef = useRef(null);

  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <>
      <IconButton
        ref={anchorRef}
        onClick={handleOpen}
        sx={{
          p: 0,
          ...(open && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
            },
          }),
        }}
      >
        <Avatar src={account.photoURL} alt="photoURL" />
      </IconButton>

      

      <MenuPopover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        sx={{
          p: 0,
          mt: 1.5,
          ml: 0.75,
          '& .MuiMenuItem-root': {
            typography: 'body2',
            borderRadius: 0.75,
          },
        }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle2" noWrap>
            {account.displayName}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            {account.email}
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Stack sx={{ p: 1 }}>
          {MENU_OPTIONS.map((option) => (
            <MenuItem icon={option.icon} key={option.label} to={option.linkTo} component={RouterLink} onClick={handleClose}>
              {option.label}
            </MenuItem>
          ))}
        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <MenuItem onClick={() => auth.signOut()} sx={{ m: 1 }}  >
          <a href= '/login'>
          Logout
          </a>
        </MenuItem>
      </MenuPopover>
    </>
  );
}
