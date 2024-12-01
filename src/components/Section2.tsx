import Link from 'next/link';
import React from 'react';

export default function HowToUseSection() {
    return (
        <div className="w-full  bg-primary py-10 px-5">
            <h2 className="text-center text-white text-3xl font-bold mb-8">
                How to Use Sindhi Books Info
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                {/* First Card */}
                <div className="  bg-overLayHeading p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-black mb-4">
                        Welcome to Sindhi Books Info
                    </h3>
                    <p className="   text-paragraphDark text-base mb-4">
                        Get started with Sindhi Books Info and explore the world of Sindhi literature.
                        In just a few minutes, learn how to navigate the platform, find offline libraries,
                        access curated book collections, and save your favorite books to a personalized list.
                        Whether you are  a casual reader or a researcher, discover how easy it is to connect with
                        the rich heritage of Sindhi literature.
                    </p>
                    <Link
                        href="#"
                        className="  text-paragraphDark font-bold underline hover:text-green-700"
                    >
                        Learn More
                    </Link>
                </div>
                {/* Second Card */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-black mb-4">
                        Use Sindhi Books Info for School and Research
                    </h3>
                    <p className=" text-paragraphDark text-base mb-4">
                        Enhance your school projects and research with Sindhi Books Info. This simple tutorial
                        will guide you through basic and advanced search techniques, helping you find resources
                        for essays, reports, and in-depth studies on Sindhi culture and language. Perfect for
                        students, educators, and anyone passionate about Sindhi literature.
                    </p>
                    <Link
                        href="#"
                        className=" text-paragraphDark font-bold underline hover:text-green-700"
                    >
                        Learn More
                    </Link>
                </div>
            </div>
        </div>
    );
}
