import React, { useState } from "react";

function Input({ addTodos, todos }){
    const [input, setInput] = useState({ itemName: "", completed: false });

    const onChangeInput = (event) => {
        setInput({ ...input, [event.target.name] : event.target.value });
    }

    const submitInput = (event) => {
        event.preventDefault();
        addTodos([...todos ,input]);
        setInput({...input, itemName: "" });

    }


    return (
        <>
            <form onSubmit={submitInput} >
                <input type="text" className="new-todo" name="itemName" onChange={onChangeInput} value={input.itemName} placeholder="What needs to be done?"  />  
            </form>  
        </>
    
    );
}


export default Input;