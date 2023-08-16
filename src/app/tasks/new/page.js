"use client"
import { useState } from "react"

export default function FormPage() {

    const [newTask, setNewTask] = useState({
        title: '',
        description: '',
    })


    const handleSumbit = async (e) => {
        e.preventDefault()
        console.log(newTask)

        const res = await fetch('/api/tasks', {
            method: 'POST',
            body: JSON.stringify(newTask)
        })
        console.log(res)
    }

    //const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const handleChange = (e) => {
        // console.log(e.target.value)
        // console.log(e.target.name)
        setNewTask({ ...newTask, [e.target.name]: e.target.value })
    }



    return (
        <div className="h-[calc(100vh-7rem)] flex justify-center items-cneter">
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