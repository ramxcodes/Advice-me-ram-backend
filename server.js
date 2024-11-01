import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './db/connectDB.js';
import adviceRoutes from './routes/advice.routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.use('/', adviceRoutes); 

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});
