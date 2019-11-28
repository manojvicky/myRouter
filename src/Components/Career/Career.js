import React, { useState } from "react";
import A from "../Test/Test";
export default function Career() {
  const [count, handleCount] = useState(0);
  return (
    <>
      <div className="Career">Career new</div>
      <button
        onClick={() =>
          A(() => {
            console.log("setting State");
            handleCount(count + 1);
          })
        }
      >
        Count {count}
      </button>
    </>
  );
}
