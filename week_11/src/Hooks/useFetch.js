import { useState, useEffect } from "react";

{/*export function usefetch_title() {
    const [post,setpost] = useState({});

    async function getPosts() {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1"); // we are awaiting for the response from the backend.
        const json = await response.json();
        setpost(json);
    }

    useEffect(()=> {
        getPosts(); // we defined getPosts function here cause useEffect does not allow async function
    },[])

    return post.title;
}
    */}

export function usefetch(url) {
    console.log(url);
    const [finaldata, setFinalData] = useState({});
    const [Loading, setLoading] = useState(true);

    async function getData(url) {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setFinalData(json)
        setLoading(false);
    }

    useEffect( () => {
        getData(url);
    },[url])

    return {
        finaldata,
        Loading
    }
}