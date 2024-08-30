import mongoose, { Document, Schema } from 'mongoose';

// Định nghĩa giao diện cho Blog
interface Blog extends Document {
  title: string;
  description: string;
  content: string;
  authorId: number;
  date: Date;
}

// Định nghĩa lược đồ (schema)
const BlogSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  content: { type: String, required: true },
  authorId: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

// Kiểm tra xem mô hình đã được định nghĩa chưa
const BlogModel = mongoose.models.Blog || mongoose.model<Blog>('Blog', BlogSchema);

export default BlogModel;
