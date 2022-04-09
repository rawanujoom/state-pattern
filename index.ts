import server from './src/server';

try {
    server.start(4500);


    // 3rd party lib
    const mongoose = require('mongoose');
    // internal modules
    const MONGODB_URI = 'mongodb://localhost:27017/state-diagram';

    mongoose.connect(MONGODB_URI);

} catch(err) {
    console.log('App Crashed !!');
    console.log(err);
}
