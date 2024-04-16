import { createContext, useState, useEffect } from "react";

export const LikesContext = createContext();

const LikesProvider = ({ children, photoUrl }) => {

  const [gallery, setGallery] = useState([]);

  const toggleLiked = (index) => {
    const updatedGallery = {
      ...gallery,
      photos: gallery.photos.map((photo, i) =>
        i === index ? { ...photo, liked: !photo.liked } : photo
      ),
    };
    setGallery(updatedGallery);
  };

  useEffect(() => {
    const consultarApi = async () => {
      const url = photoUrl;
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Error al obtener los datos: ${response.statusText}`);
        }

        const data = await response.json();
        setGallery(data);
      } catch (error) {
        console.error(`Error en la consulta API: ${error.message}`);
      }
    };

    consultarApi();
  }, [photoUrl]);  

  useEffect(() => {
    console.log(gallery);
  }, [gallery]);

  return (
    <LikesContext.Provider value={{ gallery, setGallery, toggleLiked }}>
      {children}
    </LikesContext.Provider>
  );
};

export default LikesProvider;