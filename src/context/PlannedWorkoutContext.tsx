"use client";
import toast from "react-hot-toast";
import { Iworkout } from "../types/Iworkout";
import React, { createContext, ReactNode, useContext, useState } from "react";

interface PlannedWorkoutContext {
    plannedWorkouts: Iworkout[];
    handlePlanSelect: (workout: Iworkout) => void;
    handlePlanRemove: (id: number) => void;
}

export const plannedWorkoutContext = createContext<PlannedWorkoutContext>({
    plannedWorkouts: [],
    handlePlanSelect: () => { },
    handlePlanRemove: () => { },
});

export const usePlannedWorkout = () => {
    return useContext(plannedWorkoutContext);
}

const PlannedWorkoutProvider = ({ children }: { children: ReactNode }) => {
    const [plannedWorkouts, setPlannedWorkouts] = useState<Iworkout[]>([]);

    const handlePlanSelect = (workout: Iworkout) => {
        if (plannedWorkouts.length > plannedWorkouts.filter((selectedWorkout: Iworkout) => selectedWorkout.id !== workout.id).length) {
            toast.error("!!! Already added to workouts !!!");
            return;
        }

        if (plannedWorkouts.length >= 5) {
            toast.error("!!! Already added 5 workouts !!!");
            return;
        }

        toast.success(`${plannedWorkouts.length + 1} OF 5 WORKOUTS ADDED TO ROUTINE!!!`);
        setPlannedWorkouts((previous: Iworkout[]) => {
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
        handlePlanSelect,
        handlePlanRemove,
    };

    return (
        <plannedWorkoutContext.Provider value={sharedData}>{children}</plannedWorkoutContext.Provider>
    );
};

export default PlannedWorkoutProvider;