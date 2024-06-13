const recordService = require("../services/recordService");

const getRecordForWorkout = (req, res) => {
  const { workoutId } = req.params;
  try {
    const record = recordService.getRecordForWorkout(workoutId);
    res.status(200).json(record);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};

module.exports = { getRecordForWorkout };
