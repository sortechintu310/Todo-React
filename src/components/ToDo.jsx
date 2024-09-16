import { useState } from "react"
import Heading from "./Heading"
import Lists from "./Lists"
import TodoItem from "./TodoItem"
import Addtolist from "./Addtolist";

export default function ToDo() {
    const [isAddTodo, showTodo] = useState(false);
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState(["Buy milk", "complete Notes", "complete java practical"])
    const [isaddlist, showaddlist] = useState(false);
    const [lists,setLists] = useState(["Today","Tommorow"]);
    function showtodo() {
        showTodo(preValue => { return !preValue })
    }
    function handletodo(e) {
        const { value } = e.target;
        setTodo(value);
    }
    function addtodos() {
        setTodos(preValue => { return [...preValue, todo] });
        setTodo("");
    }
    function deleteTodo(id) {
        setTodos(preValue => {
            return preValue.filter((item, index) => { return index !== id })
        })
    }
    function handleEdit(newtodo, todo) {
        console.log(newtodo, todo)
        setTodos(preValue => { return preValue.map(str => str === todo ? newtodo : str) });
    }
    function showaddnewlist() {
        showaddlist(!isaddlist);
    }
    return (
        <main>
            <div className="todo">
                <Heading title="TODO LIST" />
                <Lists click={showaddnewlist} listTitles={lists} />
                <div className="tasks" style={todos.length <= 0 ? { display: "grid", placeItems: "center" } : null}>
                    {todos.length > 0 ? todos.map((todo, index) => <TodoItem key={index} id={index} todoName={todo} remove={deleteTodo} edit={handleEdit} />) : <p style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#64676c" }}>No New ToDos</p>}
                </div>
                <div className="addnewtodo">
                    {isAddTodo && <div><input type="text" placeholder="Add New ToDo" onChange={handletodo} value={todo} /> <button className="addbtn" onClick={addtodos}><i className="fa-solid fa-plus"></i></button></div>}
                    <button className="addnewbtn" onClick={showtodo}>ADD NEW TODO</button>
                </div>
                <div className="date">
                    {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: '2-digit' })}
                </div>
            </div>
            {isaddlist && <Addtolist click={showaddnewlist}/>}
        </main>
    )
}