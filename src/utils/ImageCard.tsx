import { ImgCardItem } from '@/types/ImgCard';
import React from 'react';



const ImageCard: React.FC<ImgCardItem> = ({ imageUrl, title }) => {
    return (
        <div
            className="rounded-md w-full h-64 relative bg-cover bg-center"
            style={{ backgroundImage: `url(${imageUrl})` }}
        >
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent text-white p-4">
                <h3 className="text-lg font-semibold">{title}</h3>
            </div>
        </div>
    );
};

export default ImageCard;
