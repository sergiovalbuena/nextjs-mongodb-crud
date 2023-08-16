"use client"
import { useRouter, useParams } from "next/navigation"
import { ChangeEvent, FormEvent, useEffect, useState } from "react"


export default function FormPage() {

    const [newTask, setNewTask] = useState({
        title: '',
        description: '',
    })


    const router = useRouter()
    const params = useParams()

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
                router.refresh()
            }

            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }


    const handleDelete = async () => {
        //console.log("deleting")
        try {
            if (window.confirm("Are you sure you want to delete it?")) {
                const res = await fetch(`/api/tasks/${params.id}`, {
                    method: 'DELETE',
                })
                router.push('/')
                router.refresh()
            }
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

    //get task by id
    useEffect(() => {
        console.log(params)
    })


    return (
        <div className="h-[calc(100vh-7rem)] flex justify-center items-cneter">
            <form onSubmit={handleSumbit}>

                <header className="flex justify-between">


                    <h1 className="font-bold text-3xl">
                        {
                            !params.id ? "Create Task" : " Update Task"
                        }
                    </h1>

                    <button
                        type="button"
                        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg"
                        onClick={handleDelete}>
                        Delete
                    </button>
                </header>
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
                    type="submit"
                    className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg"
                >Save</button>


            </form>
        </div>
    )
}