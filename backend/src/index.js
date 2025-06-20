import app from './app.js'
import {connectdb} from './db.js';
//
//Here we call the app who has all the controllers and routers etc configuration
//
try {
    connectdb()
    app.listen(3000);
    console.log('>>>>>Server on port 3000')
} catch (error) {
    console.log(error)
}