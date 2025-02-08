//const { envs } = require('./config/env')
import  {envs} from './config/env.js'

//const { starServer, startServer } = require('./server/server')
import { startServer } from './server/server.js'

const main = () => {
    console.log(envs)
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
}


// Funcion agnostica autoconvocada
//agnostica porque no tiene nombre
//autocombocada porque la ejecutamos con los () ultimos

(async () => {
    main()
})()