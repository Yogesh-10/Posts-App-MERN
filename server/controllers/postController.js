import mongoose from 'mongoose'
import PostMessage from '../models/postMessageModel.js'

const getPosts = async (req, res) => {
	try {
		const postMessages = await PostMessage.find()

		res.status(200).json(postMessages)
	} catch (error) {
		res.status(404).json({ error: error.message })
	}
}

const createPost = async (req, res) => {
	const body = req.body

	const newPost = new PostMessage(body)

	try {
		await newPost.save()

		res.status(201).json(newPost)
	} catch (err) {
		res.status(409).json({ message: err.message })
	}
}

const updatePost = async (req, res) => {
	const { id: _id } = req.params
	const post = req.body

	if (!mongoose.Types.ObjectId.isValid(_id))
		return res.status(404).send(`No post with id: ${_id}`)

	// const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

	const updatedPost = await PostMessage.findByIdAndUpdate(
		_id,
		{ ...post, _id },
		{
			new: true,
		}
	)

	res.json(updatedPost)
}

const deletePost = async (req, res) => {
	const { id } = req.params

	if (!mongoose.Types.ObjectId.isValid(id))
		return res.status(404).send(`No post with id: ${id}`)

	await PostMessage.findByIdAndRemove(id)

	res.json({ message: 'Post deleted successfully.' })
}

const likePost = async (req, res) => {
	const { id } = req.params

	if (!mongoose.Types.ObjectId.isValid(id))
		return res.status(404).send(`No post with id: ${id}`)

	const post = await PostMessage.findById(id)

	const updatedPost = await PostMessage.findByIdAndUpdate(
		id,
		{ likeCount: post.likeCount + 1 },
		{ new: true }
	)

	res.json(updatedPost)
}

export { getPosts, createPost, updatePost, deletePost, likePost }
