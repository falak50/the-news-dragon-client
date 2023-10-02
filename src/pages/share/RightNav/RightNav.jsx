import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import {  FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import QZone from '../../../QZone/QZone';
import bg from '../../../assets/bg.png'
const RightNav = () => {
    return (
        <div>
            <h4 className='mt-4'>Login With</h4>
            <Button className='mb-2 mt-4' variant="outline-primary"> < FaGoogle /> Login with Google </Button>
            <Button  className='mb-2' variant="outline-secondary"> <FaGithub/> Login with Github</Button>

            <div>
                <h4 className='mt-4'>Find us on</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook/> facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter/> twitter  </ListGroup.Item>
                    <ListGroup.Item><FaInstagram/> instragram </ListGroup.Item>
                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
                <QZone></QZone>
                <div>
                    {/* <img src={bg} alt="" /> */}
                </div>

            </div>
        </div>
    );
};

export default RightNav;