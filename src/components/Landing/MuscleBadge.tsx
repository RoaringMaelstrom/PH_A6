import React from 'react';

interface MuscleBadgeProp {
    muscle: string;
}

const MuscleBadge = ({muscle}: MuscleBadgeProp) => {
    return (
        <div className='badge rounded-full text-xs font-bold text-[#000000] bg-lime-500'>
            {muscle}
        </div>
    );
};

export default MuscleBadge;
