"use client";

import React, { useState } from "react";
import { BeakerIcon, ClockIcon } from "@heroicons/react/24/outline";
import QuizBox from "./QuizBox";

export default function QuizContainer({ quizData }) {
  const [shouldQuizStart, setShouldQuizStart] = useState(false);

  // console.log(quizData);

  if (!shouldQuizStart) {
    return (
      <div className="  max-w-[90%] mx-auto py-10 flex justify-center">

        <section className="min-w-full md:min-w-[500px]">
          <div className="px-4 flex items-center gap-2">
            {/* ping  */}
            <span class="relative flex size-3">
              <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
              <span class="relative inline-flex size-3 rounded-full bg-red-500"></span>
            </span>
            <p className="font-semibold">Live Test</p>
          </div>
          <div className="space-y-1 bg-indigo-900 text-white rounded-tl-2xl rounded-tr-2xl p-4 lg:p-6">
            <div className="flex justify-between items-center">
              <p className="text-xs md:text-sm text-gray-400">
                Duration {quizData.duration} min
              </p>
              <div className="flex items-center gap-1 text-green-300 text-xs md:text-base">
                <ClockIcon className="size-5 " />
                <p className="">7.05.36</p>
              </div>
            </div>
            <p className="text-sm md:text-base">{quizData.title}</p>
            <p className="text-sm md:text-base">Topic: {quizData.topic}</p>
          </div>
          <div className="flex justify-center bg-white py-3">
            <button onClick={() => setShouldQuizStart(true)} className="bg-teal-700 text-white w-48 py-1 rounded-full transition-all duration-150 hover:bg-teal-600 ">
              Start Test
            </button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <main className="bg-blue-600 flex justify-center py-10 mt-10">
      <QuizBox quizData={quizData} />
    </main>
  );
}
