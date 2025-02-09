import axios from "axios";

export const fetchQuizData = async () => {
  try {
    const response = await axios.get(process.env.NEXT_PUBLIC_QUIZ_API);
    return response.data;
  } catch (error) {
    console.error("Error fetching quiz data:", error);
    return null;
  }
};
