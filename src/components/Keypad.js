// Code Keypad Component Here

function handleChange(){
    return console.log('Entering password...')
}

function Keypad (){
    return (
   <input type='password' onChange={handleChange}></input>
    
    )
}

export default Keypad;