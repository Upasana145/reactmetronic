import React,{useState} from 'react'

const Practice = () => {
    // const pink = '#fhhhg';
    // const[bgcolor, changeBgcolor ] = useState(pink)
    const purple = "yellow";
    const [bg, setBg] = useState(purple);

    const[name, setName] = useState("upasana");
   const bgChange = () =>{
    //  console.log("clicked") ;
    let newBg = "pink";
    setBg(newBg);
    let newname = "Bharti";
    setName(newname);
   };


   const bgback = () =>{
    let newBg = "yellow";
    setBg(newBg);
    setName("ub");
   }

  
   return (
    <>
    {/* <div style={{backgroundColor: "red"}} > */}
    <div style={{backgroundColor: bg }} > 
      <button onMouseEnter = {bgChange}  onMouseLeave = {bgback} onClick = {bgChange} onDoubleClick={bgback}>{name}</button>
    </div> 
    </>
   
  )
}

export default Practice;
