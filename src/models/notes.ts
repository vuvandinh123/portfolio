import mongoose, { Document, Schema } from 'mongoose';

// Định nghĩa giao diện cho Blog
interface Note extends Document {
  title: string;
  description: string;
  content: string;
  authorId: number;
  date: Date;
}

// Định nghĩa lược đồ (schema)
const NoteSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  link: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

// Kiểm tra xem mô hình đã được định nghĩa chưa
const NoteModel = mongoose.models.Note || mongoose.model<Note>('Note', NoteSchema);

export default NoteModel;
