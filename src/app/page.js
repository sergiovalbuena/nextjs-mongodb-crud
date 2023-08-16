import { connectDB } from '@/utils/mongoose'
import Task from '@/models/Task'
import TaskCard from '@/components/TaskCard';
import ColorDropdown from '@/components/ColorDropdown';


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


      <div>
        <div className='peer/name group/other-name grid place-items-center h-20 w-20 bg-blue-400 hover:bg-purple-400 transition-colors duration-300 ease-in-out delay-300'>
          <div className='h-5 w-5 bg-black group-hover/other-name:bg-blue-400 transition-colors duration-300 ease-in-out delay-300 group-hover/other-name:animate-ping'></div>
          <div className='h-5 w-5 bg-black group-hover/other-name:bg-green-400 group-hover/other-name:animate-pulse'></div>
        </div>
        <div className='h-20 w-20 grid place-items-center bg-green-400 peer-hover/name:bg-orange-500 transition-colors duration-300 ease-in-out delay-300'>
          <div className='h-5 w-5 bg-black peer-hover/name:bg-blue-400 transition-colors duration-300 ease-in-out delay-300 peer-hover/name:animate-spin'></div>
          <div className='h-5 w-5 bg-black peer-hover/name:bg-green-400 peer-hover/name:animate-bounce'></div>
        </div>
      </div>


      <div className='grid grid-cols-2 gap-10 p-5 sm:grid-cols-3'>
        <div className='w-full aspect-video bg-purple-400'></div>
        <div className='w-full aspect-video bg-purple-400'></div>
        <div className='w-full aspect-video bg-purple-400'></div>
        <div className='w-full aspect-video bg-purple-400'></div>
        <div className='w-full aspect-video bg-purple-400'></div>
        <div className='w-full aspect-video bg-purple-400'></div>
      </div>

      <div>
        <ColorDropdown />
      </div>


    </div>

  )
}
