import React from "react";
import useFetch from "../hooks/useFetch";

const AppHookCustom = () => {
    const [status, todos] = useFetch(
        "https://jsonplaceholder.typicode.com/todos"
    );

    return (
        <div>
            {status !== "fetched" ? (
                <div>Caricamento dati ...</div>
            ) : (
                <ul>
                    {todos.map((todo, i) => (
                        <li key={i}>{todo.title}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default AppHookCustom;
