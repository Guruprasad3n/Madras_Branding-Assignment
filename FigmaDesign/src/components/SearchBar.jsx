import Layout from "./Layout";
import "./searchbar.css";
import plus from "../../public/assets/plus-search.png";
import shop from "../../public/assets/shop-button.png";
import Star from "../../public/assets/starButton.png";

function SearchBar() {
  return (
    <>
      <div className="searchMain">
        <div className="inp-content">
          <img src={plus} alt="Plus-Add" />
          <input type="text" name="" id="" placeholder="Ask me anything..." />
          <button>
            <span className="buttonSpan">
              <img src={Star} alt="" /> <span>Shop</span>
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
export default SearchBar;
