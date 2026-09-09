import StatCard from "./StatCard";
import TaskCard from "./TaskCard";

function Dashboard() {
    const tasks = [
                    {id:1,
                     title:"Learn React", 
                     desc:"Understanding Components", 
                     status:"In progress"
                    },
                    {id:2,
                     title:"Learn Javascript", 
                     desc:"Understanding variables and functions", 
                     status:"Pending"
                    },
                    {id:3,
                     title:"Learn MongoDB", 
                     desc:"Understanding databases", 
                     status:"Completed"
                    }
                ];
    return (
        <main>

            <div className="stats-container">
                <StatCard title="Total Tasks" value="10" />
                <StatCard title="Completed" value="6"/>
                <StatCard title="Pending" value="4"/>
            </div>

            <h2>Recent Tasks</h2>

            <div className="tasks-container">
                {tasks.map((task)=>(
                    <TaskCard key={task.id} title={task.title} desc={task.desc} status={task.status} />
                ))};
            </div>

        </main>
    );
}

export default Dashboard;