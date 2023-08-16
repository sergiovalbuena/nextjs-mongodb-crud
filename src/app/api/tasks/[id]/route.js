import Task from '@/models/Task'
import { NextResponse } from "next/server";
import { connectDB } from "@/utils/mongoose";


export async function GET(request, { params }) {
    connectDB()
    try {
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

// export function POST(request, { params }) {
//     return NextResponse.json({
//         message: `Creating ${params.id} Task`
//     })
// }

export async function DELETE(request, { params }) {
    connectDB()
    try {
        const taskDeleted = await Task.findByIdAndDelete(params.id)

        if (!taskDeleted)
            return NextResponse.json({
                message: "Task not found",
            }, {
                status: 404
            })
        return NextResponse.json(taskDeleted)
    } catch (error) {
        return NextResponse.json(error.message, { status: 400 })
    }
}

export async function PUT(request, { params }) {
    const body = await request.json()
    connectDB()
    const data = await request.json()

    try {
        console.log(data)
        const taskUpdated = await Task.findByIdAndUpdate(params.id, data,
            { new: true }

        )

        if (!taskUpdated)
            return NextResponse.json(
                {
                    message: "Task not found",
                },
                {
                    status: 404,
                }
            );

        return NextResponse.json(taskUpdated)
    } catch (error) {
        return NextResponse.json(error.message, { status: 400 })
    }

}