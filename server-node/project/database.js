import mongoose from "mongoose";

// Replace the uri string with your connection string.
const uriCloud =
"mongodb+srv://hrwnwbyzt:ZrVvoLFPHvC4kZwI@cluster0.kgorckj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const uriLocal ="mongodb://localhost:27017/tasks_db"
  

const uriUsing=uriCloud
const connectDB = async () => {
  await mongoose.connect(uriUsing);
};
const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error);
})

database.once('connected', () => {
  console.log('Database Connected');
})
mongoose.set('toJSON', {
  versionKey: false,
    virtuals: true,
    transform: (doc, converted) => {
      converted.id = converted._id;
      delete converted._id;
    }
  });
  
export default connectDB;
