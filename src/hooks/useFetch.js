// import axios from "axios";
import { useState, useEffect } from "react";

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
        console.log(data);
        setData(data);
      });
  }, [path]);
  return data;
}

export default useFetchUrl;
