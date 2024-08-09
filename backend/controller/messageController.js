import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/error.js";
import { Message } from "../models/messageSchema.js";

export const sendMessage = catchAsyncErrors(async (req, res, next) => {
  const { firstName, lastName, email, phone,check_in,check_out,number_of_guest,room_type, message } = req.body;
  if (!firstName || !lastName || !email || !phone || !message || !check_in || !check_out ||!number_of_guest ||!room_type) {
    return next(new ErrorHandler("Please Fill All Fields!", 400));
  }
  await Message.create({ firstName, lastName, email, phone,check_in,check_out,number_of_guest,room_type, message });
  res.status(200).json({
    success: true,
    message: "Booking Successfully done 😊",
  });
});

export const getAllMessages = catchAsyncErrors(async (req, res, next) => {
  const messages = await Message.find();
  res.status(200).json({
    success: true,
    messages: "Booking Successfully done 😊",
  });
});
