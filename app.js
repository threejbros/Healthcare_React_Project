import {} from 'dotenv/config'
import express from 'express'
import bodyParser from 'body-parser'
import router from './routes/routes.js'
import connectDB from './db/connect.js'

const app = express();

// Specifically set the public folder as the static folder
app.use(express.static('public'));

// Without this middleware, we would not be able to decipher the 
// data being sent to Node.js from an application. 
app.use(bodyParser.json());

app.use("/", router);

const PORT = process.env.PORT || 5000;

const init = async() => {
    try {
        await connectDB(process.env.DB);
        console.log("Connected to the database...");

        app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
    }
    catch (err) {
        console.log(err);
    }
};

init();
