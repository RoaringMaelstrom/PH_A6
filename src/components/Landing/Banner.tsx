import Image from "next/image";
import BannerImg from "../../assets/banner.png"

const Banner = () => {
    return (
        <div className="w-full my-10 lg:px-12 min--screen">
            <div className="hero-content border-2 border-gray-400/20 rounded-xl bg-base-200/30 flex-col-reverse lg:flex-row-reverse py-12">
                <Image src={BannerImg} alt='Interface Stack Image' />
                <div className="flex flex-col gap-3">
                    <p className="text-sm text-lime-600 font-bold">WORKOUT LIBRARY</p>
                    <h1 className='text-4xl font-extrabold lg:w-[60%]'>TRAIN WITH INTENT. LOG
                        EVERY SET.
                    </h1>
                    <p className="py-6 lg:w-[50%]">
                        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                        into today's plan, and watch the week's work add up.
                    </p>
                    <div className='flex py-8 gap-x-3'>
                        <button className="btn bg-[linear-gradient(90deg,#FF5722_0%,#D81B7E_50%,#7C3AED_100%)]">Browse Workouts</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;