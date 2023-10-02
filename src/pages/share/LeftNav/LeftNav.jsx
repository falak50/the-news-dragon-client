import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EditorsInsights2 from '../../News/EditorsInsights/EditorsInsights2';

const LeftNav = () => {
    const [categories,setCategories] = useState([]);

    useEffect(()=>{
     fetch('http://localhost:5000/categories')
     .then(res => res.json())
     .then(data=>setCategories(data))
     .catch(error => console.error(error))

    },[])

    return (
        <div>
          <div>
          <h4>All Category</h4>
         
         <div className='ps-4'>
         {
            categories.map(category => <p
            key={category.id}
            >
          <Link to={`/category/${category.id}`}  className='text-black text-decoration-none'>{category.name}</Link>
            </p>)
           }
         </div>
          </div>

          <div className='m-3'>
            <EditorsInsights2></EditorsInsights2>
          </div>

        </div>
    );
};

export default LeftNav;