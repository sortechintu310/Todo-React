import { useState } from "react";

function List(props){
    return(
        <li style={{backgroundColor: props.isActive?"white":"#373a40",color: props.isActive?"#373a40":"white"}}>{props.listtile}</li>
    )
}

export default function Lists(props){
    const [isActive,setIsActive] = useState(true);
    function handleclick(){
        setIsActive(!isActive)
    }
    return(
        <div className="lists">
            <div>
                <ul>
                    {props.listTitles.map((list,index)=>(
                       <List key={index} listtile={list} click={handleclick} isActive={isActive}/>
                    ))}
                </ul>
            </div>
            <button className="addbtn" disabled={true} onClick={props.click}><i class="fa-solid fa-plus"></i></button>
        </div>
    )
}