import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");
  return (
    <div
      className=" w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2  ">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white text-black px-3 py-2 rounded-2xl">
          <button onClick={()=> setColor("purple")}
            className=" outline-none px-4 py-1 rounded-full"
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>

          <button onClick={()=> setColor("gray")}
            className=" outline-none px-4 py-1 rounded-full"
            style={{ backgroundColor: "gray" }}
          >
            Gray
          </button>

          <button onClick={()=> setColor("green")}
            className=" outline-none px-4 py-1 rounded-full"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>

          <button onClick={()=> setColor("red")}
            className=" outline-none px-4 py-1 rounded-full"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>

          <button onClick={()=> setColor("gray")}
            className=" outline-none px-4 py-1 rounded-full"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>

          <button onClick={()=> setColor("pink  ")}
            className=" outline-none px-4 py-1 rounded-full"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
