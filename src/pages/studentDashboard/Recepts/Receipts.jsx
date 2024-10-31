import React, { useState } from "react";
import StudentDashNavbar from "../../../components/dashboard/student/StudentDashNavbar/StudentDashNavbar";
import StudentDashSidebar from "../../../components/dashboard/student/StudentDashSidebar/StudentDashSidebar";
import { useSelector } from "react-redux";
import "./Receipts.css";

const Receipts = () => {
  const isSidebarShown = useSelector((state) => state.sidebar.isSidebarShown);
  
  const [selectedReceipts, setSelectedReceipts] = useState({});

  const receiptsData = Array.from({ length: 12 }, (_, index) => ({
    id: index + 1,
    receiptNo: `RPT-${1000 + index}`,
    date: `2024-10-${String(12 - index).padStart(2, "0")}`,
    paymentMode: index % 2 === 0 ? "Credit Card" : "Cash",
    amount: (Math.random() * 100 + 50).toFixed(2), 
  }));

  const handleCheckboxChange = (id) => {
    setSelectedReceipts((prev) => ({
      ...prev,
      [id]: !prev[id], 
    }));
  };

  const printSelected = () => {
    const selected = receiptsData.filter(receipt => selectedReceipts[receipt.id]);
    if (selected.length > 0) {
      const printWindow = window.open('', '_blank');
      printWindow.document.write(`
        <html>
          <head>
            <title>Print Receipts</title>
            <style>
              body { font-family: Arial, sans-serif; }
              table { width: 100%; border-collapse: collapse; }
              th, td { border: 1px solid #ccc; padding: 8px; text-align: left; }
              th { background-color: #f2f2f2; }
            </style>
          </head>
          <body>
            <h2>Selected Receipts</h2>
            <table>
              <thead>
                <tr>
                  <th>Receipt No</th>
                  <th>Date</th>
                  <th>Payment Mode</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                ${selected.map(receipt => `
                  <tr>
                    <td>${receipt.receiptNo}</td>
                    <td>${receipt.date}</td>
                    <td>${receipt.paymentMode}</td>
                    <td>$${receipt.amount}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.print();
    } else {
      alert("No receipts selected!");
    }
  };

  return (
    <div className="receipts">
      <StudentDashNavbar />
      <StudentDashSidebar />
      <div className={`main border border-neutral-400 p-[1rem] ${!isSidebarShown ? "mobile" : ""}`}>
        <div className="py-[0.5rem] px-[1rem] custom-orange" style={{ borderTopRightRadius: "7px", borderTopLeftRadius: "7px" }}>
          <p>List of Receipts</p>
        </div>
        <p className="text-xs-extra">
          Click <a href="#">"Select"</a> to select any receipt you want to print, then click <a href="#">"Print Selected"</a> to print.
        </p>

        <button onClick={printSelected} className="bg-green-600 mt-5 text-white p-[0.5rem] text-xs-extra py-[0.2rem]">
          Print Selected
        </button>

        <div className="table-wrapper">
          <table className="table-auto w-full border border-neutral-300">
            <thead className="bg-black">
              <tr className="border-b text-xs-extra text-white">
                <td className="px-4 py-2">Select</td>
                <td className="px-4 py-2">Receipt No</td>
                <td className="px-4 py-2">Date</td>
                <td className="px-4 py-2">Payment Mode</td>
                <td className="px-4 py-2">Amount</td>
              </tr>
            </thead>
            <tbody>
              {receiptsData.map((receipt) => (
                <tr key={receipt.id} className="border-b hover:bg-gray-100 text-xs-extra">
                  <td className="px-4 py-2 text-center">
                    <input
                      type="checkbox"
                      checked={!!selectedReceipts[receipt.id]}
                      onChange={() => handleCheckboxChange(receipt.id)}
                    />
                  </td>
                  <td className="px-4 py-2">{receipt.receiptNo}</td>
                  <td className="px-4 py-2">{receipt.date}</td>
                  <td className="px-4 py-2">{receipt.paymentMode}</td>
                  <td className="px-4 py-2">${receipt.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Receipts;
