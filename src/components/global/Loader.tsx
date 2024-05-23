"use client";
import { InfinitySpin } from "react-loader-spinner";
export default function Loading() {
  let color = "rgb(96 ,165 ,250)";
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <InfinitySpin
          width="190"
          color="green"
        />
      </div>
    </>
  );
}
