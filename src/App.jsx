import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ImageList from "./components/ImageList";
import searchImages from "../utils/api";
import { useState } from "react";
import SearchHeader from "./components/SearchHeader";

function App() {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(false);

  const handleSubmit = async (term) => {
    try {
      const result = await searchImages(term);

      if (result.length === 0) {
        setError(true);
      } else {
        setImages(result);
        setError(false);
      }
    } catch (error) {
      console.error("Error fetching images:", error);
      setError(true);
    }
  };
  return (
    <div>
      <SearchHeader search={handleSubmit} />
      <ImageList imagesPlaceholder={images} hasError={error} />
    </div>
  );
}

export default App;
