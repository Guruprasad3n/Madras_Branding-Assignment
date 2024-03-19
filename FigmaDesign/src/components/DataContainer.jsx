import "./dataContainer.css";
import Layout from "./Layout";
import bulb from "../../public/assets/bulb.png";
import Star from "../../public/assets/frameStar.png";
import shirt from "../../public/assets/shirt.png";

function DataContainer() {
  const data = [
    { text: "Trending smart watches 2024", icon: `${bulb}` },
    { text: "Portable vaccume cleaner", icon: `${Star}` },
    { text: "Kurti sets under 600", icon: `${shirt}` },
  ];
  return (
    <Layout>
      <div className="mainDataContainer">
        <p>
          <span className="greadientColor" style={{ color: "" }}>
            Hello, John
          </span>
          <br />
          <span className="normalCOlor" style={{ textAlign: "left" }}>
            How can I help you today?
          </span>
        </p>
        <div className="bottomProperties">
          {data.map((e) => (
            <div className="CardCompinent">
              <p style={{ textAlign: "left", marginTop: "-2px" }}>{e.text}</p>
              <div className="iconImg">
                <img src={e.icon} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
export default DataContainer;
