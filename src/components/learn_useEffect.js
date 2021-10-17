import { useState, useEffect } from "react";

function Resource() {
    const [resource, setResource] = useState('users')
    const [data, setData] = useState([])
    const [width, setWidth] = useState(window.innerWidth)

    const handleWidth = () => setWidth(window.innerWidth)
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resource}`)
            .then(response => response.json())
            .then(json => setData(json))
    }, [resource])

    useEffect(() => {
        window.addEventListener('resize', handleWidth)
        return()=>{
            window.removeEventListener('resize',handleWidth)
        }
    }, [])

    return (
        <div>
            <h2>Width of the window is {width}</h2>
            <div>
                <button onClick={() => setResource('posts')}>Posts</button>
                <button onClick={() => setResource('users')}>Users</button>
                <button onClick={() => setResource('comments')}>Comments</button>

            </div>
            <h1>{resource}</h1>
            {data.map(data => {
                return <pre>{JSON.stringify(data)}</pre>
            })}
        </div>
    )
}

export default Resource;
