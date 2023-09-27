import mongoose from "mongoose";

const articleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
    },
    content: {
      type: String,
      required: true,
    },  
    author: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: 'User',
    },
    pinboards: {
      type: [mongoose.Schema.ObjectId],
      ref: 'Pinboard'
    }
  },
  { timestamps: true }
);

export default mongoose.models.Article || mongoose.model("Article", articleSchema);
