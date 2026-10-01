import WorkoutCard from "./WorkoutCard";
import { Iworkout } from "@/src/types/Iworkout";
import Link from "next/link";

const getWorkouts = async () => {
    try {
        const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
        const data = await res.json();
        return data;
    }
    catch (error) {
        console.error("Error fetching workout data: ", error);
        return [];
    }
}


const Browse = async () => {
    const workouts = await getWorkouts();

    return (
        <section className="w-full px-12  py-20" id="Browse">
            <div className="mb-5">
                <h1 className="text-4xl font-bold py-2">
                    THE LIBRARY
                </h1>

                <p className="mt-1 text-[16px] text-base-content/60">
                    12 lift covering every muscle group
                </p>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                {workouts.map((workout: Iworkout) => (
                    <Link
                        key={workout.id}
                        href={`/workout_detail/${workout.id}`}>
                        <WorkoutCard
                            // key={workout.id}
                            workout={workout}
                        />
                    </Link>
                )
                )}
            </div>
        </section>
    );
}

export default Browse;