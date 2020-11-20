import React, { useState } from "react";

const AppHookState = () => {
    const [todos, setTodos] = useState([
        { title: "imparare React" },
        { title: "imparare gli state" },
        { title: "imparare i componenti funzionali" },
    ]);
    const [value, setValue] = useState("");
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
                {todos.map((item, i) => (
                    <li key={i}>{item.title}</li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={value}
                    placeholder="aggiungi todo"
                    onChange={onChangeText}
                />
            </form>
        </div>
    );
};

export default AppHookState;
