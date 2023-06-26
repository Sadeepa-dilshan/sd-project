import React from "react";
import styles from '../../style.module.css';
import { useState } from "react"
import ListItem from "./ListItem";

export default function Todo() {

    const [todo,setTodo] = useState("");
    const [todoList,setTodoList] = useState([]);

    // const handleChange = (event) =>{
    //     setTodo(event.target.value);
    //     // console.log(todo);

    // }
    // const handleSubmit = (event)=>{
    //     event.preventDefault();

    //     let tempList = todoList;
    //     tempList.push(todo);
    //     setTodoList(tempList);
    //     console.log(todoList);
    //     setTodo("");

    // };

    return(
        <div className={styles.header}>
        
            {/* <form className="" action="" onSubmit={handleSubmit}>
                <input type="text" value={todo} onChange={handleChange}/>
                <button type="submit">Add</button>
            </form> */}

            <form action="">
                todo={todo}
                setTodo={setTodo}
                todoList={todoList}
                setTodoList={setTodoList}
            </form>
                    {todoList.map((item) =>(
                        <ListItem key={item} name={item}  />
                    )
                    )
                }
            
        </div>
    );
    
}
