const API = {
  async getLastWorkout() {
    let res;
    try {
      res = await fetch("/api/workouts");
    } catch (err) {
      console.log(err);
    }
    const json = await res.json();
    const workout = json[json.length - 1];
    workout.totalDuration = workout.exercises.reduce(
      (totalDuration, { duration }) => duration + totalDuration,
      0
    );
    return workout;
  },
  async addExercise(data) {
    const id = location.search.split("=")[1];

    const res = await fetch("/api/workouts/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const json = await res.json();

    return json;
  },
  async createWorkout(data = {}) {
    const res = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });

    const json = await res.json();

    return json;
  },

  async getWorkoutsInRange() {
    const res = await fetch(`/api/workouts/range`);
    const json = await res.json();
    json.forEach((workout) => {
      workout.totalDuration = workout.exercises.reduce(
        (totalDuration, { duration }) => duration + totalDuration,
        0
      );
    });
    return json;
  },
};
