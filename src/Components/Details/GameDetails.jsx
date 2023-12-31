// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useParams } from 'react-router-dom';
import useDataFetcher from '../../hook/useDataFetcher';
import GameDetailsCard from './GameDetailsCard';

const GameDetails = () => {
    const { id } = useParams();
    const { data: singleData, error, loading } = useDataFetcher(`https://ananasagaming.onrender.com/trending/${id}`);
    if (loading) {
        return (
            <div className="flex flex-col gap-4 w-[94%] h-screen mb-30 mt-38 mx-auto">
                <div className="skeleton h-32 w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col gap-4 w-[94%] h-screen mb-30 mt-38 mx-auto">
                <div className="skeleton h-32 w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
            </div>
        );
    }
    console.log(singleData);
    return (
        <div className='pt-32 pb-10 px-10 min-h-screen bg-primary '>
            <GameDetailsCard singleData={singleData} />

        </div>
    );
};

export default GameDetails;