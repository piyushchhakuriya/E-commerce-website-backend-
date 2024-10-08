mongoose.connect(db_config.DB_URL)
const db = mongoose.connection


db.on("error" ,()=>{
    console.log("error while connecting the mongodb")
})

db.once("open",()=>{
    console.log("connected to mongodb")
})