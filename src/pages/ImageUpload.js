import React, { useState } from 'react'
import { Button } from '@mui/material';
import firebase from 'firebase/compat/app';
import {storage, db} from "./firebase";


function ImageUpload({username}) {
    const [image, setImage] = useState(null)
    const [progress, setProgress] = useState(0)
    const [caption, setCaption] = useState('')

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
             const progress = Math.round(
                 (snapshot.bytesTransferred.Transferred / snapshot.totalBytes) * 100
             );
             setProgress(progress);   
            },
            (error) => {
                console.log(error);
                alert(error.message);
            },
            () => {
             storage
                .ref("images")
                .child(image.name)
                .getDownloadURL()
                .then(url => {
                    db.collection("posts").add({
                        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                        Caption: caption,
                        ImageUrl: url,
                        Username: username
                    })
                })   
            }
        )
    }

  return (
    <div>
        <input type="file" onChange={handleChange} />
        <input type="text" placeholder='Date of Analysis...' onChange={event => setCaption(event.target.value)} value={caption}/>
        <Button onClick={handleUpload}>
            Upload
        </Button>
    </div>
  )
}

export default ImageUpload