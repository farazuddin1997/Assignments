import React, { useEffect } from "react";
import axios from "axios";

const Question4 = () => {
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`http://www.example.com/api/get/1`);
      const jsonResponse = res.json();
      console.log(jsonResponse);
    };
    getData();
  }, []);
  return <h1>Calling Api</h1>;
};

export default Question4;
