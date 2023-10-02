import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and Condition</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, praesentium quas beatae maiores aliquid eos corporis quod dolore quibusdam, itaque, consequuntur voluptatem! Possimus, voluptate dolor nam consectetur quibusdam asperiores nobis!</p>
            <p>Go back to <Link to="/register">Register</Link></p>
        </div>
    );
};

export default Terms;