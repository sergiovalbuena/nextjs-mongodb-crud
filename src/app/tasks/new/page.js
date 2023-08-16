"use client"
import { useRouter } from "next/navigation"
import { useState } from "react"


export default function FormPage() {

    const [newTask, setNewTask] = useState({
        title: '',
        description: '',
    })


    const router = useRouter()

    const createTask = async () => {
        try {
            const res = await fetch('/api/tasks', {
                method: 'POST',
                body: JSON.stringify(newTask),
                //body: JSON.stringify({ }), //to test error
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const data = await res.json()

            if (res.status === 200) {
                router.push('/')
                //router.refresh()
            }

            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }


    const handleSumbit = async (e) => {
        e.preventDefault()
        //console.log(newTask)
        await createTask()
    }

    //const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const handleChange = (e) => {
        // console.log(e.target.value)
        // console.log(e.target.name)
        setNewTask({ ...newTask, [e.target.name]: e.target.value })
    }



    return (
        <div className="h-[calc(100vh-7rem)] flex justify-center items-cneter">
            <h1 className="font-bold text-3xl">Create Task</h1>
            <form onSubmit={handleSumbit}>
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    className="bg-gray-800 border-2 w-full p-4 rounded-lg my-4"
                    onChange={handleChange}
                />
                <textarea
                    name="description"
                    placeholder="Description"
                    rows={3}
                    className="bg-gray-800 border-2 w-full p-4 rounded-lg my-4"
                    onChange={handleChange}
                />
                <button
                    className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg"
                >Save</button>


            </form>
        </div>
    )
}