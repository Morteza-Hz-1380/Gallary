import { useState, useEffect } from "react";
import Photo from "./Photo";
import axios from "axios";
import "./Gallery.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredPhotos, setFilteredPhotos] = useState([]);
  const [gallery, setGallery] = useState("All");
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    AOS.init();
    const fetchPhotos = async () => {
      try {
        const response = await axios.get(
          `https://api.pexels.com/v1/search?query=${gallery}&page=${pageNumber}&per_page=9`,
          {
            headers: {
              Authorization:
                "KMvCjoI1mNXSAaA61SOZLO9XExhMqOFwnvWHxDwTFYmb1mLGXBRp4pLA",
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
  }, [gallery, pageNumber]); // Include gallery in the dependency array

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchInput(searchTerm);

    // Filter photos based on search term
    const filtered = photos.filter((photo) =>
      photo.photographer.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPhotos(filtered);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 900,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="App">
        <nav>
          <ul>
            <li onClick={() => setGallery("All")}>Gallery</li>
            <li onClick={() => setGallery("Animal")}>Animal</li>
            <li onClick={() => setGallery("Jungle")}>Nature</li>
            <li onClick={() => setGallery("Human")}>People</li>
            <li onClick={() => setGallery("Car")}>Car</li>
            <li onClick={() => setGallery("Travel")}>Travel</li>
          </ul>
        </nav>
      </div>
      <div className="search">
        <input
          type="text"
          placeholder="Search photographer..."
          value={searchInput}
          onChange={handleSearch}
        />
      </div>
      <div className="gallary">
        {filteredPhotos.map((photo) => (
          <div
            data-aos="zoom-out"
            data-aos-delay="300"
            className="img"
            key={photo.id}
          >
            <Photo photo={photo} />
          </div>
        ))}
      </div>
      <ul className="page">
        <li
          className="pagebutton"
          onClick={() => {
            setPageNumber(pageNumber > 1 ? pageNumber - 1 : 1);
            scrollToTop();
          }}
        >
          Prev
        </li>
        <li className="pageNumber">{pageNumber}</li>
        <li
          className="pagebutton"
          onClick={() => {
            setPageNumber(pageNumber + 1);
            scrollToTop();
          }}
        >
          Next
        </li>
      </ul>
    </>
  );
};

export default Gallery;
