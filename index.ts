import server from './src/server';
import mongoose from 'mongoose';
import 'dotenv/config';

try {
    server.start();
    mongoose.connect(process.env.MONGODB_URI || '');

} catch(err) {
    console.log('App Crashed !!');
    console.log(err);
}
