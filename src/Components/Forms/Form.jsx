// import { Component } from "react";
import { useState } from "react";
// class Form extends Component{
//     state = {
//         firstName:"",
//         lastName:"",
//     };

//     handleChange = (event) =>{
//         this.setState({
//             firstName: event.target.value,
//         });
//     };

//     handleLastChange = (event) =>{
//         this.setState({
//             lastName: event.target.value,
//         });
//     };

//    const handleSubmit = (event) =>{
//         event.preventDefault();
//         setTodoList([...todoList,todo])
//         // console.log({
//         //     fname: this.state.firstName,
//         //     lname:this.state.lastName,
//         // })
//     };
//     };

const Form = ({todo,setTodo,todoList,setTodoList}) => {

    const handleChange = (event) =>{
        setTodo(event.target.value);
        console.log(todo);
    };

    const handleSubmit = (event) =>{
        event.preventDefault();
        setTodoList([...todoList,todo]);
        // console.log({
        //     fname: this.state.firstName,
        //     lname:this.state.lastName,
        // })
    };

   
    // render(){
        return(
            <>
            <h3>Form</h3>
                {/* <form onSubmit={this.hadleSubmit} action="">
                    <input 
                    onChange={this.handleChange}
                    type="text" 
                    value={this.state.firstName}/>

                    <input 
                    onChange={this.handleLastChange}
                    type="text" 
                    value={this.state.lastName}/>

                    <button type="submit">Log In</button>
                </form> */}

                <form action="" onSubmit={handleSubmit}>
                    <input type="text" value={todo} onChange={handleChange} />
                    <button>Add</button>
                </form>
            </>
        );
    };
    //}
//}
export default Form;