import mongoose from 'mongoose'

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI, {
			useCreateIndex: true,
			useFindAndModify: true,
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		console.log(`MongoDB connected ${conn.connection.host}`)
	} catch (err) {
		console.log(err.message)
	}
}

export default connectDB
