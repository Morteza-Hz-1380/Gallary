const Photo = ({ photo }) => {
  return (
    <div >
      <img src={photo.src.large} alt={photo.photographer} />
      {photo.photographer}
    </div>
  );
};
export default Photo;
