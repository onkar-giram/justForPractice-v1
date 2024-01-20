const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  question_text: String,
  options: [String],
  correct_answer: String,
});

const examSchema = new mongoose.Schema({
  teacher_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  code: String,
  title: String,
  questions: [questionSchema],
  start_time: Date,
  end_time: Date,
});

module.exports = mongoose.model("Exam", examSchema);