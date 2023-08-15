import { NextResponse } from "next/server";
import { connectDB } from "@/utils/mongoose";
import Task from '@/models/Task'


export async function GET(request, { params }) {
    try {
        connectDB()
        //Task.findOne({ _id: params.id })
        const taskFound = await Task.findById(params.id)

        if (!taskFound)
            return NextResponse.json({
                message: "Task no Found",
            }, { status: 404 })

        return NextResponse.json(taskFound)
    } catch (error) {
        return NextResponse.json(error.message,
            { status: 400 }
        )
    }

}

export function POST(request, { params }) {
    return NextResponse.json({
        message: `Creating ${params.id} Task`
    })
}

export function DELETE(request, { params }) {
    return NextResponse.json({
        message: `Deleting ${params.id} Task`
    })
}

export async function PUT(request, { params }) {
    try {
        const data = await request.json()
        console.log(data)
        const taskUpdated = await Task.findByIdAndUpdate(params.id, data,
            { new: true })

        return NextResponse.json(taskUpdated)
    } catch (error) {
        return NextResponse.json(error.message, { status: 400 })
    }

}