import { clear } from "@testing-library/user-event/dist/clear";
import { paste } from "@testing-library/user-event/dist/paste";
import { useState } from "react";
import "./Style.css";

const State=()=>{
    const [text,settext]=useState("")
   const handle=(event)=>{
    settext(event.target.value)
   }
   const uppercase=()=>{
    settext(text.toUpperCase())
    alert("word is capital")
   }
   const lowercase=()=>{
    settext(text.toLowerCase())
    alert("word is small")
   }
   const clear=()=>{
    settext('')
    alert()
   }
   const copy=()=>{
    // navigator.clipboard.writeText(text)
    navigator.clipboard.writeText(text)
      let data=document.getElementById('text');
       data.select()
       alert ('copied')
    
   }
   const paste=()=>{
navigator.clipboard.readText().then((abc)=>{settext(text+abc)})

   }
   const cut=()=>{
    navigator.clipboard.writeText(text);
    settext('')
   }
   const extraspace=()=>{
    settext(text.replace(/\s/g,''))
   }
   const space=()=>{
    settext(text.replace(/\s+/g," "))

   }
   let a=1;
   const theme=()=>{
    if(a%4===0){
        document.getElementById("root").style.background='red';
        document.getElementById("text").style.backgroundColor='yellow';


    }
    else if(a%4===1){
        document.getElementById("root").style.background='yellow';
        document.getElementById("text").style.backgroundColor='white';
    }
    else if(a%4===2){
        document.getElementById("root").style.background='black';
        
    }
    else if(a%4===3){
        document.getElementById("root").style.background='pink';

    }
    a++;
   }
    return(
        <>
        <div id="main">
        <button onClick={theme} className="btn0 ">THEME</button>
<textarea onChange={handle} placeholder="type here....."  value={text}  rows={"20"} cols={"60"} id="text"></textarea>
<div className="btn1">
    <button onClick={uppercase} type="button" className="btn">CAPITAL</button>
    <button onClick={lowercase}type="button" className="btn">SMALL</button>
    <button onClick={clear} type="button" className="btn">CLEAR</button>

</div>
<div className="btn2">
    <button onClick={copy} className="btn">COPY</button>
    <button onClick={paste} className="btn">PASTE</button>
    <button onClick={cut} className="btn">CUT</button>

</div>
<div className="btn3">
    <button onClick={extraspace} className="btn">EXTRASPACE</button>
    <button onClick={space}className="btn">ONESPACE</button>
</div>
        </div>
        </>
    )
}
export default State
