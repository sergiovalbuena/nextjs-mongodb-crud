import { connectDB } from '@/utils/mongoose'
import Task from '@/models/Task'
import TaskCard from '@/components/TaskCard';


async function loadTasks() {
  connectDB();
  const tasks = await Task.find();
  //console.log(tasks)
  return tasks
}

export default async function Home() {
  const tasks = await loadTasks()
  return (
    <div>
      <h1>
        HomePage
      </h1>

      <div className='grid grid-cols-3 gap-2'>
        {
          tasks.map((task) => (
            <TaskCard task={task} key={task._id} />
          ))
        }
      </div>

    </div>

  )
}
