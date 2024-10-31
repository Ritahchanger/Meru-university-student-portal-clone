import { Link } from "react-router-dom";

const Courses = () => {
  const courses = [
    {
      programme: "CT201",
      moduleLevel: "Y1S1",
      semester: "SEM1-2021/2022",
      registeredFor: "Stage",
      unitsTaken: 6,
      totalBilled: 30800,
    },
    {
      programme: "CT201",
      moduleLevel: "Y1S2",
      semester: "SEM2-2021/2022",
      registeredFor: "Stage",
      unitsTaken: 5,
      totalBilled: 25400,
    },
    {
      programme: "CT201",
      moduleLevel: "Y2S1",
      semester: "SEM1-2022/2023",
      registeredFor: "Stage",
      unitsTaken: 7,
      totalBilled: 36200,
    },
    {
      programme: "CT201",
      moduleLevel: "Y2S2",
      semester: "SEM2-2022/2023",
      registeredFor: "Stage",
      unitsTaken: 6,
      totalBilled: 30800,
    },
    {
      programme: "CT201",
      moduleLevel: "Y3S1",
      semester: "SEM1-2023/2024",
      registeredFor: "Stage",
      unitsTaken: 5,
      totalBilled: 25400,
    },
    {
      programme: "CT201",
      moduleLevel: "Y3S2",
      semester: "SEM2-2023/2024",
      registeredFor: "Stage",
      unitsTaken: 6,
      totalBilled: 30800,
    },
    {
      programme: "CT201",
      moduleLevel: "Y4S1",
      semester: "SEM1-2024/2025",
      registeredFor: "Stage",
      unitsTaken: 7,
      totalBilled: 36200,
    },
  ];

  return (
    <div className="p-[1rem]">
      <h3 className="subtitle font-semibold text-sm">
        Course Registration List
      </h3>
      <div className="table-wrapper">
        <table className="w-full">
          <thead className="bg-black">
            <tr className="text-xs-extra text-white">
              <td className="px-4 py-2  border border-neutral-300">View</td>
              <td className="px-4 py-2  border border-neutral-300">Programme</td>
              <td className="px-4 py-2  border border-neutral-300">Module/Level</td>
              <td className="px-4 py-2  border border-neutral-300">Semester Registered</td>
              <td className="px-4 py-2  border border-neutral-300">Registered for</td>
              <td className="px-4 py-2  border border-neutral-300">Units Taken</td>
              <td className="px-4 py-2  border border-neutral-300">Total Billed</td>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr className="text-xs-extra" key={index}>
                <td className="px-4 py-2  border border-neutral-300">
                  <Link to="#">View Units</Link>
                </td>
                <td className="px-4 py-2 border border-neutral-300">{course.programme}</td>
                <td className="px-4 py-2 border  border-neutral-300">{course.moduleLevel}</td>
                <td className="px-4 py-2 border  border-neutral-300">{course.semester}</td>
                <td className="px-4 py-2 border border-neutral-300">{course.registeredFor}</td>
                <td className="px-4 py-2 border border-neutral-300">{course.unitsTaken}</td>
                <td className="px-4 py-2 border border-neutral-300">{course.totalBilled}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Courses;
