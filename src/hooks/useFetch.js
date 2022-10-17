// import axios from "axios";
import { useState, useEffect } from "react";
// /**
//  * function to fetch data from the mock file
//  * @param {string} path
//  * @returns Promesse
//  */
function useFetchUrl(path) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(path, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setData(data);
      })
      .catch((err) => {
        console.log("Error Reading data " + err);
      });
  }, [path]);
  return data;
}

export default useFetchUrl;
