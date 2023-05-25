import "./App.css";
import TodoList from "./components/Todolist";

function App() {
  return (
    <div
      style={{
        width: 500,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        padding: 20,
        boxShadow: "0 0 10px 4px #bfbfbf",
        borderRadius: 5,
        height: "90vh",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Todolist - Redux Toolkit</h2>
      <TodoList />
    </div>
  );
}

export default App;
