import React, { useState, useEffect } from 'react';
// material
import { Container } from '@mui/material';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import 'firebase/compat/database';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
// components
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Page from '../components/Page';
import Post from './Post';
import { db } from './firebase';
import ImageUpload from './ImageUpload';




// ----------------------------------------------------------------------


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

export default function Upload() {
  const [posts, setPosts] = useState([]);
  const [Username, setUsername] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        post: doc.data()
      })));
    })
  }, []);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  

  return (
    <Page title="Upload Daily Analysis">
      <Container>
       <h1>Daily Analysis</h1>

       <div>
      <Button onClick={handleOpen}>Upload New Analysis</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
       <Box sx={style}>
        < ImageUpload />
       </Box>
      </Modal>
    </div>

       {
         posts.map(({id, post}) => (
           <Post key ={id} Username={post.Username} Caption={post.Caption} ImageUrl={post.ImageUrl}/>

         ))
       }
      </Container>
    </Page>
  );
}
