import { useState } from "react";
import MyButton from "./Counter";

export default function ConditionalComponent() {
    let x=1;
    let y=0;

    const [display,setDisplay] = useState(x);

//     let output;

//     if (display) {
//       output=<MyButton/>;
//       ;
      
      
        
//     } else {
//         output= <h3>Nothing to see</h3>;
        
//     }

//     return <div>{output}</div>;

return display ? (
    <div>
        <MyButton/>
    </div>
    ) : (
    <div>
        <h3>Nothing to see</h3>
    </div>
    );

}