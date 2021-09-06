import Todos from "./components/Todo";
import Todo from "./models/todo";

function App() {
  const todos = [
    new Todo('Learn React'),
    new Todo('Learn TS')
  ];
  return (
    <div>
      <Todos items={todos}/>
    </div>
  );
}

export default App;
