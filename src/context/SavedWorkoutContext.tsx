"use client";
import toast from "react-hot-toast";
import { Iworkout } from "../types/Iworkout";
import React, { createContext, ReactNode, useContext, useState } from "react";

interface SavedWorkoutContext {
    savedWorkouts: Iworkout[];
    handleSavedSelect: (workout: Iworkout) => void;
    handleSavedRemove: (id: number) => void;
}

export const savedWorkoutContext = createContext<SavedWorkoutContext>({
    savedWorkouts: [],
    handleSavedSelect: () => { },
    handleSavedRemove: () => { },
});

export const useSavedWorkout = () => {
    return useContext(savedWorkoutContext);
}

const SavedWorkoutProvider = ({ children }: { children: ReactNode }) => {
    const [savedWorkouts, setSavedWorkouts] = useState<Iworkout[]>([]);

    const handleSavedSelect = (workout: Iworkout) => {
        if (savedWorkouts.length > savedWorkouts.filter((selectedWorkout: Iworkout) => selectedWorkout.id !== workout.id).length) {
            toast.error("!!! Already added to saved !!!");
            return;
        }

        toast.success(`${savedWorkouts.length + 1} WORKOUTS SAVED!!!`);
        setSavedWorkouts((previous: Iworkout[]) => {
            return [...previous, workout];
        });
    };

    const handleSavedRemove = (id: number) => {
        setSavedWorkouts((previous: Iworkout[]) =>
            previous.filter((workout: Iworkout) => workout.id !== id)
        );
        toast("Workout removed from saved.");
    };


    const sharedData = {
        savedWorkouts,
        handleSavedSelect,
        handleSavedRemove,
    };

    return (
        <savedWorkoutContext.Provider value={sharedData}>{children}</savedWorkoutContext.Provider>
    );
};

export default SavedWorkoutProvider;