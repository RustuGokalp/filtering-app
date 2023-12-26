import { useState } from "react";
import "./SearchHeader.css";

function SearchHeader({ search }) {
  const [valueInput, setValueInput] = useState("");
  const handleFormSubmit = (event) => {
    event.preventDefault();
    search(valueInput);
    setValueInput((event.target[0].value = ""));
  };

  const handleChange = (event) => {
    setValueInput(event.target.value);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 my-3">
          <form className="formWrapper" onSubmit={handleFormSubmit}>
            <label className="mb-3 text-white">What are you looking for?</label>
            <input
              className="form-control"
              placeholder="Placeholder"
              value={valueInput}
              onChange={handleChange}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default SearchHeader;
