import express from 'express';
import userRouter from './userRouter.js';

const router = express.Router();

// Index route
router.get('/', (req, res) => {
    res.send('INDEX ROUTE');
});

// User routes
router.use('/', userRouter);

export default router;
