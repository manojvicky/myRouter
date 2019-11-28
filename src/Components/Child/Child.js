import React from "react";
import { useParams } from "react-router-dom";
export default function Child() {
  const { id } = useParams();
  console.log("id", id);
  return <div>{id}</div>;
}
