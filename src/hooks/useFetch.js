// import axios from "axios";
import { useState, useEffect } from "react";

function useFetchUrl(path) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(path)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [path]);
  return data;
}

export default useFetchUrl;
