import React, { useContext } from 'react';
import IconHeart from "./IconHeart";
import { LikesContext } from '../context/LikesContext';

const Gallery = ({ showLiked }) => {
  const { gallery, toggleLiked } = useContext(LikesContext);

const photosToDisplay = gallery?.photos || [];

const filteredPhotos = showLiked ? photosToDisplay.filter(photo => photo.liked) : photosToDisplay;

  return (
    <div className="p-8">
      <div className="flex flex-wrap">
        {filteredPhotos.map((image, index) => (
          <div key={index} className="w-3/12 relative p-1">
            <div className="relative rounded-xl overflow-hidden">
              <div className="absolute right-0 top-0 p-2">
                <IconHeart filled={image.liked} onClick={() => toggleLiked(index)} />
              </div>
              <img className="w-full" src={image.src.medium} alt={image.url} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;