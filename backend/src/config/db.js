import mongoose from 'mongoose';
import config from './config.js';

async function connectDB() {
    try {
        const options = {
            serverSelectionTimeoutsMS: 5000, // 5 seconds me fail ho jaye agr DNS response na kare
            socketTimeoutMS: 45000, // Inactive socket timeout
        }
        const conn = await mongoose.connect(config.DB_URL)
        console.log("MongoDB is connected 😀", conn.connection.host)
    } catch(error) {
        console.log(`❌ Error: ${error.message}`);
        process.exit(1); // server ko band kar dega agr connection fail hua
    }
}

export default connectDB;