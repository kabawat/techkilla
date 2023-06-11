import mongoose from "mongoose";
const connectDB = handler => async (req, res) => {
    if (mongoose.connections[0].readyState) {
        console.log('connect here')
        return handler(req, res)
    }
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log('connect')
        return handler(req, res)
    } catch (error) {
        console.log('error')
        return
    }

}
export default connectDB