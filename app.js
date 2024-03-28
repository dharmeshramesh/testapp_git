import express from 'express'

const app=express()

const port =process.env.port || 8080

app.listen(port,()=>{
    console.log("********** App is listening at port $(port **********)")
})