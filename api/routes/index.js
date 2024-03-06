import express from 'express';
import userRouter from './userRouter.js';
import postRouter from './postRouter.js';

const router = express.Router();

// Index route
router.get('/', (req, res) => {
    res.send('INDEX ROUTE');
});

// User routes
router.use('/', userRouter);

// Post routes
router.use('/', postRouter);

export default router;
