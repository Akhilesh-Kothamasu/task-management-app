const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const taskRoutes = require('./routes/tasks');

app.use(express.json());
app.use(cors());

// MongoDB connection URL
const url = 'mongodb+srv://jayaramgangireddla:jayaram@cluster0.ydpzi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';


// Connect to MongoDB
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Connection error', error);
});

app.use('/tasks', taskRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});



