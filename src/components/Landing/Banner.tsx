import Image from "next/image";
import BannerImg from "../../assets/banner.png"
import Link from "next/link";

const Banner = () => {
    return (
        <div className="w-full md:px-12">
            <div className="hero-content max-w-full px-12 py-12 border-2 border-gray-400/20 rounded-xl bg-base-200/30 flex-col-reverse lg:flex-row-reverse">
                <Image src={BannerImg} alt='Interface Stack Image' />
                <div className="flex flex-col gap-3">
                    <p className="text-sm text-lime-600 font-bold">WORKOUT LIBRARY</p>
                    <h1 className='text-5xl font-extrabold lg:w-[70%]'>TRAIN WITH INTENT. LOG EVERY SET.</h1>
                    <p className="py-6 lg:w-[55%]">
                        {`FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                        into today\'s plan, and watch the week\'s work add up.`}
                    </p>
                    <div className='flex py-8 gap-x-3'>
                        <Link href="#Browse" className="btn rounded-md text-[#000000] font-bold bg-lime-600">Browse Workouts</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;