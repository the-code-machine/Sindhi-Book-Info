import React from 'react';
import { ImgCardItem } from '@/types/ImgCard';


const libraries: ImgCardItem[] = [
    { imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Khalsa_College_Matunga.jpg', title: 'Khalsa College Library' },
    { imageUrl: 'https://akm-img-a-in.tosshub.com/aajtak/images/story/201408/mithibai-college_650_080914023558.jpg?size=948:533', title: 'Mithibai Motiram Kundnani College' },
    { imageUrl: 'https://media.assettype.com/freepressjournal/2023-07/47ad38eb-1917-4d5f-8c7f-a174884e8de6/Untitled_design__48_.png', title: 'R.D National College' },
    { imageUrl: 'https://images.shiksha.com/mediadata/images/1601535985phpP7uSOV.jpeg', title: 'Devi Ahilya Vishwavidyalaya Takshila' },
    { imageUrl: 'https://content.jdmagicbox.com/comp/thane/v6/022pxx22.xx22.170711190048.v4v6/catalogue/rgs-english-high-school-ulhasnagar-no-4-thane-5and7whk8s.jpg', title: 'RGS English High School' },
    { imageUrl: 'https://www.sindhology.org/assets/img/indian-institute-of-sindhology.png', title: 'Indian Institute of Sindhology ' },
];

export default function Section1() {
    return (
        <div className="w-full bg-white p-5 flex flex-col justify-start items-start md:px-32 py-20 px-4">
            {/* Title and Description */}
            <div className="text-black text-3xl font-bold">
                Discover Offline Libraries Near You
            </div>
            <p className="text-paragraphDark text-[16px] mt-1">
                Explore the hubs of knowledge where Sindhi literature comes to life.
            </p>

            {/* Responsive Grid */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
                {libraries.map((library, index) => (
                    <div
                        key={index}
                        className="rounded-md h-64 relative bg-cover bg-center  hover:opacity-70 cursor-pointer"
                        style={{ backgroundImage: `url(${library.imageUrl})` }}
                    >
                        <div className="absolute bottom-2 left-0   bg-black bg-opacity-50 rounded-md px-4 py-0.5 text-white p-4">
                            <h3 className="text-[16px]  font-normal">{library.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
