'use client'

import Image from "next/image";
import Link from "next/link";

import { AiOutlineClockCircle, AiTwotoneFire, AiOutlineStar } from "react-icons/ai";

import { Iworkout } from "@/src/types/Iworkout";
import { useSavedWorkout } from "@/src/context/SavedWorkoutContext";

interface SavedCardProp {
    workout: Iworkout
}

function SavedCard({ workout }: SavedCardProp) {
    const { handleSavedRemove } = useSavedWorkout();
    return (
        <div className="flex flex-col md:flex-row items-center gap-3 rounded-lg border border-base-300 bg-base-100 p-3">

            <div className="flex h-40 md:h-20 w-40 md:w-20 shrink-0 items-center justify-center rounded-lg bg-base-200 p-2">
                <Image
                    src={workout.image}
                    alt={`${workout.name} logo`}
                    width={90}
                    height={45}
                    className="h-full w-full object-contain"
                />
            </div>

            <div className="min-w-0 flex-1 flex-col gap-2">
                <h3 className="truncate font-semibold">
                    {workout.name}
                </h3>

                <p className="text-xs text-base-content/50">
                    {workout.equipment}
                </p>
                <div className="flex text-xs gap-3">
                    <div className="flex gap-2"><AiOutlineClockCircle className="text-xs" /> {workout.duration} mins</div>
                    <div className="flex gap-2"><AiTwotoneFire className="text-xs" />{workout.caloriesBurned} kcals</div>
                    <div className="flex gap-2"><AiOutlineStar className="text-xs" />{workout.rating}</div>
                </div>
            </div>

            <Link
                className="btn btn-outline rounded-full"
                href={`/workout_detail/${workout.id}`}> 
                View Details
            </Link>

            <button
                type="button"
                className="btn btn-error md:btn-ghost btn-sm btn-circle"
                onClick={() => handleSavedRemove(workout.id)}
                aria-label={`Remove ${workout.name}`}
            >
                x
            </button>

        </div>
    );
}

export default SavedCard;