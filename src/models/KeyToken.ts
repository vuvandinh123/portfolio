import mongoose, { Document, Schema } from 'mongoose';

// Định nghĩa giao diện cho user
interface KeyToken extends Document {
  user: string;
  publicKey: string;
  privateKey: string;
  refreshToken: string;
}

// Định nghĩa lược đồ (schema)
const KeyTokenSchema: Schema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "users"
  },
  publicKey: {
    type: String,
    required: true,
  },
  privateKey: {
    type: String,
    required: true
  },
  refreshToken: {
    type: String,
    required: true
  }

});

// Kiểm tra xem mô hình đã được định nghĩa chưa
const KeyTokenModel = mongoose.models.KeyToken || mongoose.model<KeyToken>('KeyToken', KeyTokenSchema);

export default KeyTokenModel;
