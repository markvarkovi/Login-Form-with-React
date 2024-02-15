import { useState, useEffect } from "react";
import "./styles/Background.css";

function DynamicBackground() {
  const [timeOfDay, setTimeOfDay] = useState("");

  useEffect(() => {
    let hour = new Date().getHours();
    if (hour >= 0 && hour < 12) {
      setTimeOfDay("morning");
    } else if (hour >= 12 && hour < 18) {
      setTimeOfDay("afternoon");
    } else {
      setTimeOfDay("night");
    }
  }, []);

  return (
    <>
    <div className="select-background">
      <button onClick={()=>setTimeOfDay("morning")}>🌞</button>
      <button onClick={()=>setTimeOfDay("afternoon")}>🌓</button>
      <button onClick={()=>setTimeOfDay("night")}>🌙</button>
    </div>
      {timeOfDay === "morning" ? (
        <div className="morning-bg">
          <h2 className="greeting">Good Morning!</h2>
        </div>
      ) : timeOfDay === "afternoon" ? (
        <div className="afternoon-bg">
          <h2 className="greeting">Good Afternoon!</h2>
        </div>
      ) : (
        <div className="evening-bg">
          <h2 className="greeting">Good Evening!</h2>
        </div>
      )}
    </>
  );
}

export default DynamicBackground;
