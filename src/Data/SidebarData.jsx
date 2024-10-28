import { MdDashboard, MdPayment, MdSchool, MdSettings, MdHelpOutline } from "react-icons/md";
import { FaUniversity, FaFileInvoiceDollar, FaClipboardList, FaChalkboardTeacher } from "react-icons/fa";
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
      },
      {
        subTitle: "Graduation Links",
        icon: <FaUniversity />,
      },
    ],
  },
  {
    title: "Financials",
    sidebarPages: [
      {
        subTitle: "Fee Statement",
        icon: <FaFileInvoiceDollar />,
      },
      {
        subTitle: "Receipts",
        icon: <IoReceiptOutline />,
      },
      {
        subTitle: "Fee Payment Letter",
        icon: <MdPayment />,
      },
    ],
  },
  {
    title: "Academics",
    sidebarPages: [
      {
        subTitle: "Unit Registration",
        icon: <FaClipboardList />,
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
