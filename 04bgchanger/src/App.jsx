import { useState } from "react"


function App() {
  const [color, setColor] = useState("Gray");

  return (
    <>

    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
    <div className="text-center pt-24 text-5xl font-bold underline">
      Current Displaying Color: {color}
    </div>
      <div className="fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={() => setColor("red")} className="outline-none px-4 rounded-full shadow-lg font-bold text-white" style={{backgroundColor: "Red"}}>Red</button>
          <button onClick={() => setColor("green")} className="outline-none px-4 rounded-full shadow-lg font-bold text-white" style={{backgroundColor: "Green"}}>Green</button>
          <button onClick={() => setColor("blue")} className="outline-none px-4 rounded-full shadow-lg font-bold text-white" style={{backgroundColor: "Blue"}}>Blue</button>
          <button onClick={() => setColor("purple")} className="outline-none px-4 rounded-full shadow-lg font-bold text-white" style={{backgroundColor: "Purple"}}>Purple</button>
          <button onClick={() => setColor("Pink")} className="outline-none px-4 rounded-full shadow-lg font-bold" style={{backgroundColor: "Pink"}}>Pink</button>
          <button onClick={() => setColor("Yellow")} className="outline-none px-4 rounded-full shadow-lg font-bold" style={{backgroundColor: "Yellow"}}>Yellow</button>
          <button onClick={() => setColor("Black")} className="outline-none px-4 rounded-full shadow-lg font-bold text-white" style={{backgroundColor: "Black"}}>Black</button>
          <button onClick={() => setColor("White")} className="outline-none px-4 rounded-full shadow-lg font-bold" style={{backgroundColor: "white"}}>white</button>
          <button onClick={() => setColor("Gray")} className="outline-none px-4 rounded-full shadow-lg font-bold text-white" style={{backgroundColor: "Gray"}}>Gray</button>
          <button onClick={() => setColor("Orange")} className="outline-none px-4 rounded-full shadow-lg font-bold" style={{backgroundColor: "Orange"}}>Orange</button>
          <button onClick={() => setColor("Olive")} className="outline-none px-4 rounded-full shadow-lg font-bold text-white" style={{backgroundColor: "Olive"}}>Olive</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App;
