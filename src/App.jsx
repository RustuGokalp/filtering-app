import "./App.css";
import SearchHeader from "./SearchHeader";
import "bootstrap/dist/css/bootstrap.min.css";
import searchImages from "./api";
function App() {
  const handleSubmit = (term) => {
    searchImages(term);
  };
  return (
    <div>
      <SearchHeader search={handleSubmit} />
    </div>
  );
}

export default App;
