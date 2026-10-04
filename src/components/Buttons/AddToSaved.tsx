'use client';

import { BsBookmark } from "react-icons/bs";

import { useSavedWorkout } from "@/src/context/SavedWorkoutContext";
import { Iworkout } from "@/src/types/Iworkout";

interface AddToSavedProps {
    workout: Iworkout
}

const AddToSaved = ({ workout }: AddToSavedProps) => {

    const { handleSavedSelect } = useSavedWorkout();

    return ( 
        <button
            onClick={() => handleSavedSelect(workout)}
            className="btn btn-outline rounded-xl p-7 text-base md:text-md lg:text-lg flex font-semibold">
            <BsBookmark className="text-base md:text-md lg:text-lg" />
            {`Save for later`}
        </button>
    );
};

export default AddToSaved;