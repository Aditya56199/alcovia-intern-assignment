import { useState } from "react";
import { getStudentStatus } from "../hooks/useSubmit";

export default function StudentStatus() {
  const [studentId, setStudentId] = useState("");
  const [data, setData] = useState(null);

  const handleFetch = async () => {
    const res = await getStudentStatus(studentId);
    setData(res);
  };

  return (
    <div>
      <h2>Student Status</h2>

      <input placeholder="Student ID" value={studentId}
        onChange={e => setStudentId(e.target.value)} />

      <button onClick={handleFetch}>Get Status</button>

      {data && (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </div>
  );
}
