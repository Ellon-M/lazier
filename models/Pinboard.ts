import mongoose from "mongoose";

const pinboardSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.ObjectId,
      ref: 'User'
    },
    articles: {
      type: [mongoose.Schema.ObjectId],
      ref: 'Pinboard'
    }
  },
  { timestamps: true }
);

export default mongoose.models.Pinboard || mongoose.model("Pinboard", pinboardSchema);