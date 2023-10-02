import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {
    const {id} = useParams(); 
    const CategoryNews = useLoaderData();
    return (
        <div>
           { id  &&  <h4>This is a category : Lenght {CategoryNews.length} </h4>}
            {
                CategoryNews.map(news => <NewsCard
                key={news._id}
                news={news}
                ></NewsCard>)
            }
        </div>
    );
};

export default Category;