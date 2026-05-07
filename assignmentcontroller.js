const Assignment = require("../models/Assignment");

// CREATE
exports.createAssignment = async (req, res) => {
  try {
    const assignment = await Assignment.create(req.body);
    res.json(assignment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET ALL
exports.getAssignments = async (req, res) => {
  const assignments = await Assignment.find();
  res.json(assignments);
};

// GET ONE
exports.getAssignmentById = async (req, res) => {
  const assignment = await Assignment.findById(req.params.id);
  res.json(assignment);
};

// UPDATE
exports.updateAssignment = async (req, res) => {
  const updated = await Assignment.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
};

// DELETE
exports.deleteAssignment = async (req, res) => {
  await Assignment.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};