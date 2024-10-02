import express,{ urlencoded }  from "express"
import * as dotenv  from "dotenv"
import cors from "cors"
import { authRoute } from "./routes/authRoute"

 import  swaggerUI from "swagger-ui-express"

 import swaggerDocument from "../swagger.json"

dotenv.config()
const app  =   express()

const port =  process.env.PORT||3000

app.use( express.json())
app.use(cors())
app.use(urlencoded({extended:true}))

app.use('/api/auth',authRoute);



app.use('/api/docs',swaggerUI.serve,swaggerUI.setup(swaggerDocument) )




app.listen(port , ()=>{

    console.log(` servidor rodando em http://localhost:${port}`)
    
    
    })
    