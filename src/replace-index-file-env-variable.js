const fs = require('fs');
const dotenv = require('dotenv');

dotenv.config();

let index = fs.readFileSync(`${__dirname}/../src/index.html`, 'utf-8');

index = index.replace(/__DOMAIN__/, process.env.DOMAIN);
index = index.replace(/__USERPOOL_ID__/, process.env.USERPOOL_ID);
index = index.replace(/__CLIENT_ID__/, process.env.CLIENT_ID);
fs.writeFileSync(`${__dirname}/../public/index.html`, index);