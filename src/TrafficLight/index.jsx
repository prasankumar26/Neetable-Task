import React, { useState, useEffect } from "react";


const TrafficLight = () => {
    const [currentColor, setCurrentColor] = useState('red')

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentColor((prevColor) => {
            if (prevColor === "red") {
              return "yellow";
            } else if (prevColor === "yellow") {
              return "green";
            } else {
              return "red";
            }
          });
        }, 1000);
    
        return () => {
          clearInterval(interval);
        };
      }, []);
    

    
  return (
    <div style={{height: '100vh'}} className="row d-flex justify-content-center align-items-center flex-column">
        <h1 className="text-center text-uppercase mb-4">Traffic Light</h1>
        <div
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            backgroundColor: currentColor === 'red' ? 'red' : "rgb(115, 113, 109)"
          }}
        ></div>
        <div
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            backgroundColor: currentColor === 'yellow' ? 'yellow' : "rgb(115, 113, 109)"
          }}
        ></div>
        <div
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            backgroundColor: currentColor === 'green' ? 'green' :  "rgb(115, 113, 109)"
          }}
        ></div>
      </div>
  )
}

export default TrafficLight