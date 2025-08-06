import { useState } from "react";

const PreviewSelected = () => {
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
      branch: "Branch C",
      scno: "201.20.009XYZ",
      customerId: "50",
      name: "Jane Doe",
      address: "Address 3",
      mobile: "9876543211",
      days: 45,
      balance: 150,
      prepaidDate: "04-Mar-25",
      selected: false,
    },
  ]);

  // Toggle selection of individual rows
  const toggleSelect = (id) => {
    setData((prevData) =>
      prevData.map((row) =>
        row.id === id ? { ...row, selected: !row.selected } : row
      )
    );
  };

  // Filter selected contacts
  const selectedContacts = data.filter((row) => row.selected);

  return (
    <div className="overflow-x-auto p-4">
      {/* Main Table */}
      <h2 className="text-xl font-semibold mb-2">All Contacts</h2>
      <table className="w-full border border-gray-300 shadow-lg rounded-lg mb-6">
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

      {/* Selected Contacts Table */}
      {selectedContacts.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-2">Selected Contacts</h2>
          <table className="w-full border border-gray-300 shadow-lg rounded-lg">
            <thead>
              <tr className="bg-green-500 text-white">
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
              {selectedContacts.map((row) => (
                <tr key={row.id} className="border even:bg-green-100 odd:bg-white">
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
      )}
    </div>
  );
};

export default PreviewSelected;