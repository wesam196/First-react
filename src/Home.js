import { useState } from "react";



function Home(){

    var [name , setName] = useState('Wesam');  
    var [age, setAge] = useState(23);
    var [counter, setCounter] = useState(0);
    var [value , setValue] = useState(1);

    function increament(i){
        i+=value;
        setCounter(i);
    }

    function decreament(i){
        i-=value;
        setCounter(i);
    }

    function size(){
        var x  = document.getElementById('value').value;
        setValue(parseInt(x));
    }

    return(
        <div>
        <h1 className="Home">here is home content</h1>

            <p>My name is : {name}</p>
            <p>I am {age} years old</p>

            <br /><br /><br />

            <p>conter {counter}</p>
            <button onClick={function second(){
                increament(counter)
            }}>increament</button>

            <button onClick={function second(){
                decreament(counter)
            }}>decreament</button>
            <br /><br />
            <label htmlFor="countSize">chage value</label>
            <input type="number" id="value" defaultValue={1} />
            <button onClick={size}>change size</button>
            
            </div>
    );
}


export default Home;