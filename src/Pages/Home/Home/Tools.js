import React from 'react';
import { useQuery } from 'react-query';
import ShowTools from './ShowTools';

const Tools = () => {
    const { data: parts, isLoading } = useQuery('parts', () => fetch('https://agile-eyrie-75679.herokuapp.com/get-parts').then(res => res.json()))

    return (
        <div>
            <h1 className='text-2xl font-bold my-12 text-center '>Available Products:</h1>
            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 lg:mx-16'>
                {
                    parts?.map(part => <ShowTools
                        key={part._id}
                        part={part}
                    />)
                }
            </div>
        </div>
    );
};

export default Tools;