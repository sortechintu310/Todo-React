import { useState } from "react"

export default function TodoItem(props) {
    const [isEditBox, showEditBox] = useState(false);
    const [todo, setTodo] = useState(props.todoName)
    function showeditbox() {
        showEditBox(!isEditBox);
    }
    function handlechange(e) {
        const value = e.target.value;
        setTodo(value);
    }
    return (
        <div className="todoitem">
            <input type="checkbox" name="" id="" />
            <div className="todotitle" onClick={showeditbox}>
                {isEditBox && <div> 
                    <input type="text" autoFocus={true} style={{ marginRight: ".5rem", outline: "none" }} value={todo} onChange={handlechange} placeholder={props.todoName}/> 
                    <button style={{ backgroundColor: "#373a40" }} onClick={()=>{
                        props.edit(todo,props.todoName)
                    }}><i class="fa-solid fa-check"></i></button>
                </div>}
                {isEditBox ? null : props.todoName.length > 20 ? props.todoName.slice(0, 20) + '...' : props.todoName}
            </div>
            <button onClick={() => {
                return props.remove(props.id)
            }}><i class="fa-solid fa-trash"></i></button>
        </div>
    )
}