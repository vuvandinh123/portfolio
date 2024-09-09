import mongoose, { Document, Schema } from 'mongoose';

// Định nghĩa giao diện cho user
interface User extends Document {
  email: string;
  password: string;
  name: string;
  date: Date;
}

// Định nghĩa lược đồ (schema)
const UserSchema: Schema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

// Kiểm tra xem mô hình đã được định nghĩa chưa
const UserModel = mongoose.models.Users || mongoose.model<User>('Users', UserSchema);

export default UserModel;
