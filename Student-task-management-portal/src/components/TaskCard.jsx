function TaskCard(prop) {
    return (
        <div className="task-card">
            <h3>{prop.title}</h3>

            <p>{prop.desc}</p>

            <p>{prop.status}</p>
        </div>
    );
}

export default TaskCard;