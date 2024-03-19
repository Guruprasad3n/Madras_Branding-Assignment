import "./layout.css";
import mainLogo from "../../public/assets/mask_group.png";
import home from "../../public/assets/home.png";
import search from "../../public/assets/search.png";
import disc from "../../public/assets/disc.png";
import logout from "../../public/assets/logout.png";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";
function Layout({ children }) {
  const navigate = useNavigate();
  const handleCLick = () => {
    navigate("/");
  };
  return (
    <>
      <div className="main">
        <div className="layout">
          <div className="sidebar">
            <div>
              <img
                src={mainLogo}
                onClick={handleCLick}
                alt="Logo"
                style={{ cursor: "pointer" }}
              />
              <img src={home} alt="Home" style={{ cursor: "pointer" }} />
              <img src={search} alt="Search" style={{ cursor: "pointer" }} />
              <img src={disc} alt="Disc" style={{ cursor: "pointer" }} />
              <img src={logout} alt="Logout" style={{ cursor: "pointer" }} />
            </div>
          </div>
          <div className="content">
            <div className="body">{children}</div>
            <SearchBar />
          </div>
        </div>
      </div>
    </>
  );
}
export default Layout;
