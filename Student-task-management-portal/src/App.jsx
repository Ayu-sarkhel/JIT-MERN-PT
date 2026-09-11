import "./App.css";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Dashboard from "./components/Dashboard";
import {Routes, Route} from "react-router-dom";
import TaskDetails from "./components/TaskDetails";
import Tasks from "./components/Tasks";

function App(){

  const[tasks, setTasks] = useState([
    {
        id:1,
        title:"Learn React", 
        desc:"Understanding Components", 
        status:"Completed"
    },
    {
        id:2,
        title:"Learn Javascript", 
        desc:"Understanding Variables and Functions", 
        status:"Pending"
    },
    {
        id:3,
        title:"Learn MongoDB", 
        desc:"Understanding Databases", 
        status:"Completed"
    }
  ]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard tasks={tasks} setTasks={setTasks} />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/tasks/:id" element={<TaskDetails />} />
      </Routes>
    </div>
  );
}

export default App;