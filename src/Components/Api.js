// import React, { useEffect, useState } from "react";

// function Api() {
//     const AIPKEY ="5aec5428482d4c2fa51863b44d162a6b"
//     const API ="https://newsapi.org/v2/everything?q="
//   const [data, setData] = useState([]);
//   const fetchApiData = async (query) => {
//     try {
//       const response = await fetch(`${API}${query}&apiKey=${AIPKEY}`);
 
//       setData(await response.json());
    
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     fetchApiData("bitcoin");
//   }, []);
//   return (
//     <>
//       {data.articles?.map((item, index ) => {
//         return (
//           <h1 className="text-xl font-bold text-center text-blue-900">
//           {item.title}
//             </h1>
//         );
//       })}
//       {/* <h1>
//        {data.articles[0].title}
//       </h1> */}
//     </>
//   );
// }

// export default Api;
