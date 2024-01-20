const mongoose = require("mongoose");

const answerSchema = new mongoose.Schema({
  question_index: Number,
  selected_option: String,
});

const examResultSchema = new mongoose.Schema({
  student_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  exam_id: { type: mongoose.Schema.Types.ObjectId, ref: "Exam" },
  answers: [answerSchema],
  score: Number,
  timestamp: Date,
});

module.exports = mongoose.model("ExamResult", examResultSchema);