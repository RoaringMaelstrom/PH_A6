'use client';

import Link from "next/link";
import { usePlannedWorkout } from "@/src/context/PlannedWorkoutContext";

const PlanCounter = () => {

    const { plannedWorkouts } = usePlannedWorkout();

    return (
        <Link href="/my_plans" className="flex gap-2">
            Plan
            <div className="rounded-full bg-lime-600 relative px-2">{plannedWorkouts.length}</div>
        </Link>
    );
};

export default PlanCounter;