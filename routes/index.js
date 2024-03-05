import express from 'express';

import userRouter from './userRouter.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('INDEX ROUTE');
});

router.use('/', userRouter);

export default router;
