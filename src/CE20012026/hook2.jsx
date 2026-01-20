import React,{useState} from "react";
export default function Hook2Example(){
    const [user, setUser] = useState({
        name: "Guest",
        age:25,
        ce: true,
        city: "Rajkot",
    });
    return(
        <>
        <input 
            type="text" 
            placeholder="Enter your name"
            value={user.name}
            onChange={(e) => setUser({...user, name: e.target.value})} /> {""}
        <br />
        <input 
            type="number" 
            placeholder="Enter your age"
            value={user.age}
            onChange={(e) => setUser({...user, age: e.target.value})} /> {""}    
        <br />
        <select
            value={user.city}
            onChange={(e) => setUser({...user, city: e.target.value})} >
            <option value="Jamnagar">Jamnagar</option>
            <option value="Rajkot">Rajkot</option>
            <option value="Ahmedabad">Ahmedabad</option>
        </select>
        <br />
        <input 
            type="checkbox" 
            checked={user.ce}
            onChange={(e) => setUser({...user, ce: e.target.checked})} /> {""}
        <br />
        <h2>Name: {user.name}</h2>
        <h2>Age: {user.age}</h2>
        <h2>City: {user.city}</h2>
        <h2>CE: {user.ce ? "Yes" : "No"}</h2>
        </>
    )
}