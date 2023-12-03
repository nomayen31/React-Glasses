import React from 'react';
import Header from '../../Shared/Header';
import RightSIdeNav from '../../Shared/RightSIdeNav';
import { useParams } from 'react-router-dom';
import NavBar from '../../Shared/NavBar';

const News = () => {
    const {id} = useParams()
    return (
        <div>
            <Header></Header>
            <NavBar></NavBar>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                <div className='lg:col-span-2'>
                    <h1 className='text-2xl'>News Details</h1>
                </div>
                <div className=''>
                    <RightSIdeNav></RightSIdeNav>
                </div>
            </div>
        </div>
    );
};

export default News;