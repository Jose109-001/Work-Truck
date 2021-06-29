const express = require("express");
const router = express.Router();
const {
    getWorkouts,
    addWorkout,
    updateWorkout,
    getRange
} = require("../controllers/api")

router.get("/workouts", getWorkouts);

router.post("/workouts", addWorkout);

router.put("/workouts/:id", updateWorkout);

router.get("/workouts/range", getRange);

module.exports = router;
