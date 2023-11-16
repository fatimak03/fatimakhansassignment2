// Define a Mongoose schema and model for workouts
const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
  name: String,
  duration: Number,
  date: Date
});

const Workout = mongoose.model('Workout', workoutSchema);

// Define a route to add a workout
app.post('/add-workout', async (req, res) => {
  try {
    const newWorkout = new Workout(req.body);
    await newWorkout.save();
    res.status(201).send('Workout added');
  } catch (err) {
    res.status(400).send('Error adding workout');
  }
});

