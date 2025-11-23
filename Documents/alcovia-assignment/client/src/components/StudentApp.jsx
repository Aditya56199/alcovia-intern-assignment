import DailyCheckin from "./DailyCheckin";
import StudentStatus from "./StudentStatus";


export default function StudentApp() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Student Dashboard</h1>

      <DailyCheckin />

      <hr />

      <StudentStatus />
    </div>
  );
}

