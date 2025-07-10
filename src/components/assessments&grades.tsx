import { useEffect, useState } from "react";

const assignments = [
  { title: "ML Model Integration", course: "Machine Learning Basics", due: "12-07-2025", status: "Submitted", action: "Resubmit" },
  { title: "Database Schema", course: "SQL Basics", due: "14-07-2025", status: "Pending", action: "Submit" },
  { title: "Database Schema", course: "SQL Basics", due: "14-07-2025", status: "Pending", action: "Submit" },
  { title: "Database Schema", course: "SQL Basics", due: "14-07-2025", status: "Pending", action: "Submit" },
  { title: "Database Schema", course: "SQL Basics", due: "14-07-2025", status: "Pending", action: "Submit" },
  { title: "JS To-Do App", course: "JavaScript", due: "17-07-2025", status: "Pending", action: "Submit" },
];

const grades = [
  { course: "Machine Learning Basics", overall: "88%", quiz: "85%", attendance: "95%", performance: "Good" },
  { course: "SQL Basics", overall: "92%", quiz: "85%", attendance: "95%", performance: "Excellent" },
  { course: "Data Structures & Algorithms", overall: "34%", quiz: "57%", attendance: "38%", performance: "Bad" },
  { course: "UX Fundamentals", overall: "72%", quiz: "85%", attendance: "76%", performance: "Average" },
  { course: "Web Development", overall: "41%", quiz: "45%", attendance: "57%", performance: "Bad" },
];

const Assessments = () => {
  useEffect(() => {
    document.title = "Assessments - LauraTek";
  }, []);
  const [tab, setTab] = useState("Assignments");

  return (
    
    <div className="container py-10">
      <div className="flex border-b mb-6">
        <button
          className={`px-4 py-2 font-medium border-b-2 transition-colors ${tab === "Assignments" ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500"}`}
          onClick={() => setTab("Assignments")}
        >
          Assignments
        </button>
        <button
          className={`px-4 py-2 font-medium border-b-2 transition-colors ${tab === "Grades" ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500"}`}
          onClick={() => setTab("Grades")}
        >
          Grades
        </button>
      </div>
      {tab === "Assignments" && (
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Assignments</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-blue-500 text-white">
                  <th className="px-4 py-2 text-left">Title</th>
                  <th className="px-4 py-2 text-left">Course</th>
                  <th className="px-4 py-2 text-left">Due Date</th>
                  <th className="px-4 py-2 text-left">Status</th>
                  <th className="px-4 py-2 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {assignments.map((a, i) => (
                  <tr key={i} className="border-b">
                    <td className="px-4 py-2">{a.title}</td>
                    <td className="px-4 py-2">{a.course}</td>
                    <td className="px-4 py-2">{a.due}</td>
                    <td className="px-4 py-2">
                      {a.status === "Submitted" ? (
                        <span className="px-2 py-1 text-xs rounded border border-blue-400 text-blue-600 bg-blue-50">Submitted</span>
                      ) : (
                        <span className="px-2 py-1 text-xs rounded border border-orange-400 text-orange-500 bg-orange-50">Pending</span>
                      )}
                    </td>
                    <td className="px-4 py-2">
                      <button className="px-3 py-1 border border-blue-500 text-blue-600 rounded hover:bg-blue-50 transition text-xs">
                        {a.action}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {tab === "Grades" && (
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow p-6 flex flex-wrap gap-6 items-center">
            <div>
              <div className="text-xs text-gray-500">Average Grade</div>
              <div className="text-3xl font-bold text-blue-600">12 %</div>
            </div>
            <div className="flex gap-6">
              <div className="bg-gray-50 rounded p-4">
                <div className="text-xs text-gray-500">Quizzes</div>
                <div className="text-xl font-bold text-blue-600">90 %</div>
              </div>
              <div className="bg-gray-50 rounded p-4">
                <div className="text-xs text-gray-500">Attendance</div>
                <div className="text-xl font-bold text-blue-600">80 %</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-2">
              <div className="font-semibold">Historical Performance</div>
              <div className="text-blue-600 text-xs">Last 6 Months +5%</div>
            </div>
            {/* Chart placeholder */}
            <div className="h-40 flex items-center justify-center text-gray-400 border rounded bg-gray-50">
              [Line Chart Placeholder]
            </div>
            <div className="flex gap-4 mt-2 text-xs">
              <span className="text-blue-600">● Course 1</span>
              <span className="text-blue-600">● Course 2</span>
              <span className="text-purple-600">● Course 3</span>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="font-semibold mb-2">Detailed Grade Breakdown</div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="bg-blue-500 text-white">
                    <th className="px-4 py-2 text-left">Course</th>
                    <th className="px-4 py-2 text-left">Overall Grade</th>
                    <th className="px-4 py-2 text-left">Quiz Average</th>
                    <th className="px-4 py-2 text-left">Attendance</th>
                    <th className="px-4 py-2 text-left">Performance</th>
                  </tr>
                </thead>
                <tbody>
                  {grades.map((g, i) => (
                    <tr key={i} className="border-b">
                      <td className="px-4 py-2">{g.course}</td>
                      <td className="px-4 py-2">{g.overall}</td>
                      <td className="px-4 py-2">{g.quiz}</td>
                      <td className="px-4 py-2">{g.attendance}</td>
                      <td className="px-4 py-2">{g.performance}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Assessments;