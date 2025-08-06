import React, { useState } from 'react';

const data = [
  { branchCode: 201, branch: "RATNAPARK DC", scno: "201.16.007CHA1KA", customerId: 24, name: "Aisha Kharel", address: "NOADD2", mobile: "9841784738", days: 87, balance: 136, status: "Sent", sentAt: "03-Mar-25" },
  { branchCode: 201, branch: "RATNAPARK DC", scno: "201.18.007CHA1KA", customerId: 136, name: "Ismita Patel", address: "NOADD2", mobile: "9841938463", days: 64, balance: 136, status: "Sent", sentAt: "03-Mar-25" },
  { branchCode: 201, branch: "RATNAPARK DC", scno: "201.19.008CHA1KA", customerId: 89, name: "Roshni Mehra", address: "NOADD2", mobile: "9841859394", days: 136, balance: 136, status: "Sent", sentAt: "03-Mar-25" },
  { branchCode: 203, branch: "LAGANKHEL DC", scno: "203.21.009LAG2", customerId: 312, name: "Rajesh Shrestha", address: "Lalitpur", mobile: "9801234567", days: 42, balance: 200, status: "Sent", sentAt: "01-Apr-25" },
  { branchCode: 206, branch: "MAITIDEVI DC", scno: "206.25.006MAI1", customerId: 142, name: "Bibek Tamang", address: "Kathmandu", mobile: "9823456789", days: 78, balance: 320, status: "Sent", sentAt: "05-Apr-25" },
  { branchCode: 207, branch: "KALIMATI DC", scno: "207.26.007KAL1", customerId: 167, name: "Rina Lama", address: "Pokhara", mobile: "9834567890", days: 56, balance: 175, status: "Sent", sentAt: "29-Mar-25" },
  { branchCode: 208, branch: "DHOBIGHAT DC", scno: "208.27.008DHO1", customerId: 198, name: "Kiran Adhikari", address: "Lalitpur", mobile: "9845678901", days: 110, balance: 220, status: "Sent", sentAt: "12-Mar-25" },
  { branchCode: 209, branch: "GONGABU DC", scno: "209.28.009GON1", customerId: 256, name: "Anita Joshi", address: "Butwal", mobile: "9856789012", days: 91, balance: 142, status: "Sent", sentAt: "20-Mar-25" },
  { branchCode: 210, branch: "KOTESHWOR DC", scno: "210.29.010KOT1", customerId: 300, name: "Sagar Bista", address: "Chitwan", mobile: "9867890123", days: 102, balance: 180, status: "Sent", sentAt: "18-Mar-25" },
  { branchCode: 211, branch: "THAMEL DC", scno: "211.30.011THA1", customerId: 350, name: "Reema Thapa", address: "Kathmandu", mobile: "9878901234", days: 73, balance: 95, status: "Sent", sentAt: "10-Mar-25" },
  { branchCode: 212, branch: "BANESHWOR DC", scno: "212.31.012BAN1", customerId: 275, name: "Sunil Chaudhary", address: "Bhaktapur", mobile: "9889012345", days: 58, balance: 210, status: "Sent", sentAt: "07-Mar-25" },
  { branchCode: 213, branch: "BALAJU DC", scno: "213.32.013BAL1", customerId: 390, name: "Sushma Gurung", address: "Pokhara", mobile: "9890123456", days: 82, balance: 160, status: "Sent", sentAt: "02-Mar-25" },
  { branchCode: 214, branch: "BHAKTAPUR DC", scno: "214.33.014BHA1", customerId: 410, name: "Ramesh Basnet", address: "Bhaktapur", mobile: "9801122334", days: 67, balance: 134, status: "Sent", sentAt: "04-Mar-25" },
];

