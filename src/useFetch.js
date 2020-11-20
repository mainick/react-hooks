import React, { useState, useEffect } from "react";

const useFetch = (url) => {
    const [status, setStatus] = useState("idle");
    const [data, setData] = useState([]);

    useEffect(() => {
        if (!url) return;
        fetchData();
    }, [url]);

    const fetchData = async () => {
        setStatus("fetching");
        let response = await fetch(url);
        let json = await response.json();

        setData(json);
        setStatus("fetched");
    };

    return [status, data];
};

export default useFetch;
