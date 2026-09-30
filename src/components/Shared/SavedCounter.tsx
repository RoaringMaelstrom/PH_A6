import Link from "next/link";

const SavedCounter = () => {
    return (
        <Link href="/my_plans" className="flex opacity-80 gap-2">
            Saved
            <div className="rounded-full border-2 border-gray-500/90 relative px-2">1</div>
        </Link>
    );
};

export default SavedCounter;