import { useState, useEffect, useRef } from "react"

const NameRef = () => {
    const [name, setName] = useState('')
    const renderCount = useRef(1)
    const inputRef = useRef()
    const prevName = useRef('')

    useEffect(()=>{
        prevName.current = name
    },[name])

    useEffect(()=>{
        renderCount.current = renderCount.current + 1
    })
    const focus = () => inputRef.current.focus()
    return (
        <div>
            <input ref={inputRef} type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <p>My name is {name} and its used to be {prevName.current}</p>
            <button onClick={focus}>Focus</button>
            Rendered: {renderCount.current} times
        </div>
    )

}

export default NameRef