const YesterdayDataTable = () => {
  const [selectedIds, setSelectedIds] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [showPreview, setShowPreview] = useState(false);

  const totalPages = Math.ceil(data.length / rowsPerPage);
  const paginatedData = data.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  const handleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSelectAll = (e) => {
    const visibleData = showPreview
      ? data.filter((item) => selectedIds.includes(item.customerId))
      : paginatedData;

    if (e.target.checked) {
      setSelectedIds((prev) => [
        ...new Set([...prev, ...visibleData.map((item) => item.customerId)]),
      ]);
    } else {
      setSelectedIds((prev) =>
        prev.filter((id) => !visibleData.some((item) => item.customerId === id))
      );
    }
  };

  const clearSelection = () => setSelectedIds([]);

  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(parseInt(e.target.value));
    setCurrentPage(1);
  };

  const visibleData = showPreview
    ? data.filter((item) => selectedIds.includes(item.customerId))
    : paginatedData;

  return (
    <div className="p-6 flex flex-col items-center">
      {/* Control Bar */}
      <div className="w-full max-w-6xl mb-4 flex justify-between items-center bg-white px-4 py-3 rounded shadow">
        <div className="flex items-center gap-3 text-sm text-gray-700 font-medium">
          <label htmlFor="rowsPerPage">Rows:</label>
          <select
            id="rowsPerPage"
            value={rowsPerPage}
            onChange={handleRowsPerPageChange}
            className="border border-gray-300 rounded px-2 py-1"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
          </select>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-blue-600 font-medium">✔ {selectedIds.length} selected</span>
          <button
            onClick={clearSelection}
            className="text-red-500 border border-red-400 px-2 py-1 rounded hover:bg-red-100"
          >
            ❌ Clear All
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="w-full overflow-x-auto rounded shadow">
        <table className="min-w-full table-auto border border-gray-300 bg-white">
          <thead className="bg-blue-500 text-white text-sm">
            <tr>
              <th className="p-3 border border-gray-300 text-left">
                <input
                  type="checkbox"
                  onChange={handleSelectAll}
                  checked={
                    visibleData.length > 0 &&
                    visibleData.every((item) => selectedIds.includes(item.customerId))
                  }
                />
              </th>
              <th className="p-3 border border-gray-300 text-left">BRANCH CODE</th>
              <th className="p-3 border border-gray-300 text-left">BRANCH</th>
              <th className="p-3 border border-gray-300 text-left">SCNO</th>
              <th className="p-3 border border-gray-300 text-left">CUSTOMER ID</th>
              <th className="p-3 border border-gray-300 text-left">NAME</th>
              <th className="p-3 border border-gray-300 text-left">MOBILE</th>
              <th className="p-3 border border-gray-300 text-left">DAYS</th>
              <th className="p-3 border border-gray-300 text-left">BALANCE</th>
              <th className="p-3 border border-gray-300 text-left">SENT AT</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-800">
            {visibleData.map((item) => (
              <tr key={item.customerId}>
                <td className="p-3 border border-gray-200">
                  <input
                    type="checkbox"
                    checked={selectedIds.includes(item.customerId)}
                    onChange={() => handleSelect(item.customerId)}
                  />
                </td>
                <td className="p-3 border border-gray-200">{item.branchCode}</td>
                <td className="p-3 border border-gray-200">{item.branch}</td>
                <td className="p-3 border border-gray-200">{item.scno}</td>
                <td className="p-3 border border-gray-200">{item.customerId}</td>
                <td className="p-3 border border-gray-200">{item.name}</td>
                <td className="p-3 border border-gray-200">{item.mobile}</td>
                <td className="p-3 border border-gray-200">{item.days}</td>
                <td className="p-3 border border-gray-200">Rs. {item.balance}</td>
                <td className="p-3 border border-gray-200">{item.sentAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {!showPreview && (
        <div className="w-full max-w-6xl mt-6  flex justify-between items-center text-sm text-gray-700">
          <div>
            Showing {(currentPage - 1) * rowsPerPage + 1} to{" "}
            {Math.min(currentPage * rowsPerPage, data.length)} of {data.length} records
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            >
              Previous
            </button>
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-3 py-1 rounded ${
                  currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-100"
                }`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* Preview Controls */}
      <div className="w-full max-w-6xl mt-4 flex justify-between items-center">
        <div>
          {showPreview && (
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              onClick={() => setShowPreview(false)}
            >
              🔙 Back to Full Table
            </button>
          )}
        </div>
        <div>
          {!showPreview && (
            <button
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 disabled:opacity-50"
              onClick={() => setShowPreview(true)}
              disabled={selectedIds.length === 0}
            >
              👁️ Preview Selected ({selectedIds.length})
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default YesterdayDataTable;
