import {
  MdDashboard,
  MdPayment,
  MdSchool,
  MdSettings,
  MdHelpOutline,
} from "react-icons/md";
import {
  FaUniversity,
  FaFileInvoiceDollar,
  FaClipboardList,
  FaChalkboardTeacher,
} from "react-icons/fa";
import { IoReceiptOutline } from "react-icons/io5";
import { IoIosPeople, IoIosPaper } from "react-icons/io";
import { BsFillHouseDoorFill, BsCardChecklist } from "react-icons/bs";
import { AiFillFilePdf, AiOutlineQuestionCircle } from "react-icons/ai";

const sidebarData = [
  {
    title: "Core",
    sidebarPages: [
      {
        subTitle: "Dashboard",
        icon: <MdDashboard />,
        path: "/",
      },
      {
        subTitle: "Graduation Links",
        icon: <FaUniversity />,
        path: "/student/graduation-links",
      },
    ],
  },
  {
    title: "Financials",
    sidebarPages: [
      {
        subTitle: "Fee Statement",
        icon: <FaFileInvoiceDollar />,
        path: "#",
      },
      {
        subTitle: "Receipts",
        icon: <IoReceiptOutline />,
        path: "/student/fee/receipts",
      },
      {
        subTitle: "Fee Payment Letter",
        icon: <MdPayment />,
        path: "/student/fee/payment/letter",
      },
    ],
  },
  {
    title: "Academics",
    sidebarPages: [
      {
        subTitle: "Unit Registration",
        icon: <FaClipboardList />,
        path: "/student/units/registration",
      },
      {
        subTitle: "Lectures Evaluation",
        icon: <FaChalkboardTeacher />,
      },
      {
        subTitle: "Industrial Attachment",
        icon: <IoIosPeople />,
      },
    ],
  },
  {
    title: "Examination",
    sidebarPages: [
      {
        subTitle: "Exam Card",
        icon: <BsCardChecklist />,
      },
      {
        subTitle: "Provisional Result Slip",
        icon: <AiFillFilePdf />,
      },
    ],
  },
  {
    title: "Accommodation",
    sidebarPages: [
      {
        subTitle: "Hostel Clearance",
        icon: <BsFillHouseDoorFill />,
      },
    ],
  },
  {
    title: "Settings",
    sidebarPages: [
      {
        subTitle: "Change Password",
        icon: <MdSettings />,
      },
    ],
  },
  {
    title: "Help",
    sidebarPages: [
      {
        subTitle: "FAQ",
        icon: <AiOutlineQuestionCircle />,
      },
      {
        subTitle: "Unit Registration Guide",
        icon: <MdHelpOutline />,
      },
      {
        subTitle: "Lecturer Evaluation",
        icon: <FaChalkboardTeacher />,
      },
      {
        subTitle: "Change of Course Guide",
        icon: <AiOutlineQuestionCircle />,
      },
      {
        subTitle: "LMS",
        icon: <IoIosPaper />,
      },
    ],
  },
];

export default sidebarData;
