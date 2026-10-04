'use client';

import { BsCalendar2Plus } from "react-icons/bs";

import { usePlannedWorkout } from "@/src/context/PlannedWorkoutContext";
import { Iworkout } from "@/src/types/Iworkout";

interface AddToPlanProp {
    workout: Iworkout
}

const AddToPlan = ({workout}:AddToPlanProp) => {

    const {handlePlanSelect} = usePlannedWorkout();

    return (
        <button 
        onClick= {() => handlePlanSelect(workout)}
        className="btn rounded-xl p-7 text-base md:text-md lg:text-lg flex font-semibold text-[#000000] bg-lime-500">
            <BsCalendar2Plus className="text-base md:text-md lg:text-lg" />
            {`Add to Today's plan`}
        </button>
    );
};

export default AddToPlan;