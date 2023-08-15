import { NextResponse } from "next/server";
import { connectDB } from "@/utils/mongoose";
import Task from "@/models/Task";

export async function GET() {
    connectDB()
    const tasks = await Task.find()
    return NextResponse.json(tasks)
}

export async function POST(request) {
    try {
        const data = await request.json() //get info from the request
        const newTask = new Task(data) //create a new object
        const savedTask = await newTask.save() //save the object in the database
        //console.log(savedTask)
        return NextResponse.json(savedTask)
    } catch (error) {
        return NextResponse.json(error.message, {
            status: 400
        })
    }
}
