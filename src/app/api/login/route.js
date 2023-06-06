import dbConnect from "@/app/backend/database/conn";
import User from "@/app/backend/models/userModel";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs';
var jwt = require('jsonwebtoken');

export async function POST(req, res) {
    try {
        const body = await req.json()
        await dbConnect();
        const existingUser = await User.findOne({ email: body.email });

        if (existingUser) {
            const validPass = await bcrypt.compare(body.password, existingUser.password)
            const userData = existingUser.toJSON()
            if (validPass) {
                var token = await jwt.sign(userData, 'todoLogin123456', {
                    expiresIn: "24h"
                });
                return NextResponse.json({
                    message: 'Login Sucessfull.',
                    token
                }, {
                    status: 200
                })
            } else {
                return NextResponse.json({
                    message: 'Invalid Credencials.',
                }, {
                    status: 401
                })
            }
        } else {
            return NextResponse.json({
                message: 'Invalid Credencials.',
            }, {
                status: 401
            })
        }

    } catch (err) {
        return NextResponse.json({
            message: "Error : " + err
        }, {
            status: 500
        })
    }
}