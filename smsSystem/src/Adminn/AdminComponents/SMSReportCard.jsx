import React from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const SMSReportCard = () => {
  const data = [
    { branchCode: 201, branch: "RATNAPARK DC", scno: "201.16.007CHA1KA", customerId: 24, name: "Aisha Kharel", address: "NOADD2", mobile: "9841784738", days: 87, balance: 136, status: "Sent", sentAt: "03-Mar-25" },
    { branchCode: 201, branch: "RATNAPARK DC", scno: "201.18.007CHA1KA", customerId: 136, name: "Ismita Patel", address: "NOADD2", mobile: "9841938463", days: 64, balance: 136, status: "Sent", sentAt: "03-Mar-25" },
    { branchCode: 201, branch: "RATNAPARK DC", scno: "201.19.008CHA1KA", customerId: 89, name: "Roshni Mehra", address: "NOADD2", mobile: "9841859394", days: 136, balance: 136, status: "Sent", sentAt: "03-Mar-25" },
    { branchCode: 202, branch: "LAZIMPAT DC", scno: "202.21.001CHA2KR", customerId: 56, name: "Kiran Bista", address: "NOADD1", mobile: "9841324567", days: 34, balance: 245, status: "Pending", sentAt: "04-Mar-25" },
    { branchCode: 202, branch: "LAZIMPAT DC", scno: "202.23.009CHA2KR", customerId: 42, name: "Manoj Thapa", address: "NOADD3", mobile: "9841547893", days: 98, balance: 312, status: "Sent", sentAt: "05-Mar-25" },
    { branchCode: 203, branch: "DHARAN DC", scno: "203.11.002CHA3BA", customerId: 78, name: "Sunita Karki", address: "NOADD4", mobile: "9841678453", days: 72, balance: 154, status: "Pending", sentAt: "06-Mar-25" },
    { branchCode: 203, branch: "DHARAN DC", scno: "203.14.003CHA3BA", customerId: 115, name: "Rajendra Pandey", address: "NOADD5", mobile: "9841223345", days: 45, balance: 178, status: "Sent", sentAt: "07-Mar-25" },
    { branchCode: 204, branch: "BIRATNAGAR DC", scno: "204.18.004CHA4MN", customerId: 69, name: "Sarita Sharma", address: "NOADD6", mobile: "9841992234", days: 103, balance: 267, status: "Pending", sentAt: "08-Mar-25" },
    { branchCode: 204, branch: "BIRATNAGAR DC", scno: "204.25.005CHA4MN", customerId: 32, name: "Deepak Acharya", address: "NOADD7", mobile: "9841456767", days: 62, balance: 198, status: "Sent", sentAt: "09-Mar-25" },
    { branchCode: 205, branch: "KATHMANDU DC", scno: "205.32.006CHA5KA", customerId: 93, name: "Pramila Ghimire", address: "NOADD8", mobile: "9841659898", days: 79, balance: 123, status: "Pending", sentAt: "10-Mar-25" },
    { branchCode: 206, branch: "POKHARA DC", scno: "206.28.007CHA6KA", customerId: 58, name: "Sujan Rai", address: "NOADD9", mobile: "9841334455", days: 41, balance: 276, status: "Sent", sentAt: "11-Mar-25" },
    { branchCode: 207, branch: "BHAKTAPUR DC", scno: "207.30.008CHA7KA", customerId: 47, name: "Nisha Joshi", address: "NOADD10", mobile: "9841789345", days: 88, balance: 145, status: "Pending", sentAt: "12-Mar-25" },
    { branchCode: 208, branch: "BUTWAL DC", scno: "208.33.009CHA8KA", customerId: 85, name: "Suman Thapa", address: "NOADD11", mobile: "9841456789", days: 54, balance: 234, status: "Sent", sentAt: "13-Mar-25" },
    { branchCode: 209, branch: "NEPALGUNJ DC", scno: "209.35.010CHA9KA", customerId: 66, name: "Anita Gurung", address: "NOADD12", mobile: "9841678901", days: 29, balance: 198, status: "Pending", sentAt: "14-Mar-25" },
    { branchCode: 210, branch: "HETAUDA DC", scno: "210.36.011CHA0KA", customerId: 73, name: "Rajesh Yadav", address: "NOADD13", mobile: "9841234567", days: 92, balance: 156, status: "Sent", sentAt: "15-Mar-25" },
    { branchCode: 211, branch: "KAVRE DC", scno: "211.37.012CHA1KA", customerId: 81, name: "Maya Tamang", address: "NOADD14", mobile: "9841323456", days: 67, balance: 245, status: "Pending", sentAt: "16-Mar-25" },
    { branchCode: 212, branch: "RAMECHHAP DC", scno: "212.38.013CHA2KA", customerId: 90, name: "Bishal Khatri", address: "NOADD15", mobile: "9841456789", days: 53, balance: 312, status: "Sent", sentAt: "17-Mar-25" },
  ];

  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(14);
    doc.text("Today's SMS Report", 14, 15);

    const tableColumn = [
      "Branch Code",
      "Branch",
      "SCNO",
      "Customer Id",
      "Name",
      "Address",
      "Mobile Number",
      "No. of Days",
      "Balance Amount",
      "Status",
      "Sent At",
    ];

    const tableRows = data.map(item => [
      item.branchCode,
      item.branch,
      item.scno,
      item.customerId,
      item.name,
      item.address,
      item.mobile,
      item.days,
      item.balance,
      item.status,
      item.sentAt,
    ]);

    autoTable(doc, {
      startY: 20,
      head: [tableColumn],
      body: tableRows,
      theme: "grid",
      styles: {
        fontSize: 9,
        lineWidth: 0.1,
        lineColor: [0, 0, 0], // Black borders
      },
      headStyles: {
        fillColor: [220, 53, 69], // Red background
        textColor: [255, 255, 255], // White text
        lineWidth: 0.1,
        lineColor: [0, 0, 0],
      },
    });

    doc.save("todays_sms_report.pdf");
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-white px-6 pb-4">
      {/* Header + PDF Export Button */}
      <div className="w-full  flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-700"></h2>
        <button
          onClick={exportToPDF}
          className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
        >
          Download Today's Report
        </button>
      </div>

      {/* Filter Section */}
      <div className="mb-6">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 items-end">
          {/* Start Date */}
          <div className="bg-blue-100 p-3 md:w-[12rem] w-[20rem] rounded-lg shadow-md">
            <label className="font-semibold text-center text-blue-800 block mb-1">Start Date</label>
            <div className="flex justify-center">
              <input type="date" className="p-1 border border-gray-300 rounded-md text-sm w-36" />
            </div>
          </div>

          {/* End Date */}
          <div className="bg-blue-100 p-3 rounded-lg shadow-md">
            <label className="font-semibold text-center text-blue-800 block mb-1">End Date</label>
            <div className="flex justify-center">
              <input type="date" className="p-1 border border-gray-300 rounded-md text-sm w-36" />
            </div>
          </div>


        </div>
        {/* Filter Button */}
        <div className="pt-3 flex justify-center">
          <button className="bg-blue-600 text-white px-4 py-1.5 rounded-md text-sm hover:bg-blue-700 transition-all">
            Filter
          </button>
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto w-full">
        <table className="min-w-full border border-gray-300 shadow-md rounded-lg bg-white">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="p-3 border">Branch Code</th>
              <th className="p-3 border">Branch</th>
              <th className="p-3 border">SCNO</th>
              <th className="p-3 border">Customer Id</th>
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Address</th>
              <th className="p-3 border">Mobile Number</th>
              <th className="p-3 border">No. of Days</th>
              <th className="p-3 border">Balance Amount</th>
              <th className="p-3 border">Status</th>
              <th className="p-3 border">Sent At</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-blue-50"}>
                <td className="p-3 border">{item.branchCode}</td>
                <td className="p-3 border">{item.branch}</td>
                <td className="p-3 border">{item.scno}</td>
                <td className="p-3 border">{item.customerId}</td>
                <td className="p-3 border">{item.name}</td>
                <td className="p-3 border">{item.address}</td>
                <td className="p-3 border">{item.mobile}</td>
                <td className="p-3 border">{item.days}</td>
                <td className="p-3 border">{item.balance}</td>
                <td className="p-3 border">
                  <span className="bg-blue-500 text-white px-2 py-1 rounded-full">
                    {item.status}
                  </span>
                </td>
                <td className="p-3 border">{item.sentAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SMSReportCard;
