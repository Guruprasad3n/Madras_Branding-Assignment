import React from "react";
import Layout from "./Layout";
import "./productPage.css";
import product1 from "../../public/assets/productPage1.png";
import product2 from "../../public/assets/productPage2.png";
import product3 from "../../public/assets/productPage3.png";
import star from "../../public/assets/ic_round-star.png";

function ProductPage() {
  const suggestions = [
    { id: 1, text: "Recommended" },
    { id: 2, text: "Lowest Price" },
    { id: 3, text: "Top Rated" },
  ];
  const shopItems = [
    {
      id: 1,
      img: product1,
      logo: "https://i.pinimg.com/originals/aa/70/8d/aa708d1f97a04f6f5a208213f89e1e67.png",
      star: "4.4",
      starlogo: star,
      brand: "Jump Cuts",
      description: "Men Printed Polo Neck Polyester Black T-Shirt",
      price: "₹349",
      button: "Shop now",
    },
    {
      id: 2,
      img: product2,
      logo: "https://i.pinimg.com/originals/aa/70/8d/aa708d1f97a04f6f5a208213f89e1e67.png",
      star: "4.4",
      starlogo: star,
      brand: "Jump Cuts",
      description: "Men Printed Polo Neck Polyester Black T-Shirt",
      price: "₹349",
      button: "Shop now",
    },
    {
      id: 3,
      img: product3,
      logo: "https://i.pinimg.com/originals/aa/70/8d/aa708d1f97a04f6f5a208213f89e1e67.png",
      star: "4.4",
      starlogo: star,
      brand: "Jump Cuts",
      description: "Men Printed Polo Neck Polyester Black T-Shirt",
      price: "₹349",
      button: "Shop now",
    },
  ];
  return (
    <Layout>
      <div className="mainProduct" style={{ color: "white" }}>
        <div className="listofBlack">
          <p>List of Black T-shirt</p>
        </div>
        <div className="customeSuggestions">
          {suggestions.map((sug) => (
            <p key={sug.id}>{sug.text}</p>
          ))}
        </div>

        <div>
          <div className="card-holder">
            {shopItems.map((ele, i) => (
              <div
                className="card"
                key={ele.id}
                style={{ backgroundImage: `url(${ele.img})` }}
              >
                <div className="flipkart-logo">
                  <img src={ele.logo} alt="" />
                </div>
                <div className="rating">
                  <span style={{ color: "black", fontWeight: "bold" }}>
                    {ele.star}
                    <img
                      src={ele.starlogo}
                      alt=""
                      width="15px"
                      style={{ mixBlendMode: "multiply" }}
                    />
                  </span>
                </div>
                <div className="product-name">
                  <span> {ele.brand} </span>
                  <p>{ele.description}</p>
                </div>
                <div className="price-and-btn-holder">
                  <div className="price">
                    <h2>{ele.price}</h2>
                  </div>
                  <div className="btn-holder" style={{ marginLeft: "100px" }}>
                    <button className="btn-shop-now">
                      <a href="">Shop now</a>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
export default ProductPage;
