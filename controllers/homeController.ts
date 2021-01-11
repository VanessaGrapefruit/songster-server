import express from 'express';

export function hello(request: express.Request,responce: express.Response) {
    responce.send('Hello world');
}