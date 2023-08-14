import { NextResponse } from "next/server";



export function GET(request, { params }) {
    console.log(params)
    return NextResponse.json({
        message: `Returning ${params.id} Task`
    })
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

export function PUT(request, { params }) {
    return NextResponse.json({
        message: `Updating ${params.id} Task`
    })
}