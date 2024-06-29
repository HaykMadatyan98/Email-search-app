import express, { Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const port = 3001;

const data = [
    { email: 'jim@gmail.com', number: '221122' },
    { email: 'jam@gmail.com', number: '830347' },
    { email: 'john@gmail.com', number: '221122' },
    { email: 'jams@gmail.com', number: '349425' },
    { email: 'jams@gmail.com', number: '141424' },
    { email: 'jill@gmail.com', number: '822287' },
    { email: 'jill@gmail.com', number: '822286' }
];

app.use(cors());
app.use(bodyParser.json());

app.post('/api/search', async (req: Request, res: Response) => {
    const { email, number } = req.body;

    await new Promise(resolve => setTimeout(resolve, 5000));

    const results = data.filter(item => 
        item.email === email && (!number || item.number === number.replace(/-/g, ''))
    );

    res.json(results);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
