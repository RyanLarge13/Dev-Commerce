import mongoose from "mongoose";

const testimonialSchema = mongoose.Schema(
  {
    User: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
    },
    Quote: {
      type: String,
      required: true,
    },
    UsedFor: {
      type: [String],
    },
  },
  { timestamps: true }
);

export const Testimonials = mongoose.model("Testimonials", testimonialSchema);
