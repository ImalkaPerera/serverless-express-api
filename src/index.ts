import { httpServerHandler } from 'cloudflare:node';
import express, { Request, Response } from 'express';

const app = express();

// Basic Middleware
app.use(express.json());

// Routes
app.get('/', (req: Request, res: Response) => {
	res.send('Cloudflare Workers + Express + TypeScript = 🚀');
});

app.get('/api/data', (req: Request, res: Response) => {
	res.json({
		message: "This is your backend speaking",
		timestamp: new Date().toISOString()
	});
});

// The magic bridge that connects Express to the Worker environment
const PORT = 3000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});

export default httpServerHandler({ port: PORT });
