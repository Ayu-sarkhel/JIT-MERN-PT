import { useState } from "react";

function AddTask(props){
    const [title, setTitle]=useState("");
    const [desc, setDesc]=useState("");

    function handleSubmit(e){
        e.preventDefault()
        const newTask={
            id:Date.now(),
            title: title,
            desc: desc,
            status: "Pending"
        }
        console.log("Object:", newTask)
        props.onAddTask(newTask);
    }

    return (
        <div>
             
            <h2>Add Task</h2>

            <form onSubmit={handleSubmit}> 
            
                <label>Add Title: </label>
                <input type="text" 
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)} 
                />

                <br /><br />

                <label>Add Description: </label>
                <input type="text"
                    value={desc}
                    onChange={(e)=>setDesc(e.target.value)}
                />

                <br /><br />

                <button type="submit">Add Task</button>
                
            </form>

        </div>
    );
}

export default AddTask;