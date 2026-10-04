import React from 'react';

interface MuscleBadgeProp {
    muscle: string;
    size: string;
}

const MuscleBadge = ({muscle, size}: MuscleBadgeProp) => {

    return (
        <div className={`badge rounded-full text-${size} font-semibold ${size === "lg"? "p-3" :""} text-[#000000] bg-lime-500`}>
            {muscle}
        </div>
    );
};

export default MuscleBadge;
