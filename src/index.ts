import express from 'express';
const app = express();

app.get("/",function(request:express.Request,responce:express.Response) {
    responce.send('Hello world');
})
app.listen(3000);
console.log('Server started on port 3000');