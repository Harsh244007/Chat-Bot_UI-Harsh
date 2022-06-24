
import React, { useState } from 'react'
import Bot from './Bot'

const Main = () => {
    const [tru, setTru] = useState(true)
    return (<div style={{display:"flex"}}>
        <div>
           {tru?<Bot />:""}
        </div>
        <div>
            <button style={{
            width: "15vw", height: "10vh", borderRadius: "1vw", backgroundColor: "darkorange"
        ,float:"right", margin:"2vw 1vw 0vw 2vw"
        }}
            onClick={() => { setTru(!tru); }}><p style={{fontSize:"2.5vw"}}>ChatBox</p></button>
     </div>
        </div>
  )
}

export default Main