import "./SearchHeader.css";

function SearchHeader() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 my-3">
          <form className="formWrapper">
            <label className="mb-3">Ne Arıyorsunuz?</label>
            <input className="form-control" placeholder="Default input" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default SearchHeader;
