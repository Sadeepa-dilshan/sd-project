import React, { Fragment, useEffect, useState } from "react";
import NameListItems from "./NameListItems";
import Increment from "../../Actions/Increment";
import MyButton from "../../Actions/Counter";

function NameList() {

    // load data for add button
    const [loadData,setLoadData] = useState(new Date());
    
    const [NameList,setNameList] = useState(
        [
            // first person
            {
            id:new Date(),
            name:{
                title:"Mrs",
                first:"Karla",
                last:"Uribe",
                  },
            location: {
                street:{"number":2229,
                name:"Boulevard Colima",
                },
                city:"Sauta",
                    },
                
            picture:{
            medium:"https://randomuser.me/api/portraits/med/women/23.jpg",
            },
            dob: {
                date: "1996-03-08T15:13:16.688Z",
                age: 20,
              },
        },
        // end first person
        
        // start second person
            {
                id:new Date(),
                name:{
                        title: "Miss",
                        first: "Jennie",
                        last: "Nichols"
                      },
                location: {
                        street: {
                        number: 8929,
                        name: "Valwood Pkwy",
                        },
                    },
                picture:{
                medium:"https://randomuser.me/api/portraits/med/men/75.jpg",
                },
                dob: {
                    "date": "1992-03-08T15:13:16.688Z",
                    "age": 30
                  },
                
        },
        // end second person
        ]
        // end namelist      
    );
    
// start use effect
useEffect(() =>{
    fetch("https://randomuser.me/api")
    .then((response) =>{
        return response.json();
    })
    .then((responseData) =>{
        setNameList((NameList) =>[...NameList,responseData.results[0]]);
    });
},[loadData]);
// end use effect

// start NameListComponent-map

const NameListComponent = ()=>{
    return NameList.map((aName) => {
        return(

            <div className="container">
                <ul className="list-group">
                    <NameListItems 
                    key={`${new Date()}`}
                    name={`${aName.name.first}`}
                    city={`${aName.location.street.name}`}
                    birthday={`${aName.dob.date}`}
                    avatar={`${aName.picture.medium}`}
                    />
                </ul>                
            </div>
            
        );
    });
    // map
};
// end NameListComponent-map

// start addUserHandler
const addUserHandler = ()=>{
    // console.log('button clicked!');
    // const newUser = {
    //     id:2,name:{title: "Miss",first: "Jennie",last: "Nichols"},
    //     location: {street: {number: 8929,name: "Valwood Pkwy",},},
    //     picture:{medium:"https://randomuser.me/api/portraits/med/men/75.jpg",},
    //     dob: {"date": "1992-03-08T15:13:16.688Z","age": 30},
        
    // };

    // // start set new user
    // // setNameList((NameList) => NameList.concat(newUser));
    //     setNameList((NameList) =>[...NameList,newUser]);
    // // end set new user

    setLoadData(new Date());
};
// end user Handler

    return(
        <Fragment>
            {/* start name */}
            <button className="btn btn-primary" onClick={addUserHandler}>Add Name</button>
            <NameListComponent/>
            <MyButton/>

        </Fragment>
    )
    
}
export default NameList;