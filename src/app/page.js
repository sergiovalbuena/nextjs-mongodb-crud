import { connectDB } from '@/utils/mongoose'
import Task from '@/models/Task'


async function loadTasks() {
  connectDB();
  const tasks = await Task.find();
  //console.log(tasks)
  return tasks
}

export default async function Home() {
  const tasks = await loadTasks()
  return (
    <div>HomePage

      {JSON.stringify(tasks)}

    </div>

  )
}
