import * as React from 'react'
import "./Bot.css"

export default function Bot() {
   
    return (
        <div style={{
            float: "right", margin: "2vw 1vw 0vw 2vw", display: "block", height: "40vw", width: "50vw", color:"black"}}>
            <div style={{
                backgroundColor: 'darkorange', height: "100%",
               border: "1px solid grey",
                borderRadius: "3vw 3vw 0vw 0vw"
            }}>
                
                <div style={{padding:"5vw 10vw 10vw 10vw",justifyContent:"center",alignItems:"center",}}>
                    <p style={{fontSize:"3.2vw"}}>IRIS</p>
                    <p style={{fontSize:"2.3vw"}}>Hello 👋</p>
                    <p style={{fontSize:"2.3vw"}}>I am Iris, a Virtual Assitant</p>
                    <p style={{fontSize:"2.3vw"}}>How may I help you?</p>
          </div>
             <div className='harsh'>
                    <div><img className='imageh' src={"https://www.svgrepo.com/show/91857/robot.svg"} alt="" /></div>
                    <div className='ha'>
                        <p className='hap'>Frequently Asked Questions ?</p>
                        <button className="buttn"><p>Can i redeem my FB before the original term?</p></button>
                        <button className="buttn"><p>How do I pat my Credit card bill?</p></button>
                        <button className="buttn"><p> How can I get my Account Statement? </p></button>
                        <button className="buttn"><p>What is the tenure of Fixed Deposit?</p></button>
                        <button className='final'><p>Start a New Conversation</p></button>
                </div>
                
                </div> 
            </div>
            
            <div style={{
                // zIndex:"0",
                backgroundColor: 'white', height: "45vw",
                border: "1px solid grey",
                borderRadius: "0vw 0vw 3vw 3vw"
            }}>
          
              
</div>
    </div>
  );
}
