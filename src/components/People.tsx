import { useState, useEffect } from "react";
import Photo from "./Photo";
import axios from "axios";
import './Gallary.css';

const People = () => {
  const [photos, setPhotos] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [filteredPhotos, setFilteredPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get(
          "https://api.pexels.com/v1/search?query=people",
          {
            headers: {
              Authorization: "KMvCjoI1mNXSAaA61SOZLO9XExhMqOFwnvWHxDwTFYmb1mLGXBRp4pLA",
            },
          }
        );
        setPhotos(response.data.photos);
        setFilteredPhotos(response.data.photos);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchPhotos();
  }, []);

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchInput(searchTerm);

    // Filter photos based on search term
    const filtered = photos.filter((photo) =>
      photo.photographer.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPhotos(filtered);
  };

  return (<>
   <div className="search"> 
        <input
          type="text"
          placeholder="Search People..."
          value={searchInput}
          onChange={handleSearch}
        />
      </div>
    <div className="gallary">
      {filteredPhotos.map((photo) => (
        <div className="photo" key={photo.id}>
          <Photo photo={photo} />
        </div>
      ))}
    </div>
    </>
  );
};

export default People;
