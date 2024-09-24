import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <h1 className="text-center text-5xl font-bold bg-violet-500 block m-auto pt-10 pb-10">
        {" "}
        TO-DO <span className="italic">Redux</span>
      </h1>

      <div className="mt-10 text-center font-semibold bg-violet-500 w-2/4 block m-auto pt-6 pb-6 rounded-md">
        <AddTodo />
        <Todos />
      </div>
    </>
  );
}

export default App;
