import { NextResponse } from 'next/server';

var jwt = require('jsonwebtoken');

export const authMiddleware = async (authHeader) => {

    const token = await authHeader.get('authorization').split(" ")[1]
    return jwt.verify(token, "todoLogin123456", (error, decoded) => {
        if (error) {
            return false
        } else {
            return decoded
        }
    })
}
