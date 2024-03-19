import React, { useEffect, useState } from "react";

function FetchReq({ onDataFetched }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setProducts(data);
 
        onDataFetched(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [onDataFetched]); 

  return <></>;
}
export default FetchReq;



// import React, { useState } from "react";
// import FetchReq from "./FetchReq";

// function ParentComponent() {
//   const [fetchedData, setFetchedData] = useState([]);

//   // Define a function to receive the fetched data
//   const handleDataFetched = (data) => {
//     setFetchedData(data);
//   };

//   return (
//     <div>
//       {/* Pass the function as prop to FetchReq */}
//       <FetchReq onDataFetched={handleDataFetched} />

//       {/* Render the fetched data in this component */}
//       <ul>
//         {fetchedData.map((product) => (
//           <li key={product.id}>{product.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ParentComponent;
