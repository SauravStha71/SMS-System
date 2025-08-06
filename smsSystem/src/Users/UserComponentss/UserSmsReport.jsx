import React from "react";

const UserSmsReport = () => {
  const data = [
    { branchCode: 201, branch: "RATNAPARK DC", scno: "201.16.007CHA1KA", customerId: 24, name: "Aisha Kharel", address: "NOADD2", mobile: "9841784738", days: 87, balance: 136, status: "Sent", sentAt: "03-Mar-25" },
    { branchCode: 201, branch: "RATNAPARK DC", scno: "201.18.007CHA1KA", customerId: 136, name: "Ismita Patel", address: "NOADD2", mobile: "9841938463", days: 64, balance: 136, status: "Sent", sentAt: "03-Mar-25" },
    { branchCode: 201, branch: "RATNAPARK DC", scno: "201.19.008CHA1KA", customerId: 89, name: "Roshni Mehra", address: "NOADD2", mobile: "9841859394", days: 136, balance: 136, status: "Sent", sentAt: "03-Mar-25" },
  ];

  return (
    <div className="p-4 overflow-x-auto">
      <table className="min-w-full border border-gray-300 shadow-md rounded-lg">
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
            <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-blue-100"}>
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
                <span className="bg-blue-500 text-white px-2 py-1 rounded-full">{item.status}</span>
              </td>
              <td className="p-3 border">{item.sentAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserSmsReport;
