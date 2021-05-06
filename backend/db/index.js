const mongoose = require('mongoose');
// da se implementira config file

const host = config.dasekreira;
const port = config.dasekreira;
const username = config.dasekreira;
const password = config.dasekreira;
const dbname = config.dasekreira;

let DSN = `mongodb+srv://${username}:${password}@${host}/${dbname}?retryWrites=true&w=majority`;

mongoose.connect(DSN, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}, err => {
    if(err) {
        return console.log('Could not connect to DB: ', err);
    }
    console.log('DB connected successfully');
});
