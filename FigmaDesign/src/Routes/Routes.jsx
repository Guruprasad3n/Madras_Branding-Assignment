import { Route, Routes } from "react-router-dom";

function MainRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<>Home</>} />
        <Route path="/products" element={<>Product</>} />
        <Route path="/card" element={<>Card</>} />
        <Route path="/single/:id" element={<>Single Product</>} />
      </Routes>
    </>
  );
}
export default MainRouter;
