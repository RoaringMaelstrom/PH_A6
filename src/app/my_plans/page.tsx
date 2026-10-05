'use client'
import Link from "next/link";
import { useState } from "react";

import { usePlannedWorkout } from "@/src/context/PlannedWorkoutContext";
import { useSavedWorkout } from "@/src/context/SavedWorkoutContext";
import SavedCard from "@/src/components/Cards/SavedCard";
import PlannedCard from "@/src/components/Cards/PlannedCard";
import { Iworkout } from "@/src/types/Iworkout";

// type selectionStates: true (Planned) | false (Saved);
// type sortingState: 0 (Default) | 1 (Ratings) | 2 (Duration) | 3 (Calories Burned)

const MyPlansPage = () => {

    const [sortingState, setSortingState] = useState<number>(0);
    const [selectionStatus, setSelectionStatus] = useState<boolean>(true);

    const { plannedWorkouts } = usePlannedWorkout();
    const { savedWorkouts } = useSavedWorkout();

    const sortWorkout = (workouts: Iworkout[]) => {
        const sortedWorkouts = [...workouts];

        if (sortingState === 1) {
            sortedWorkouts.sort((a, b) => b.rating - a.rating);
        } else if (sortingState === 2) {
            sortedWorkouts.sort((a, b) => b.duration - a.duration);
        } else if (sortingState === 3) {
            sortedWorkouts.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
        }
        return sortedWorkouts;
    }

    const sortedPlan = sortWorkout(plannedWorkouts);
    const sortedSaved = sortWorkout(savedWorkouts);


    return (
        <div className='px-12 flex flex-col gap-5 pt-10 lg:pt-2 pb-20'>
            <div className="flex flex-col gap-3">
                <h1 className='text-3xl font-extrabold'>MY PLANS</h1>
                <h2 className='opacity-70'>cap of 5 lifts today. Finish them, then load more</h2>
            </div>

            <div className="stats w-full border-3 border-gray-500 stats-vertical lg:stats-horizontal shadow">
                <div className="stat">
                    <div className="stat-title">Exercises</div>
                    <div className="stat-value text-lime-600">{selectionStatus ?
                        sortedPlan.length
                        :
                        sortedSaved.length
                    }
                    </div>
                </div>

                <div className="stat">
                    <div className="stat-title">Minutes</div>
                    <div className="stat-value">{selectionStatus ?
                        sortedPlan.reduce((totalTime: number, workout: Iworkout) => workout.duration + totalTime, 0)
                        :
                        sortedSaved.reduce((totalTime: number, workout: Iworkout) => workout.duration + totalTime, 0)
                    }
                    </div>
                </div>

                <div className="stat">
                    <div className="stat-title">Calories</div>
                    <div className="stat-value">{selectionStatus ?
                        sortedPlan.reduce((totalCalories: number, workout: Iworkout) => workout.caloriesBurned + totalCalories, 0)
                        :
                        sortedSaved.reduce((totalCalories: number, workout: Iworkout) => workout.caloriesBurned + totalCalories, 0)
                    }
                    </div>
                </div>
            </div>

            <div className="tabs tabs-box">
                <input type="radio" name="my_tabs_6" className="tab" aria-label="Today's Plan" defaultChecked
                    onClick={() => setSelectionStatus(true)} />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    {plannedWorkouts.length === 0 ?
                        (
                            <div className='flex flex-col py-24 gap-3 justify-center items-center'>
                                <h1 className="font-extrabold">NOTHING HERE YET</h1>
                                <h2 className="opacity-80">Browse the library and add a lift to get moving today.</h2>
                                <Link href="../#Browse" className="btn rounded-md text-xl text-[#000000] font-bold bg-lime-600">Go To Workouts</Link>
                            </div>
                        )
                        :
                        (

                            sortedPlan.map((workout: Iworkout) => (
                                <PlannedCard
                                    key={workout.id}
                                    workout={workout}
                                />
                            )
                            )
                        )
                    }
                </div>

                <input type="radio" name="my_tabs_6" className="tab" aria-label="Saved"
                    onClick={() => setSelectionStatus(false)} />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    {savedWorkouts.length === 0 ?
                        (
                            <div className='flex flex-col py-24 gap-3 justify-center items-center'>
                                <h1 className="font-extrabold">NOTHING HERE YET</h1>
                                <h2 className="opacity-80">Browse the library and add a lift to get moving today.</h2>
                                <Link href="../#Browse" className="btn rounded-md text-xl text-[#000000] font-bold bg-lime-600">Go To Workouts</Link>
                            </div>
                        )
                        :
                        (

                            sortedSaved.map((workout: Iworkout) => (
                                <SavedCard
                                    key={workout.id}
                                    workout={workout}
                                />
                            )
                            )
                        )
                    }
                </div>

                <select defaultValue="Sort By" className="select select-neutral ml-auto">
                    <option className="hidden" disabled={true}>Sort By</option>
                    <option onClick={() => setSortingState(1)}>Ratings</option>
                    <option onClick={() => setSortingState(2)}>Duration</option>
                    <option onClick={() => setSortingState(3)}>Calories Burned</option>
                </select>
            </div>


        </div>
    );
};

export default MyPlansPage;