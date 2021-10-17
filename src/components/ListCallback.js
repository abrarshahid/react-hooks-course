import { useState, useEffect } from "react"
export default function ListCallback({getItems}) {
    const [items, setItems] = useState([])
    useEffect(() => {
        setItems(getItems())
    }, [getItems])

    return (
        <div>
            {items.map(item => {
                return <div key={item}>{item}</div>
            })}
        </div>
    )
}
