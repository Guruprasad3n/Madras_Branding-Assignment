import React, { useState } from "react";
import "./searchbar.css";
import plus from "../../public/assets/plus-search.png";
import Star from "../../public/assets/starButton.png";
import ProductPage from "./ProductPage";
import Suggestions from "./Suggestons";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [inp, setInp] = useState("");
  const [showProductPage, setShowProductPage] = useState(false);
const navigate =useNavigate()
  const handleClick = () => {
    if (!inp) {
      alert("Write Something");
    } else {

      setShowProductPage(true);
      navigate("/suggestions")
    }
  };

  return (
    <>
      <div className="searchMain">
        <div className="inp-content">
          <img src={plus} alt="Plus-Add" />
          <input
            type="text"
            placeholder="Ask me anything..."
            value={inp}
            onChange={(e) => setInp(e.target.value)}
          />
          <button className="buttonShop" onClick={handleClick}>
            <span className="buttonSpan">
              <img src={Star} alt="" /> <span>Shop</span>
            </span>
          </button>
        </div>
      </div>
      {showProductPage && <Suggestions />}
    </>
  );
}

export default SearchBar;
