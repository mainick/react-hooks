import React, { useState, useEffect } from "react";

const AppHookEffect = () => {
    const [todos, setTodos] = useState([]);
    const [value, setValue] = useState("");

    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        let response = await fetch(
            "https://jsonplaceholder.typicode.com/todos"
        );
        let data = await response.json();

        setTodos(data.slice(0, 10));
    };

    const onChangeText = (e) => {
        setValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value.trim() === "") return;

        setTodos([...todos, { title: value }]);
        setValue("");
    };

    return (
        <div>
            <ul>
                {todos.map((todo, i) => (
                    <li key={i}>{todo.title}</li>
                ))}
            </ul>

            <form onSubmit={handleSubmit}>
                <input
                    className="input"
                    type="textfetch"
                    value={value}
                    placeholder="aggiungi todo"
                    onChange={onChangeText}
                />
            </form>
        </div>
    );
};

export default AppHookEffect;
