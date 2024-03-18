import Navbar from "./Components/Navbar";
import MainContainer from "./Components/MainContainer";
import Video from "./Components/Video";
import TopFooter from "./Components/TopFooter";
import Footer from "./Components/Footer";
import "./App.css";
import ScrollEffect from "./Components/ScrollContainer";

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="imgContainer">
        <img
          className="positionImg"
          src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=355869&theme=light&period=monthly"
        />
      </div>
      <MainContainer />
      <Video />
      <ScrollEffect />
      <TopFooter />
      <Footer />
    </div>
  );
}

export default App;
