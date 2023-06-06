import dbConnect from "@/app/backend/database/conn";
import Todos from "@/app/backend/models/todoModel";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { authMiddleware } from "../../authMiddleware";

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

        const data = await req.json()
        const url = await req.url

        const id = url.substring(url.lastIndexOf('/') + 1)

        await dbConnect();
        await Todos.findByIdAndUpdate(
            id,
            data,
            { new: true, runValidators: true }
        )

        const todoes = await Todos.find()

        return await NextResponse.json({
            data: todoes,
            message: "Todo updated sucessfully"
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

export async function DELETE(req, res) {
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

        const url = await req.url
        const id = url.substring(url.lastIndexOf('/') + 1)

        await dbConnect();
        await Todos.findByIdAndRemove(id)

        const todoes = await Todos.find()

        return await NextResponse.json({
            data: todoes,
            message: "Todo deleted sucessfully"
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