import React from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";

function Suggestions() {
  return (
    <Layout>
      <div>
        <div>
          <ul style={{ listStyle: "none" }}>
            <li>
              <p
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "21.12px",
                  lineHeight: "27.72px",
                }}
              >
                Shopping across the web
              </p>
            </li>
            <li>
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "21.12px",
                  lineHeight: "27.72px",
                }}
                to="/products"
              >
                flipkart.com
              </Link>
            </li>
            <li>
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "21.12px",
                  lineHeight: "27.72px",
                }}
                to="/products"
              >
                meesho.com
              </Link>
            </li>
            <li>
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "21.12px",
                  lineHeight: "27.72px",
                }}
                to="/products"
              >
                mensxp.com
              </Link>
            </li>
            <li>
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "21.12px",
                  lineHeight: "27.72px",
                }}
                to="/products"
              >
                amazon.com
              </Link>
            </li>
            <li>
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "21.12px",
                  lineHeight: "27.72px",
                }}
                to="/products"
              >
                ajio.com
              </Link>
            </li>
            <li>
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "21.12px",
                  lineHeight: "27.72px",
                }}
                to="/products"
              >
                nike.ac
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export default Suggestions;

<p>Shopping across the web</p>;
