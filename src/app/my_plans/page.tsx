'use client'
import Link from "next/link";

import { usePlannedWorkout } from "@/src/context/PlannedWorkoutContext";
import { useSavedWorkout } from "@/src/context/SavedWorkoutContext";
import SavedCard from "@/src/components/Cards/SavedCard";
import PlannedCard from "@/src/components/Cards/PlannedCard";
import { Iworkout } from "@/src/types/Iworkout";

const MyPlansPage = () => {

    const { plannedWorkouts } = usePlannedWorkout();
    const { savedWorkouts } = useSavedWorkout();

    return (
        <div className='px-12 flex flex-col gap-5 pt-10 lg:pt-2 pb-20'>
            <div className="flex flex-col gap-3">
                <h1 className='text-3xl font-extrabold'>MY PLANS</h1>
                <h2 className='opacity-70'>cap of 5 lifts today. Finish them, then load more</h2>
            </div>

            <div className="stats w-full border-3 border-gray-500 stats-vertical lg:stats-horizontal shadow">
                <div className="stat">
                    <div className="stat-title">Exercises</div>
                    <div className="stat-value text-lime-600">{plannedWorkouts.length}</div>
                </div>

                <div className="stat">
                    <div className="stat-title">Minutes</div>
                    <div className="stat-value">{plannedWorkouts.reduce((totalTime: number, workout: Iworkout) => workout.duration + totalTime, 0)}</div>
                </div>

                <div className="stat">
                    <div className="stat-title">Calories</div>
                    <div className="stat-value">{plannedWorkouts.reduce((totalCalories: number, workout: Iworkout) => workout.caloriesBurned + totalCalories, 0)}</div>
                </div>
            </div>

            <div className="tabs tabs-box">
                <input type="radio" name="my_tabs_6" className="tab" aria-label="Today's Plan" defaultChecked />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    {plannedWorkouts.length === 0 ?
                        (
                            <div className='flex flex-col py-24 gap-3 justify-center items-center'>
                                <h1 className="">NOTHING HERE YET</h1>
                                <h2 className="opacity-80">Browse the library and add a lift to get moving today.</h2>
                                <Link href="../#Browse" className="btn rounded-md text-xl text-[#000000] font-bold bg-lime-600">Go To Workouts</Link>
                            </div>
                        )
                        :
                        (

                            plannedWorkouts.map((workout: Iworkout) => (
                                <PlannedCard
                                    key={workout.id}
                                    workout={workout}
                                />
                            )
                            )
                        )
                    }
                </div>

                <input type="radio" name="my_tabs_6" className="tab" aria-label="Saved" />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    {savedWorkouts.length === 0 ?
                        (
                            <div className='flex flex-col py-24 gap-3 justify-center items-center'>
                                <h1 className="">NOTHING HERE YET</h1>
                                <h2 className="opacity-80">Browse the library and add a lift to get moving today.</h2>
                                <Link href="../#Browse" className="btn rounded-md text-xl text-[#000000] font-bold bg-lime-600">Go To Workouts</Link>
                            </div>
                        )
                        :
                        (

                            savedWorkouts.map((workout: Iworkout) => (
                                <SavedCard
                                    key={workout.id}
                                    workout={workout}
                                />
                            )
                            )
                        )
                    }
                </div>
            </div>


        </div>
    );
};

export default MyPlansPage;