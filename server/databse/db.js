import mongoose from "mongoose";


const Connection = async (URL) => {
    // const URL = `mongodb+srv://doc:googledoc@googledocsclone.vcdne1y.mongodb.net/?retryWrites=true&w=majority&appName=googleDocsClone`

    try{
       await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true});
       console.log('database is connected successfully')
    }
    catch(error){
        console.log('error While connecting with mongoose', error);
    }
}

export default Connection;