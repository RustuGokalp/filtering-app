import "./SearchHeader.css";

function SearchHeader({ search }) {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    search("Gökalp");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 my-3">
          <form className="formWrapper" onSubmit={handleFormSubmit}>
            <label className="mb-3">What are you looking for?</label>
            <input className="form-control" placeholder="Placeholder" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default SearchHeader;
