import express from 'express';
import Post from '../models/post.js';

const postRouter = express.Router();

//? --------------------------------------------------------------------------------
//? GET ALL
//? --------------------------------------------------------------------------------

postRouter.get('/posts', async (req, res) => {
    try {
        const posts = await Post.find().populate('author', 'first_name last_name');

        //! NOT FIND BUT EMPTY
        if (posts.length === 0) return res.json({ message: 'Aucun post existant.' });

        //* SUCCESS
        return res.json(posts);

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

//? --------------------------------------------------------------------------------
//? GET BY ID
//? --------------------------------------------------------------------------------

postRouter.get('/posts/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const post = await Post.findById(id).populate('author');

        //! NOT FIND
        if (!post) return res.json({ message: 'Post non existant.' });

        //* SUCCESS
        return res.json(post);

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

//? --------------------------------------------------------------------------------
//? CREATE A POST
//? --------------------------------------------------------------------------------

postRouter.post('/posts', async (req, res) => {
    try {
        const newPost = await Post.create(req.body);


        //* SUCCESS
        return res.status(201).json(newPost);

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

//? --------------------------------------------------------------------------------
//? UPDATE A POST
//? --------------------------------------------------------------------------------

postRouter.put('/posts/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedPost = await Post.findByIdAndUpdate(id, req.body, { new: true });

        //! NOT FIND
        if (!updatedPost) return res.json({ message: 'Post non existant.' });

        //* SUCCESS
        return res.json(updatedPost);

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

//? --------------------------------------------------------------------------------
//? DELETE A POST
//? --------------------------------------------------------------------------------

postRouter.delete('/posts/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const deletedPost = await Post.findByIdAndDelete(id);

        //! NOT FIND
        if (!deletedPost) return res.json({ message: 'Post non existant.' });

        //* SUCCESS
        return res.json({ message: 'Post supprimé.', deletedPost });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default postRouter;
