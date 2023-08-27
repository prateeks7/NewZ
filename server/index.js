import express from 'express';
import * as dotenv from 'dotenv';
import newzRoutes from './routes/newzRoutes.js'
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api/v1/newz',newzRoutes);

app.get('/', async (req,res)=>{
    res.send("Get App");
});

app.listen(2000);