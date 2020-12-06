import dotenv from 'dotenv';
import connectDB from './config/db.js';
import users from './data/users.js';
import Quiz from './models/quizModel.js';
import User from './models/userModel.js';
import questions from './data/quizData.js';

dotenv.config();
connectDB();

const importData = async () => {
    try {
        await User.deleteMany();
        await Quiz.deleteMany();
        await User.insertMany(users); 
    const sampleQuiz = questions.map(item => {
        return { ...item}
    });
        await Quiz.insertMany(sampleQuiz);
        console.log('Data imported');
        process.exit()
    } catch (error) {
        console.error(`${error}`)
        process.exit(1);
    }
}
const destroyData = async () => {
    try {
        await User.deleteMany();
        await Quiz.deleteMany();
        console.log('Data Destroyed');
        process.exit()
    } catch (error) {
        console.error(`${error}`)
        process.exit(1);
    }
}

if (process.argv[2] === '-d') {
    destroyData();
} else {
    importData();
}