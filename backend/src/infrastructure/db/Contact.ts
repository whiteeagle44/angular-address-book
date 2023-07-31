import mongoose, {model} from "mongoose";
import IContact from "@model/IContact";

const ContactSchema = new mongoose.Schema<IContact>({
  uuid: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  street: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  }
})

const Contact = model<IContact>('Contact', ContactSchema);

export default Contact
