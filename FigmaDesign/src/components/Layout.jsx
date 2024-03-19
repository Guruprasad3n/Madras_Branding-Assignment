import "./layout.css";
import mainLogo from "../../public/assets/mask_group.png";
import home from "../../public/assets/home.png";
import search from "../../public/assets/search.png";
import disc from "../../public/assets/disc.png";
import logout from "../../public/assets/logout.png";
import SearchBar from "./SearchBar";
function Layout({ children }) {
  return (
    <>
      <div className="main">
        <div className="layout">
          <div className="sidebar">
            <div>
              <img src={mainLogo} alt="Logo" />
              <img src={home} alt="Home" />
              <img src={search} alt="Search" />
              <img src={disc} alt="Disc" />
              <img src={logout} alt="Logout" />
            </div>
          </div>
          <div className="content">
            <div className="body">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Layout;
