
const {default: mongoose} = require('mongoose');

const connection = {}
export const connectToDb = async () => {
    try{
        if(connection.isConnected){
            console.log('already connected')
            return
        }
        const db = await mongoose.connect(process.env.MONGO);
        connection.isConnected = db.connections[0].readyState;
    }catch (err) {
      throw new Error(err)
    }
}