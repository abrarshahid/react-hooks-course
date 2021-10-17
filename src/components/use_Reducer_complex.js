import { useReducer, useState } from "react"

const ACTIONS = {
    ADD_TODO: 'add_todo'
}
const reducer = (todos, action) => {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.payload.name)]

    }
}

function newTodo(name) {
    return { id: Date.now(), name: name, complete: false }
}

const ReducerComplex = () => {
    const [todos, dispatch] = useReducer(reducer, [])
    const [name, setName] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(todos)
        dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } })
        
        setName('')

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
            </form>
            {todos.map(todo => {
                return <div key={todo.id}>
                    <span style={{ color: todo.complete ? '#AAA' : '#000' }}>
                        {todo.name}
                    </span>
                    
                </div>

            })}
        </div>
    )
}
export default ReducerComplex