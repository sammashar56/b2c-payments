import dotenv from "dotenv";
import process from "process";

let env = process.env.ENV;

dotenv.config();

const Configuration = {

    mpesa: {
        client_key: process.env.CONSUMER_KEY,
        client_secret: process.env.CONSUMER_SECRET,
        ShortCode: process.env.shortcode
    }
}

export default Configuration; 