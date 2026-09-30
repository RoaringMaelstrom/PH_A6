import Link from "next/link";
const PlanCounter = () => {
    return (
        <Link href="/my_plans" className="flex gap-2">
            Plan
            <div className="rounded-full bg-lime-600 relative px-2">1</div>
        </Link>
    );
};

export default PlanCounter;