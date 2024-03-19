import Layout from "./Layout";
import "./single.css";
import Home from "../../public/assets/mask_group.png";
function Single() {
  return (
    <Layout>
      <div style={{ color: "White" }}>
        <p className="texthead">
          Men Checkered Round Neck Cotton Blend Black T-Shirt
        </p>
        <div className="mainContainerSing">
          <div className="singlePageContainerImage">
            <div className="imagethree">
              <img
                src="https://s3-alpha-sig.figma.com/img/3096/46d6/5629261bc810af5d3a237d39cd535bf8?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q7RhcjzcLjhBxo9--QgzmBtcqFVLNfBKgiS2Ez8lQyBWNmCbOyujudlLmfFk6U9Jl5ajQNz4-f3PTghnF-kszlMJlC0XOoaTOU8CaIeTKUprYsdsXoCHXlhEwWRD27p0cFxx0XT93BvRuJ5B2SyloRZRxU42d9vNL37rBbFQiwYZ4HFbtg7yRHdX1G0QBycQV8-7~VR9yG7SMOuLjauivy96Vu3BHnl7aGeqdE2ogDNgMTxv4lSKTFCurU-kGgLHn8K~Nyq8Bt0sWoRrTL3d6rjB-deJDs6klC-uiLOaZmsW80rEcg~es34EQq~~edMzGjpLh1fUNN4r9DewRh3LbA__"
                alt=""
              />
              <img
                src="https://s3-alpha-sig.figma.com/img/d11d/8ee2/d6b31c4349ae6f4074286d8ab704595b?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I8wlVQeRz6GX62cl9W1Rvmhjz8eDzo~5guRnwvH7uGh8SQ7sBCrnvDZF1HRMOjaHk5hHwLLxj6vVYA3e0j1lEaBlPKv4o2XqQQ5ndwq34~~qPNtZltDdLXGg0ng54vcRh1Te6n5vj-BW9hRvdFwXDqkSTmYFendUgn8gw~vwFg~YeG0lIezWWUZCZzZ8CZdNFSi7a2cdVAdoO64DV-euDm~ANYYX32D9f6NcKF2pPwR2-ILupqqRTxdY~nUHMmOhlJD7VZsuB-cKmRnOIXF8OPasG8Rn3yiXEZG92d7m2Ph6ZdRHgqUCm21Nz-CMQ2li6AB1ohCMgqgGJGsgpIqPqA__"
                alt=""
              />
              <img
                src="https://s3-alpha-sig.figma.com/img/d810/fe1b/0b8692b91948dbfa9f4860cb644b2392?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mcP8Eq15FJXCqNgHIj2RIrciFsoVWTofPzmyktv-Djs1934TscW81QNFTQqXI0A0p5QlFweoMX9f504MuY4KZm5a9Pkkl4814JFtWmq0-MlWiA9O~WdyNqpLMDVMaGMvFpV9j3lR49YslT1vtBAS3Z3XMsTU~6oVbOUDVjML9bbPtLkNHjCLbSvQyfBctWKLSkyfe75li7tZEOynPWb-W5EIL4qe-i-ghTev8X9CfKw1ImhPNkBvV50kgksSvp~gDer4uop6OOB5G2GcqNpDvM33P2mvLvUKEj4s5sUcHdRd8T2~uhXI0KIypTI3lvVeKVtr4xgorb5l8Kg5lMq99Q__"
                alt=""
              />
            </div>
            <div className="heroImage">
              <img
                src="https://s3-alpha-sig.figma.com/img/8eef/68a4/df6b3af3bb555f4910bfcade6e10750e?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c-OYtOZvu6z~O69N~lFhUVNR1bLSYY9~jMDFbCbSIQwOGCW-PHSi9y-fIZiA-~KffcC8frh~SPpSW5mH8KPevcyBdY0JKD1IYKEJ8oJJS2hetnJId~diMTBJNVBiJ3OxZbl~aGFU0emiz3r242af5WxbKdgY3CZ15YSIhju0d0O6YOtoh5yA6~qJ0d5ffVwe7Cd8eNYhIS9PQMpDRaBviSP0GP7trDJfCS~z7XhgikKS~ypFtSSE~gXZrIxKi54c-2xwnhe4ZVVShhpGq1s5oYxNF9LGUx4ZWuoOyTWh-cM4MdeJuy-KRN7bUC8K3ha0N64V6lrePBguVDjXGEJq0A__"
                alt=""
              />
            </div>
          </div>
          <div
            className="rightCall"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyItems: "center",
              gap: "15px",
            }}
          >
            <img src={Home} alt="" />
            <p style={{ fontSize: "29.25px", fontWeight: "400" }}>
              House of Models
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "2px",
                // border: "1px solid red",
                borderRadius: "5.98px",
                backgroundColor: "rgba(40, 116, 240, 0.05)",
              }}
            >
              <button className="buttonFIlt">Overview</button>|
              <button className="buttonFIlt">Specifications</button>|
              <button className="buttonFIlt">Reviews</button>
            </div>
            <div className="productDescription">
              <p>Product Description</p>
              <p>
                Tees Collection specialize in making men's clothes with
                characteristics of fashionable,comfortable and elegant. To show
                a kind of fashionable and special dressing style, appear the
                person's vigorous and vitality personality, and express his
                active and optimistic attitude of life. Wear our professional
                design high quality men's shirts, you will become more elegant
                and fascinating. Our designers are attention to every detail of
                the design and pursue exquisite sewing process.
              </p>
            </div>
            <button className="mtop">Buy Now</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
export default Single;
