import express from 'express';
const app = express();
console.log('Server started on port 3000');

app.get("/",function(request:express.Request,responce:express.Response) {
    responce.send('Hello world');
})
app.listen(3000);