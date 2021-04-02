import * as api from '../api/index.js'

const getPosts = () => async (dispatch) => {
	try {
		const { data } = await api.fetchPosts()

		dispatch({
			type: 'FETCH_ALL',
			payload: data,
		})
	} catch (err) {
		console.log(err.message)
	}
}

const createPost = (post) => async (dispatch) => {
	try {
		const { data } = await api.createPost(post)

		dispatch({
			type: 'CREATE',
			payload: data,
		})
	} catch (err) {
		console.log(err.message)
	}
}

const updatePost = (id, post) => async (dispatch) => {
	try {
		const { data } = await api.updatePost(id, post)

		dispatch({ type: 'UPDATE', payload: data })
	} catch (err) {
		console.log(err.message)
	}
}

const deletePost = (id) => async (dispatch) => {
	try {
		await api.deletePost(id)

		dispatch({ type: 'DELETE', payload: id })
	} catch (error) {
		console.log(error.message)
	}
}

const likePost = (id) => async (dispatch) => {
	try {
		const { data } = await api.likePost(id)

		dispatch({ type: 'LIKE', payload: data })
	} catch (err) {
		console.log(err.message)
	}
}
export { getPosts, createPost, updatePost, deletePost, likePost }
