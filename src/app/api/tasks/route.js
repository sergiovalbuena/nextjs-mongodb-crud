import { NextResponse } from "next/server";

export function GET() {
    return NextResponse.json({ message: "Enviando Tasks" })
}

export function POST() {
    return NextResponse.json({
        message: "Obteniendo Tasks"
    })
}
