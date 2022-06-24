
import React, { useState } from 'react'
import Bot from './Bot'
import "./Bot.css"
const Main = () => {
    const [tru, setTru] = useState(false)
    const [tex, setTex]= useState("Show Chat Box") 
    return (<div className='home' style={{display:"flex"}}>
        <div>
           {tru?<Bot />:""}
        </div>
        <div>
            <button style={{
            width: "10vw", height: "3vw", borderRadius: "1vw", backgroundColor: "darkorange",fontSize:"0.1vw"
        ,float:"right", margin:"0.5vw 1vw 0vw 1vw"
        }}
            onClick={() => { setTru(!tru);
                            if(tru)
                                setTex("Show Chat Box") 
                            else
                                setTex("Hide Chat Box ") 
                            

                           }}><p style={{fontSize:"1.3vw"}}>{tex}</p></button>
     </div>
        </div>
  )
}

export default Main
