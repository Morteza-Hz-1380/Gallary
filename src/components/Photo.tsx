import './Photo.css';

const Photo = ({ photo }) => {
  const handleDownload = () => {
    // Fetch the image data
    fetch(photo.src.original)
      .then(response => response.blob())
      .then(blob => {
        // Create a download link
        const downloadLink = document.createElement('a');
        downloadLink.href = window.URL.createObjectURL(blob);
        downloadLink.download = 'photo'; // You can set a default filename here or use the photo's name
        downloadLink.click();
      });
  };

  return (
    <>
      <span className="opacity">
        <h3>{photo.photographer}</h3>
        <button onClick={handleDownload}>Download</button>
        <img src={photo.src.large} alt={photo.photographer} />
      </span>
    </>
  );
};

export default Photo;
