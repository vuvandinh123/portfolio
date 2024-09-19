import React from "react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex-center bg-gray-800 opacity-75">
      <div className="flex justify-center flex-col items-center ">
        <div
          className="loader border-r-2 rounded-full border-yellow-500 bg-yellow-300 animate-bounce
aspect-square w-8 flex justify-center items-center text-yellow-700"
        >
          $
        </div>
        <span className="mt-3">Đang tải vui lòng chờ...</span>
      </div>
    </div>
  );
}
