import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice.js";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    // <>
    //   <div>todos</div>
    //   {todos.map((todo) => (
    //     <li key={todo.id}>
    //       {todo.text}
    //       <button
    //         onClick={() => dispatch(removeTodo(todo.id ))}
    //       >X</button>
    //     </li>
    //   ))}
    // </>

    <>
      <div className="mt-14">
        <div className="text-[20pt] mb-6 text-gray-900">Your Todos</div>
        <ul className="">
          {todos.map((todo) => (
            <li
              className="flex bg-gray-900 mb-2 text-white pl-5 pr-5 ml-10 mr-10 pt-3 pb-3 rounded-lg text-lg"
              key={todo.id}
            >
              <div className="grow text-left relative top-0.5">{todo.text}</div>
              <button onClick={() => dispatch(removeTodo(todo.id))}>
                <div>
                  <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
                  />
                  <span className="material-symbols-outlined relative top-0.5">
                    delete_forever
                  </span>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Todos;
