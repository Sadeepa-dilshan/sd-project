import React from "react";
import ConditionalComponent from "../../Actions/ConditionalComponent";
import Todo from "../../Actions/Todo";

function Home() {
   return(
    <>
        <div className="container mt-4">
            <h3>Well Come</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                 Cumque sed est commodi doloremque maxime optio explicabo,
                 blanditiis esse iste quis laboriosam.</p>
        </div>

        <ConditionalComponent/>
        <Todo/>
    </>
    
   );
    
}
export default Home;