import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import firebase from 'firebase/compat/app';



export default function Profile() {


  return (
      <>
        <Card>
            <Card.Body align='center'>
                <h2 align='center'> Profile</h2>
                <strong>Email: </strong> <h2>Usrname</h2>
            </Card.Body>

        </Card>
        <div align='center' mt='2'>
            <Button variant="link" onClick={''}>Log Out</Button>
        </div>
      </>
  )
}

