import dbConnect from "@/app/backend/database/conn";
import Todos from "@/app/backend/models/todoModel";
import { ObjectId } from "mongodb";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { authMiddleware } from "../authMiddleware";

export async function POST(req, res) {
    try {

        const authHeader = await headers()
        const getAuth = await authMiddleware(authHeader)

        if (getAuth === false) {
            return NextResponse.json({
                message: "Unauthorized"
            }, {
                status: 401
            })
        }

        const body = await req.json()

        await dbConnect();
        await Todos.create({
            ...body,
            userId: new ObjectId(body.userId)
        })

        const todoes = await Todos.find({ userId: getAuth._id })

        return await NextResponse.json({
            data: todoes,
            message: "Todo created successfully"
        }, {
            status: 200
        })

    } catch (err) {
        return NextResponse.json({
            message: err
        }, {
            status: 500
        })
    }
}

export async function GET(req, res) {
    try {

        const authHeader = headers()
        const getAuth = await authMiddleware(authHeader)

        if (getAuth === false) {
            return NextResponse.json({
                message: "Unauthorized"
            }, {
                status: 401
            })
        }

        await dbConnect();
        const todoes = await Todos.find({ userId: getAuth._id })

        return await NextResponse.json({
            data: todoes
        }, {
            status: 200
        })

    } catch (err) {
        return NextResponse.json({
            message: err
        }, {
            status: 500
        })
    }
}