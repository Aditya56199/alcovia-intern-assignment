import { API_URL } from "../constants/api";

export async function submitDailyCheckin(student_id, quiz_score, focus_minutes) {
  const res = await fetch(`${API_URL}/daily-checkin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ student_id, quiz_score, focus_minutes }),
  });

  return await res.json();
}

export async function getStudentStatus(student_id) {
  const res = await fetch(`${API_URL}/student/${student_id}`);
  return await res.json();
}
