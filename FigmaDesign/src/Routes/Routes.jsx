import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import ProductPage from "../components/ProductPage";
import DataContainer from "../components/DataContainer";
import Single from "../components/Single";
import Suggestions from "../components/Suggestons";

function MainRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DataContainer />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/suggestions" element={<Suggestions />} />
        <Route path="/products/:id" element={<Single />} />
      </Routes>
    </>
  );
}
export default MainRouter;
