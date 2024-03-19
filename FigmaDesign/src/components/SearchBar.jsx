import Layout from "./Layout";
import "./searchbar.css";
import plus from "../../public/assets/plus-search.png";
import shop from "../../public/assets/shop-button.png";
import Star from "../../public/assets/starButton.png";
import { useState } from "react";
import ProductPage from "./ProductPage";
function SearchBar() {
  const [inp, setInp] = useState("");
  const handleClick = () => {
    if (!inp) {
      alert("Write Someting ");
    } else {
      <ProductPage />;
    }
  };
  return (
    <>
      <div className="searchMain">
        <div className="inp-content">
          <img src={plus} alt="Plus-Add" />
          <input
            type="text"
            name=""
            id=""
            placeholder="Ask me anything..."
            value={inp}
            onChange={(e) => setInp(e.target.value)}
          />
          <button onClick={handleClick}>
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
