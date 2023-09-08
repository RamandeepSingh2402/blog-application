import mongoose from "mongoose";


const Connection = async  (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@blog-app.fgetplj.mongodb.net/?retryWrites=true&w=majority`;
    try {
        // connecting with MongoDB and deprecating the old parser 
       await mongoose.connect(URL, { useNewUrlParser: true } );
       console.log("Database connected successfully");
    }
    catch(error) {
        console.log("Error while connecting with the database ", error);
    }
}

export default Connection;