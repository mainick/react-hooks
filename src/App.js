import React, { useState } from "react";
const App = () => {
    const [todos, setTodos] = useState([
        { name: "imparare React" },
        { name: "imparare gli state" },
        { name: "imparare i componenti funzionali" },
    ]);

    return (
        <div className="app">
            <div className="todo-list">
                {todos.map((item, i) => (
                    <div key={i}>{item.name}</div>
                ))}
            </div>
        </div>
    );
};
export default App;
