import React from "react";
import "../css/footer.css";
function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footerContent">
          <div className="gammaLogoImg">
            <img src="https://d2x8ygf1qnoedj.cloudfront.net/images/White-Logo-g-spot.svg" />
          </div>
          <div className="footerColumn">
            <h4
              style={{ color: "rgba(239, 208, 255, 0.7)", fontFamily: "Arial" }}
            >
              Product
            </h4>
            <ul
              style={{
                fontFamily: "Arial",
                color: "rgba(255, 255, 255, 0.86)",
                fontSize: "14px",
                lineHeight: "20px",
              }}
            >
              <li>Help</li>
              <li>Change log</li>
              <li>Templates</li>
              <li>Inspiration</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className="footerColumn">
            <h4
              style={{ color: "rgba(239, 208, 255, 0.7)", fontFamily: "Arial" }}
            >
              Company
            </h4>
            <ul
              style={{
                fontFamily: "Arial",
                color: "rgba(255, 255, 255, 0.86)",
                fontSize: "14px",
                lineHeight: "20px",
              }}
            >
              <li>Team</li>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <p
                style={{
                  marginTop: "30px",
                  fontWeight: "500",
                  background: "transparent",
                  color: "rgba(239, 208, 255, 0.7)",
                  fontSize: "14px",
                  fontWeight: "700",
                }}
              >
                Language
              </p>
            </ul>
          </div>
          <div className="footerColumn">
            <h4
              style={{ color: "rgba(239, 208, 255, 0.7)", fontFamily: "Arial" }}
            >
              Language
            </h4>
            <ul
              style={{
                fontFamily: "Arial",
                color: "rgba(255, 255, 255, 0.86)",
                fontSize: "14px",
                lineHeight: "20px",
              }}
            >
              <li>Follow us</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>LinkedIn</li>
              <li>TikTok</li>
            </ul>
          </div>
        </div>
        <p
          style={{
            background: "transparent",
            textAlign: "center",
            marginTop: "70px",
            fontSize: "13px",
            color: "rgb(183, 154, 202)",
          }}
        >
          © Gamma Tech, Inc. 2022
        </p>
      </footer>
    </>
  );
}
export default Footer;
