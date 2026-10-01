"use client";
import toast from "react-hot-toast";
import { Iworkout } from "../types/Iworkout";
import React, { createContext, ReactNode, useState } from "react";

interface PlannedWorkoutContext {
    plannedWorkouts: Iworkout[];
    setPlannedWorkouts: React.Dispatch<React.SetStateAction<Iworkout[]>>;
    handlePlanSelect: (workout: Iworkout) => void;
    handlePlanRemove: (id: number) => void;
}

export const plannedWorkoutContext = createContext<PlannedWorkoutContext>({
    plannedWorkouts: [],
    setPlannedWorkouts: () => { },
    handlePlanSelect: () => { },
    handlePlanRemove: () => { },
});


const PlannedWoutProvider = ({ children }: { children: ReactNode }) => {
    const [plannedWorkouts, setPlannedWorkouts] = useState<Iworkout[]>([]);

    const handlePlanSelect = (workout: Iworkout) => {
        setPlannedWorkouts((previous: Iworkout[]) => {
            if (previous.length === previous.filter((selectedWorkout: Iworkout) => selectedWorkout.id === workout.id).length) {
                toast.error("!!! Already added to workouts !!!");
                return previous;
            }
            if (previous.length >= 5) {
                toast.error("!!! Already added 5 workouts !!!");
                return previous;
            }

            toast.success(`${previous.length + 1} WORKOUTS ADDED TO ROUTINE!!!`);
            return [...previous, workout];
        });
    };

    const handlePlanRemove = (id: number) => {
        setPlannedWorkouts((previous: Iworkout[]) =>
            previous.filter((workout: Iworkout) => workout.id !== id)
        );
        toast("Workout removed from routine.");
    };


    const sharedData = {
        plannedWorkouts,
        setPlannedWorkouts,
        handlePlanSelect,
        handlePlanRemove,
    };

    return (
        <plannedWorkoutContext.Provider value={sharedData}>{children}</plannedWorkoutContext.Provider>
    );
};

export default PlannedWoutProvider;