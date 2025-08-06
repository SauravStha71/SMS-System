import { useState } from "react";

const UserPreviewData = () => {
  const [data, setData] = useState([
    {
      id: 1,
      branchCode: "201",
      branch: "Branch A",
      scno: "201.16.007ABC",
      customerId: "24",
      name: "John Doe",
      address: "Address 1",
      mobile: "9876543210",
      days: 87,
      balance: 136,
      prepaidDate: "03-Mar-25",
      selected: false,
    },
    {
      id: 2,
      branchCode: "202",
      branch: "Branch B",
      scno: "201.18.008DEF",
      customerId: "36",
      name: "Ram Smith",
      address: "Address 2",
      mobile: "9841234567",
      days: 64,
      balance: 200,
      prepaidDate: "05-Mar-25",
      selected: false,
    },
    {
      id: 3,
      branchCode: "205",
      branch: "Branch A",
      scno: "201.16.007ABC",
      customerId: "24",
      name: "John Doe",
      address: "Address 1",
      mobile: "9876543210",
      days: 87,
      balance: 136,
      prepaidDate: "03-Mar-25",
      selected: false,
    },
    {
      id: 4,
      branchCode: "208",
      branch: "Branch A",
      scno: "201.16.007ABC",
      customerId: "24",
      name: "John Doe",
      address: "Address 1",
      mobile: "9876543210",
      days: 87,
      balance: 136,
      prepaidDate: "03-Mar-25",
      selected: false,
    },
  ]);

  const toggleSelect = (id) => {
    setData((prevData) =>
      prevData.map((row) =>
        row.id === id ? { ...row, selected: !row.selected } : row
      )
    );
  };

  return (
    <div className="overflow-x-auto p-4">
      <table className="w-full border border-gray-300 shadow-lg rounded-lg">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="border border-black p-3 text-center">
              <input type="checkbox" disabled />
            </th>
            <th className="border border-black p-3">Branch Code</th>
            <th className="border border-black p-3">Branch</th>
            <th className="border border-black p-3">SCNO</th>
            <th className="border border-black p-3">Customer ID</th>
            <th className="border border-black p-3">Name</th>
            <th className="border border-black p-3">Address</th>
            <th className="border border-black p-3">Mobile Number</th>
            <th className="border border-black p-3">No. of Days</th>
            <th className="border border-black p-3">Balance Amount</th>
            <th className="border border-black p-3">Prepaid Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr
              key={row.id}
              className={`border ${
                row.selected ? "bg-green-300" : "even:bg-blue-100 odd:bg-white"
              } hover:bg-green-300 transition-all`}
            >
              <td className="border p-3 text-center">
                <input
                  type="checkbox"
                  checked={row.selected}
                  onChange={() => toggleSelect(row.id)}
                />
              </td>
              <td className="border p-3">{row.branchCode}</td>
              <td className="border p-3">{row.branch}</td>
              <td className="border p-3">{row.scno}</td>
              <td className="border p-3">{row.customerId}</td>
              <td className="border p-3">{row.name}</td>
              <td className="border p-3">{row.address}</td>
              <td className="border p-3">{row.mobile}</td>
              <td className="border p-3">{row.days}</td>
              <td className="border p-3">{row.balance}</td>
              <td className="border p-3">{row.prepaidDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserPreviewData;
