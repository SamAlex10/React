import React from "react";
const Smile =() =>{
    return(
       <div
       style={{
        
        backgroundColor:'lightgrey',
        height:'500px',
        padding:'100px',
        width:'500px',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',


        }}>
        <h1 style={{color:'black'}}>Smile Component</h1>
        
        <p style={{alignItems:"center"}}>It is a functional component</p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSIA80zLH8AdSyn-MICNc70QLydcp-TeCHSw&s" style={{height:"400px",width:'400px'}}></img>
       </div> 
    );
};
export default Smile;
