import ImageItem from "./ImageItem";

function ImageList({ imagesPlaceholder }) {
  return (
    <div>
      {imagesPlaceholder.map((image) => {
        return <ImageItem key={image.id} image={image} />;
      })}
    </div>
  );
}

export default ImageList;
