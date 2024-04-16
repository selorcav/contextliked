import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import Favorites from "./views/Favorites";
import Home from "./views/Home";

import LikesProvider, { LikesContext } from './context/LikesContext';


const PHOTO_URL = "/photos.json";

const App = () => {
  return (
    <LikesProvider photoUrl={PHOTO_URL}>
      <div>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/favoritos"
            element={<Favorites />}
          />
        </Routes>
      </div>
    </LikesProvider>

  );
};
export default App;
