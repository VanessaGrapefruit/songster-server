import {Collection, MongoClient} from 'mongodb';


const url = `mongodb+srv://Ilya:mongo12345@cluster0.fsbsa.mongodb.net/StartUp?retryWrites=true&w=majority`;
const dbName = 'StartUp';
const collectioName = 'song';


const getMongoInstance = async () => {
    const client = await MongoClient.connect(url);

    return client.db(dbName);
}

const getCollection = async (): Promise<Collection> => {
    const db = await getMongoInstance();

    return db.collection(collectioName);
}

const create = async (item) => {
    const collection = await getCollection();

    const response = await  collection.insertOne(item);

    return response.ops[0];
};


export {
    create
}