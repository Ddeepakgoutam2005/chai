
// import mongoose from "mongoose";

// const connectDb = async () => {
//         try {
//             const conn = await mongoose.connect(process.env.MONGO_URI, {
//                 useNewUrlParser: true,
//             });
//             console.log(`MongoDB Connected: ${conn.connection.host}`);
//             return conn;
            
//         } catch (error) {
//             console.error(error.message);
//             process.exit(1);
//         }
//     }

//   export default connectDb;




import mongoose from "mongoose";

const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            socketTimeoutMS: 45000, // ✅ Increases timeout to prevent buffering issues
            serverSelectionTimeoutMS: 5000, // ✅ Ensures MongoDB server is available
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
        return conn;
    } catch (error) {
        console.error("MongoDB Connection Error:", error.message);
        process.exit(1);
    }
}

export default connectDb;
