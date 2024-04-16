import Gallery from "../components/Gallery";

const Favorites = () => {
  return (
    <div>
      <h1>Fotos favoritas</h1>
      <Gallery showLiked={true} />
    </div>
  );
};
export default Favorites;
