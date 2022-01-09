import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle }) => {
    return (
        <div>
            {tasks.map((task, i) => (
                <Task key={i} task={task} onDelete={onDelete} onToggle={onToggle} />
            ))}
        </div>
    )
}

export default Tasks