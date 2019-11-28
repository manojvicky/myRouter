import React, { useEffect } from "react";

export default function Home(props) {
  useEffect(() => {
    console.log("useEffect", props);
  });
  console.log("Home props", props);
  return <div className="Home">Home</div>;
}
