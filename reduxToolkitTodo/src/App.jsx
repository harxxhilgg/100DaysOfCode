import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <h1 className="text-center m-28 text-4xl font-bold">
        TO-DO App using RTK
      </h1>

      <div className="bg-[#593d88] flex flex-col rounded-lg ml-96 mr-96 p-5">
        <AddTodo />
        <Todos />
      </div>
    </>
  );
}

export default App;
