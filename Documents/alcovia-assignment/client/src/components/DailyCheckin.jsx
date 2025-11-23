import { useState } from "react";
import { submitDailyCheckin } from "../hooks/useSubmit";

export default function DailyCheckin() {
  const [studentId, setStudentId] = useState("");
  const [quizScore, setQuizScore] = useState("");
  const [focusMinutes, setFocusMinutes] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    const res = await submitDailyCheckin(studentId, quizScore, focusMinutes);
    setMessage(res?.status || "Error");
  };

  return (
    <div>
      <h2>Daily Check-in</h2>

      <input placeholder="Student ID" value={studentId}
        onChange={e => setStudentId(e.target.value)} />

      <input placeholder="Quiz Score" value={quizScore}
        onChange={e => setQuizScore(e.target.value)} />

      <input placeholder="Focus Minutes" value={focusMinutes}
        onChange={e => setFocusMinutes(e.target.value)} />

      <button onClick={handleSubmit}>Submit Check-in</button>

      <p>{message}</p>
    </div>
  );
}
