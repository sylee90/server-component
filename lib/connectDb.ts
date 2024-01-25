import mongoose, { Mongoose } from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI || MONGODB_URI.length === 0) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

declare global {
    var mongoose: {
      promise: Promise<Mongoose> | null;
      conn: Mongoose | null;
    };
}

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

async function connectDb() {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
            useNewUrlParser: true
        };

        cached.promise = mongoose.connect(MONGODB_URI!, opts).then(mongoose => {
            return mongoose;
        });
    }
    cached.conn = await cached.promise;
    return cached.conn;
}

export default connectDb;
