import React, {useEffect, useState} from "react";

// function countInitial() {
//     console.log('run function')
//     return 4
// }



function Home() {
    const[count, setCount]=useState(4)
 
   
    function decrementCount(){
        setCount(prevCount => prevCount -1)
      
    }

    function incrementCount() {
        setCount(prevCount => prevCount + 1)
    }
    useEffect(()=>{
        
    },[count])
    return (
        <>
        <button onClick={decrementCount}>-</button>
        <span>{count}</span>
        <button onClick={incrementCount}>+</button>
        
        </>
    )
    
}
export default Home;

















// const Home =()=>{
// // let name="shivam"

// const [name, setName]= useState('shivam');
// const [age, setAge] = useState(25)


// const handleClick =()=>{
//     setName('shashank')
//     setAge(28);
    
// }
//     return(
//         <div className='home'>
//         <h2>Homepage</h2>
//         <p>{name}is{age}</p>
//         <button onClick={handleClick}>Clickme</button>
//       </div>

//     );
// }
// export default Home;