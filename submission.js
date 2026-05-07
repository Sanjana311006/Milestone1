const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema({
  assignmentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Assignment"
  },
  studentName: String,
  content: String
}, { timestamps: true });

module.exports = mongoose.model("Submission", submissionSchema);