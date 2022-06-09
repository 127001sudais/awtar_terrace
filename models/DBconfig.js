const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://samurai:root@cluster0.vosfa.mongodb.net/second?retryWrites=true&w=majority', { useNewUrlParser: true }, (err) => {
    if (!err) {
        console.log('Connection created.')
    }
    else {
        console.log('Connection failed: : ' + err)
    }
});

require('./emp.model');