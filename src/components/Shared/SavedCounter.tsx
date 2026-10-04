'use client'

import Link from "next/link";
import { useSavedWorkout } from "@/src/context/SavedWorkoutContext";

const SavedCounter = () => {

    const { savedWorkouts } = useSavedWorkout();

    return (
        <Link href="/my_plans" className="flex opacity-80 gap-2">
            Saved
            <div className="rounded-full border-2 border-gray-500/90 relative px-2">{savedWorkouts.length}</div>
        </Link>
    );
};

export default SavedCounter;