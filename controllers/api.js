const db = require("../models");

exports.getWorkouts = (req, res) => {
  db.Workout.find()
    .then((workout) => {
      res.json(workout);
    })
    .catch((err) => {
      res.json(err);
    });
};

exports.addWorkout = async (req, res) => {
  try {
    const response = await db.Workout.create({ type: "workout" });
    res.json(response);
  } catch (err) {
    console.log("error occurred creating a workout: ", err);
  }
};

exports.updateWorkout = (req, res) => {
  const { body: newExercise, params } = req;
  const workoutId = params.id;

  // gets all the currently saved exercises in the current workout
  db.Workout.findOne({ _id: workoutId })
    .then((dbWorkout) => {
      updateWorkout([...dbWorkout.exercises, newExercise]);
    })
    .catch((err) => {
      res.json(err);
    });

  function updateWorkout(exercises) {
    db.Workout.findByIdAndUpdate(workoutId, { exercises }, function (err, doc) {
      if (err) {
        console.log(err);
      }

      res.json(doc);
    });
  }
};

exports.getRange = (req, res) => {
  db.Workout.find({})
    .then((workout) => {
      res.json(workout);
    })
    .catch((err) => {
      res.json(err);
    });
};
