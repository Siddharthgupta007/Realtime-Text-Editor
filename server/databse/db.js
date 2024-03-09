import mongoose from "mongoose";


const Connection = async (username = 'doc', password = 'googledoc') => {
    const URL = `mongodb+srv://${username}:${password}@googledocsclone.vcdne1y.mongodb.net/?retryWrites=true&w=majority&appName=googleDocsClone`

    try{
       await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true});
       console.log('database is connected successfully')
    }
    catch(error){
        console.log('error While connecting with mongoose', error);
    }
}

export default Connection;