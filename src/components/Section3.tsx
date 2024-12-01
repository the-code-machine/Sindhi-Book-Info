import Link from 'next/link';
import React from 'react';

interface BookCard {
    title: string;
    author: string;
    availability: string;
}

const books: BookCard[] = [
    {
        title: "Abdul Fazil & Faizi",
        author: "Author of the Book Sewhani F.M. (Hakim)",
        availability: "Available Offline",
    },
    {
        title: "Adbi Asool",
        author: "Author of the Book Shahwani G.M.",
        availability: "Available Offline",
    },
    {
        title: "Akhlagi Awaz",
        author: "Author of the Book Kouromal Manohardas",
        availability: "Available Offline",
    },
    {
        title: "Akhreen Kavita",
        author: "Author of the Book Tagore",
        availability: "Available Offline",
    },
];

export default function GatewaySection() {
    return (
        <div className="w-full bg-white py-20 px-4 md:px-32">
            {/* Title and Description */}
            <div className=" mb-8">
                <h2 className="text-3xl font-bold text-black">
                    Your Gateway to Sindhi Books
                </h2>
                <p className=" text-paragraphDark text-lg mt-2">
                    Explore Sindhi literature in two ways: online for convenience or offline to
                    experience the nostalgia of libraries. Discover books that celebrate Sindhi
                    culture, history, and art.
                </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full ">
                {books.map((book, index) => (
                    <div
                        key={index}
                        className="bg-white border border-gray-300 rounded-lg shadow-sm p-6  flex flex-col justify-start items-start"
                    >
                        {/* Icon Placeholder */}
                        <div className="">
                            <div className=" flex items-center w-full justify-center">
                                <svg className=' w-full h-full' width="100%" height="100%" viewBox="0 0 232 175" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="232" height="175" rx="14" fill="white" />
                                    <rect x="2" y="2" width="228" height="171" rx="12" stroke="#458260" stroke-opacity="0.5" stroke-width="4" />
                                    <ellipse cx="116.5" cy="80.5" rx="58.5" ry="54.5" fill="#A2C0AF" />
                                    <path d="M158.562 107.778H87.875C81.8689 107.778 77 113.2 77 119.889C77 126.578 81.8689 132 87.875 132H158.562V107.778Z" fill="white" />
                                    <path d="M77 42.3778V119.889C77 113.2 81.8689 107.778 87.875 107.778H158.562H164V42.3778C164 35.5949 164 32.2035 162.815 29.6128C161.772 27.3339 160.108 25.4811 158.062 24.3201C155.736 23 152.691 23 146.6 23H94.4C88.3095 23 85.2641 23 82.9379 24.3201C80.8916 25.4811 79.2279 27.3339 78.1853 29.6128C77 32.2035 77 35.5949 77 42.3778Z" fill="#A0DDBB" />
                                    <path d="M77 119.889V42.3778C77 35.5949 77 32.2035 78.1853 29.6128C79.2279 27.3339 80.8916 25.4811 82.9379 24.3201C85.2641 23 88.3095 23 94.4 23H146.6C152.691 23 155.736 23 158.062 24.3201C160.108 25.4811 161.772 27.3339 162.815 29.6128C164 32.2035 164 35.5949 164 42.3778V107.778M77 119.889C77 113.2 81.8689 107.778 87.875 107.778M77 119.889C77 126.578 81.8689 132 87.875 132M164 107.778H87.875M164 107.778H158.562M87.875 107.778H158.562M87.875 132H164M87.875 132H158.562V107.778M104.188 47.2222H136.812M104.188 71.4444H136.812" stroke="#458260" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>


                            </div>
                        </div>
                        {/* Availability */}
                        <div className=" flex   bg-primary  text-white justify-center items-center text-xs font-medium mt-4 px-2 py-0.5 rounded-md">
                            <span className=' mr-1'><svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.5 2.25C3.83152 2.25 4.14946 2.3817 4.38388 2.61612C4.6183 2.85054 4.75 3.16848 4.75 3.5C4.75 3.66415 4.71767 3.8267 4.65485 3.97835C4.59203 4.13001 4.49996 4.26781 4.38388 4.38388C4.26781 4.49996 4.13001 4.59203 3.97835 4.65485C3.8267 4.71767 3.66415 4.75 3.5 4.75C3.16848 4.75 2.85054 4.6183 2.61612 4.38388C2.3817 4.14946 2.25 3.83152 2.25 3.5C2.25 3.16848 2.3817 2.85054 2.61612 2.61612C2.85054 2.3817 3.16848 2.25 3.5 2.25ZM3.5 0C4.42826 0 5.3185 0.368749 5.97487 1.02513C6.63125 1.6815 7 2.57174 7 3.5C7 6.125 3.5 10 3.5 10C3.5 10 0 6.125 0 3.5C0 2.57174 0.368749 1.6815 1.02513 1.02513C1.6815 0.368749 2.57174 0 3.5 0ZM3.5 1C2.83696 1 2.20107 1.26339 1.73223 1.73223C1.26339 2.20107 1 2.83696 1 3.5C1 4 1 5 3.5 8.355C6 5 6 4 6 3.5C6 2.83696 5.73661 2.20107 5.26777 1.73223C4.79893 1.26339 4.16304 1 3.5 1Z" fill="white" />
                            </svg>
                            </span>  {book.availability}
                        </div>
                        {/* Title and Author */}
                        <h3 className="text-2xl font-bold text-black mt-2">{book.title}</h3>
                        <p className=" text-paragraphDark text-sm mt-2">{book.author}</p>



                        {/* Learn More Button */}
                        <button className="mt-4  bg-secondry text-white text-sm font-semibold py-2 px-4 rounded-md hover:bg-orange-600">
                            Learn More
                        </button>
                    </div>
                ))}
            </div>


            {/* <div className=" mt-8">
                <Link
                    href="#"
                    className="text-black text-sm font-bold hover:underline flex items-center justify-center"
                >
                    Explore More <span className="ml-1">→</span>
                </Link>
            </div> */}
        </div>
    );
}
