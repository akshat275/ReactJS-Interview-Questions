import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  // const [data, setData] = useState([])
  // useEffect(() => {
  //  fetch('https://github.com/akshat275')
  //  .then(response => response.json())
  //  .then(data => {
  //     console.log(data);
  //     setData(data)
  //  })
  // }, [])

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github : {data ? data.followers : "No Follower"}
      <img
        src={data ? data.image : "No Image Avaliable"}
        alt="No Image Avaliable"
        width={300}
      />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://www.linkedin.com/in/akshat1998/");
  return response.json();
};
