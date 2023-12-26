import "../../src/ImageItem.css";

function ImageItem({ image }) {
  return (
    <div>
      <div className="mx-2 my-2 p-3 rounded-3 imageListWrapper">
        <img
          src={image?.urls?.small}
          alt={image?.alt_description}
          className="imageListImg"
        />
      </div>
    </div>
  );
}

export default ImageItem;
