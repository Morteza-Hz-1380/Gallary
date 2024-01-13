const Photo = ({ photo }) => {
  return (
    <div className="photo">
      <img src={photo.src.medium} alt={photo.photographer} />
    {photo.photographer}
    </div>
  );
};
export default Photo;
