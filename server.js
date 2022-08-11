const express = require('express');
const app = express();

app.get('/', (req, res) => {res.send('Hello User');});
app.get('/sgIndex', async (req, res) => {res.send("Scrap Guilds Item Collection");})
app.get('/sgIndex/:id', async (req, res) => {
const id = req.params.id;
try {
	const sgItem = await getSGItem(id);
	res.json(sgItem);
} catch (error) 
	{
		console.error(err);
		res.status(500).json({err: "Something went horribly wrong!"});
	}
});
const port = 8080;

app.listen(port, () => {
console.log('listening on port port')
})