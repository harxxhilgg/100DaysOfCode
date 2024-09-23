import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <h1 className="text-center m-28 text-4xl font-bold">
        TO-DO App using RTK
      </h1>

      <div className="bg-[#593d88] rounded-lg w-1/2 p-5 fixed left-1/4 top-1/3 translate-">
        <AddTodo />
        <Todos />
      </div>
    </>
  );
}

export default App;
