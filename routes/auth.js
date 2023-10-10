import express from 'express';
const router = express.Router();


router.get('/', (req, res) => {
    const obj = {
        name: 'Nilesh kumar Choudhary',
        rollNumber: 15,
        branch: 'CS'
    }
    res.json(obj);
})

router.get('/login', (req, res) => {
    res.send("Hello, world!")
})


export default router;