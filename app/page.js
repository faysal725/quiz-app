import QuizContainer from "./ui/QuizContainer";
import { fetchQuizData } from "@/utils/fetchQuizData";

export default async function Home() {
  // Fetch data directly in the component
  const quizData = await fetchQuizData();

  return (
    <main className="min-h-[84vh]">
      <div className="max-w-[90%] mx-auto px-5 py-2 flex justify-between items-start">
        {/* Heading section */}
        <section className="text-center space-y-7 max-w-4xl mx-auto mt-32">
          <p className="text-xl md:text-3xl font-semibold text-indigo-900">
            Welcome to Quizline
          </p>
          <p className="leading-7 text-gray-600 text-sm md:text-base">
            Testline is redefining how students prepare for competitive exams
            like REET, NEET, and State PSCs. With daily test targets, smart
            revision, and gamified routines, we make learning interactive,
            interesting, and impactful. Join Testline to build habits, retain
            concepts, and <br />
            <span className="font-semibold">ace your confidence!</span>
          </p>
        </section>
      </div>

      {!quizData ? (
        <>
          <main className="bg-blue-600 flex justify-center py-10">
            <div className="text-white">
              Error loading quiz data. Please try again later.
            </div>
          </main>
        </>
      ) : (
        <>
          <QuizContainer quizData={quizData} />
        </>
      )}
    </main>
  );
}
