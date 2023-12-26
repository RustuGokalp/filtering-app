import ImageItem from "./ImageItem";

function ImageList({ imagesPlaceholder, hasError }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          {hasError ? (
            <div className="display-3 text-center text-white mt-5">
              Error Message: Image not found.
            </div>
          ) : (
            <div className="d-flex flex-wrap justify-content-center">
              {imagesPlaceholder.map((image) => (
                <ImageItem key={image.id} image={image} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ImageList;
