import { useState } from "react";

export default function TodoList() {
    const [count, setCount] = useState(1);
    const [todos, setTodos] = useState(["SAMPLE TASK"]);
    const [newtodo, setNewTodo] = useState("");

    function addTodo() {
        setTodos((prevtodos) => {
            return [...prevtodos, newtodo];
        });
        setCount((prevcount) => {
            return prevcount + 1;
        });
    }

    function deleteTodo(index) {
        setTodos((previous) => {
            return previous.filter((previous, idx) => {
                return idx != index;
            })
        })
        setCount((prevCount) => {
            return prevCount - 1;
        })
    }

    function upperCaseAll() {
        setTodos((prevtodos) => prevtodos.map((todo) => todo.toUpperCase()));
    }

    function upperTodo(indextoupper) {
        setTodos((prevtodos) => prevtodos.map((todo, index) => {
            if (index === indextoupper) {
                return todo.toUpperCase();
            }
            else {
                return todo;
            }
        }));
    }

    function markCompleted(indextomarkcomplete) {
        setTodos((prevtodos) => prevtodos.map((todo, index) => {
            if (index === indextomarkcomplete) {
                return <s>{todo}</s>;
            }
            else {
                return todo;
            }
        }));
    }

    function markCompletedAll() {
        setTodos((prevtodos) => prevtodos.map((todo) => <s>{todo}</s>));
    }

    return (
        <div>
            <input placeholder="ADD A TASK" value={newtodo} onChange={(e) => setNewTodo(e.target.value)} />
            <button onClick={addTodo}>ADD TASK</button>
            <br /><br /><br />
            <button onClick={upperCaseAll}>UPPERCASE ALL</button>
            <button onClick={markCompletedAll}>MARK ALL AS COMPLETE</button>
            <hr></hr>
            <h2>TOTAL TODO LIST {count}</h2>
            <ul>
                {
                    todos.map((task, index) => {
                        return (
                            <span>
                                <li key={index}>
                                    {task}
                                    &nbsp;&nbsp;&nbsp;
                                    <button onClick={() => { deleteTodo(index) }}>DELETE</button>
                                    <button onClick={() => { upperTodo(index) }}>UPPERCASE</button>
                                    <button onClick={() => { markCompleted(index) }}>MARK AS COMPLETE</button>
                                </li>
                            </span>
                        );
                    })
                }
            </ul>
        </div>
    );
}