'use client'
import Image from "next/image"
import BannerImage from "../../../../public/Image/banner.webp"

const Banner = () => {
    return (
        <div className="relative w-full h-96">
            <Image src={BannerImage} className="w-full h-[450px] object-cover" alt="Organic Food Banner" />
            <div className="absolute top-1/4 left-10 text-white max-w-lg">
                <h1 className="text-4xl font-bold leading-tight">
                    Fresh, Healthy & Delicious <br /> Organic Food Delivered to You
                </h1>
                <p className="mt-4 text-lg font-semibold">
                    Enjoy a <span className="bg-orange-500 text-white px-3 py-1 rounded">30% OFF</span> discount on our fresh organic produce.
                </p>
                <p className="text-gray-200 mt-2">
                    Eat better, live healthier! Shop now and get <strong>free shipping</strong> on all your orders.
                </p>
                <button className="mt-4 px-5 py-2 bg-green-500 hover:bg-green-600 transition duration-300 text-white rounded-lg">
                    Explore Our Collection →
                </button>
            </div>
        </div>
    )
}

export default Banner
