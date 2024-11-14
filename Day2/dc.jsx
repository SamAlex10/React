import React from "react";
const Carlocation = () =>{
   return(
    <div 
    style={{
        height:'700px',
        width:'700px',
        display:'flex',
        backgroundColor:'lightgrey',
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
    }}>
        <h1>Car and Location Info</h1>
        <img src='https://cdn.euroncap.com/media/72827/tesla-model-s.png' 
        style={{height:'300px',
            width:'600px',
            padding:'10px'
        }}></img>
        <h3 
        style={{
            position: 'absolute',
            color:'black',
            top:'100px',
            transform: 'translate('-50%', '-50%')',
            
            padding: '0.5rem',
            textAlign: 'center',
            fontSize: '16px'
        }}>Tesla Model S</h3>
        <br></br>
        <br></br>
        <div
        style={{
            backgroundColor:'white',
            padding:'10px',
            height:'100px',
            width:'600px',
            alignItems:'center',
            textAlign:'center',
            top:'150px'
        }}
        >
            <h3 style={{alignContent:'center'}}>
                Tesla
            </h3>
            <p>Palo Alto</p>
        </div>

    </div>
   );
};
export default Carlocation;
