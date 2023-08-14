import { connect, connection } from "mongoose";

const { MONGODB_URI } = process.env;

if (!MONGODB_URI) {
    throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}

const conn = {
    isConnected: false
}

export async function connectDB() {

    if (conn.isConnected) return //abvoid multple connection to  DB

    try {
        const db = await connect(MONGODB_URI);
        console.log(db.connection.db.databaseName)
        conn.isConnected = db.connections[0].readyState
        console.log(`Mongoose connection state: ${conn.isConnected}`);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error;
    }
}

connection.on('connected', () => {
    console.log('Mongoose is connected')
})

connection.on('error', (err) => {
    console.log('Mongoose connection error: ', err)
})