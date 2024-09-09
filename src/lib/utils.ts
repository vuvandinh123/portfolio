import { UserType } from "@/types/user";
import { type ClassValue, clsx } from "clsx";
import crypto from 'crypto';
import { twMerge } from "tailwind-merge";
import JWT from 'jsonwebtoken';
import _ from 'lodash';
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string) {
  let currentDate = new Date().getTime();
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }
  let targetDate = new Date(date).getTime();
  let timeDifference = Math.abs(currentDate - targetDate);
  let daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  let fullDate = new Date(date).toLocaleString("vi-VN", {
    timeZone: 'Asia/Ho_Chi_Minh',
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  if (daysAgo < 1) {
    return "Hôm nay";
  } else if (daysAgo < 7) {
    return `${fullDate} (${daysAgo} Ngày trước)`;
  } else if (daysAgo < 30) {
    const weeksAgo = Math.floor(daysAgo / 7);
    return `${fullDate} (${weeksAgo} Tuần trước)`;
  } else if (daysAgo < 365) {
    const monthsAgo = Math.floor(daysAgo / 30);
    return `${fullDate} (${monthsAgo} Tháng trước)`;
  } else {
    const yearsAgo = Math.floor(daysAgo / 365);
    return `${fullDate} (${yearsAgo} Năm trước)`;
  }
}
export const createTokenPeir = async (payload: UserType) => {
  const expiresInAccessToken = 1800 * 2;
  // Create access and refresh tokens
  try {
    const token = JWT.sign(payload, process.env.JWT_SECRET || '', {
      expiresIn: expiresInAccessToken,
    });
    return token
  } catch (error) {
    // If there is an error, rethrow it
    throw error;
  }
}
// const verifyJWT = async (token, keySecret) => {
//   return await JWT.verify(token, keySecret)
// }

export const getInfoData = ({ fileds = [], object = {} }: {
  fileds: Array<string>,
  object: Object
}) => {
  return _.pick(object, fileds)
}
export const createPrivateKeyAndPublicKey = (size = 64 as number) => {
  // Generate a random private key
  const privateKey = crypto.randomBytes(size).toString('hex');
  // Generate a random public key
  const publicKey = crypto.randomBytes(size).toString('hex');
  return {
    privateKey,
    publicKey
  };
}
