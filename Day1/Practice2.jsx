import React from "react";
const man = () =>
{
    let age = 19;
    let name = 'SamAlex';
    let setStatus = false;
    let userdefault = undefined
    let responsevalue = null;
    let obj = [age,name,setStatus,userdefault,responsevalue]
    console.log("\n")
    for(let i =0; i<obj.length; i++)
    console.log(obj[i]);
    console.log("\n")
    let oldage = obj[0]
    obj[0] = 25;
    let status = obj[2]
    obj[2] = true;
    console.log(obj[0],name,obj[2],userdefault,responsevalue)

    alert("Check the console output")
}

function World()
{
    return(<div>
        <button onClick={man}>variable</button>
    </div>)
}
export default World;
