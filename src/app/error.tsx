"use client";

import Link from "next/link";

const ErrorPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-slate-50 text-gray-900">
      <h1 className="mb-4 text-8xl font-bold">ERROR</h1>
      <p className="mb-4 text-4xl font-medium">Unexpected error occurred </p>
      <Link href="/" className="mt-4 text-xl text-blue-600 hover:underline">
        Go back home
      </Link>
    </div>
  );
};

export default ErrorPage;
