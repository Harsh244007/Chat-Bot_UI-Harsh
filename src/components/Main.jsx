
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
            width: "15vw", height: "10vh", borderRadius: "1vw", backgroundColor: "darkorange"
        ,float:"right", margin:"2vw 1vw 0vw 2vw"
        }}
            onClick={() => { setTru(!tru);
                            if(tru)
                                setTex("Show Chat Box") 
                            else
                                setTex("Hide Chat Box") 
                            

                           }}><p style={{fontSize:"2.5vw"}}>{tex}</p></button>
     </div>
        </div>
  )
}

export default Main
