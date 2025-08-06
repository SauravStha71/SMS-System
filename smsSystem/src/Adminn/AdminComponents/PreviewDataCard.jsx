import React, { useState } from "react";

const PreviewDataCard = () => {
  const data = [
    { branchCode: 201, branch: "RATNAPARK DC", scno: "201.16.007CHA1KA", customerId: 24, name: "Aisha Kharel", address: "NOADD2", mobile: "9841784738", days: 87, balance: 136, status: "Sent", sentAt: "03-Mar-25" },
    { branchCode: 201, branch: "RATNAPARK DC", scno: "201.18.007CHA1KA", customerId: 136, name: "Ismita Patel", address: "NOADD2", mobile: "9841938463", days: 64, balance: 136, status: "Sent", sentAt: "03-Mar-25" },
    { branchCode: 201, branch: "RATNAPARK DC", scno: "201.19.008CHA1KA", customerId: 89, name: "Roshni Mehra", address: "NOADD2", mobile: "9841859394", days: 136, balance: 136, status: "Sent", sentAt: "03-Mar-25" },
    { branchCode: 203, branch: "LAGANKHEL DC", scno: "203.21.009LAG2", customerId: 312, name: "Rajesh Shrestha", address: "Lalitpur", mobile: "9801234567", days: 42, balance: 200, status: "Sent", sentAt: "01-Apr-25" },
    { branchCode: 204, branch: "NEWROAD DC", scno: "204.22.003NEW3", customerId: 219, name: "Mina Sharma", address: "Kathmandu", mobile: "9812345678", days: 120, balance: 85, status: "Sent", sentAt: "15-Mar-25" },
    { branchCode: 205, branch: "PUTALISADAK DC", scno: "205.24.005PUT1", customerId: 181, name: "Sita Karki", address: "Bhaktapur", mobile: "9847654321", days: 30, balance: 45, status: "Sent", sentAt: "25-Feb-25" },
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

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIds, setSelectedIds] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    minDays: "",
    maxDays: "",
    minBalance: "",
    maxBalance: "",
  });
  const [showPreview, setShowPreview] = useState(false);

  const applyFilters = () => { };

  const resetFilters = () => {
    setFilters({
      minDays: "",
      maxDays: "",
      minBalance: "",
      maxBalance: "",
    });
    setCurrentPage(1);
  };

  const filteredData = data.filter((item) => {
    const days = item.days;
    const balance = item.balance;
    const minDays = filters.minDays ? parseInt(filters.minDays) : -Infinity;
    const maxDays = filters.maxDays ? parseInt(filters.maxDays) : Infinity;
    const minBalance = filters.minBalance ? parseFloat(filters.minBalance) : -Infinity;
    const maxBalance = filters.maxBalance ? parseFloat(filters.maxBalance) : Infinity;

    const matchesFilter = days >= minDays && days <= maxDays && balance >= minBalance && balance <= maxBalance;
    const matchesSearch = Object.values(item).some(value =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    );

    return matchesFilter && matchesSearch;
  });

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const paginatedData = filteredData.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  const toggleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((cid) => cid !== id) : [...prev, id]
    );
  };

  const clearSelection = () => setSelectedIds([]);
  const selectedData = data.filter(item => selectedIds.includes(item.customerId));

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-white p-4">


      {/* Filters Section */}
      <div className="flex justify-end mt-2">
        <div className="w-full space-y-3">


          <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
            {/* Overdue Days Filter */}
            <div className="bg-blue-100 p-3 md:w-[40vw] w-[80vw] text-center  rounded-lg shadow-md">
              <label className="font-semibold text-blue-800 block mb-1">Overdue Days</label>
              <div className="flex items-center justify-center gap-2">
                <input
                  type="number"
                  placeholder="Min"
                  value={filters.minDays}
                  onChange={(e) => setFilters({ ...filters, minDays: e.target.value })}
                  className="border p-1 rounded w-20 text-sm"
                />
                <span className="text-sm text-gray-700">to</span>
                <input
                  type="number"
                  placeholder="Max"
                  value={filters.maxDays}
                  onChange={(e) => setFilters({ ...filters, maxDays: e.target.value })}
                  className="border p-1 rounded w-20 text-sm"
                />
                <button
                  onClick={applyFilters}
                  className="bg-blue-500 text-white px-4 py-1.5 rounded shadow hover:bg-blue-600 text-sm transition"
                >
                  Apply
                </button>
              </div>
            </div>

            {/* Balance Amount Filter */}
            <div className="bg-blue-100 p-3 md:w-[40vw] w-[80vw] text-center  rounded-lg shadow-md">
              <label className="font-semibold text-blue-800 block mb-1">Balance Amount</label>
              <div className="flex justify-center items-center gap-2">
                <input
                  type="number"
                  placeholder="Min"
                  value={filters.minBalance}
                  onChange={(e) => setFilters({ ...filters, minBalance: e.target.value })}
                  className="border p-1 rounded w-20 text-sm"
                />
                <span className="text-sm text-gray-700">to</span>
                <input
                  type="number"
                  placeholder="Max"
                  value={filters.maxBalance}
                  onChange={(e) => setFilters({ ...filters, maxBalance: e.target.value })}
                  className="border p-1 rounded w-20 text-sm"
                />
                <button
                  onClick={applyFilters}
                  className="bg-blue-500 text-white px-4 py-1.5 rounded shadow hover:bg-blue-600 text-sm transition"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>

          {/* Reset Button */}
          <div className="flex justify-end">
            <button
              onClick={resetFilters}
              className="bg-gray-500 text-white px-3 py-1 text-sm rounded hover:bg-gray-600 flex items-center gap-1">
              🔄 Reset Filters
            </button>
          </div>

        </div>
      </div>


      {/* Controls */}
      <div className="w-full max-w-6xl mb-3 flex justify-between items-center bg-white px-4 py-3 rounded shadow">
        <input
          type="text"
          placeholder="🔍 Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded px-2 py-1 text-sm w-56"
        />
        <div className="flex items-center gap-2 text-sm">
          <span className="text-blue-600 font-medium flex items-center">
            ✔ {selectedIds.length} selected
          </span>
          <button
            className="text-red-500 border border-red-400 px-2 py-1 rounded hover:bg-red-100"
            onClick={clearSelection}
          >
            ❌ Clear All
          </button>
        </div>
      </div>


      {/* Show Rows Section */}
      <div className="w-full  space-y-2">
        <div className="flex justify-start items-center gap-2 mb-2">
          <label htmlFor="rowsPerPage" className="text-gray-700 font-medium">Show rows:</label>
          <select id="rowsPerPage" value={rowsPerPage} onChange={(e) => {
            setRowsPerPage(parseInt(e.target.value));
            setCurrentPage(1);
          }} className="border border-gray-300 rounded px-2 py-1">
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
            <option value={filteredData.length}>All</option>
          </select>
        </div>

        <div className="w-full overflow-x-auto border border-gray-300 shadow-md rounded-lg bg-white">
        {/* Table */}
        <table className="min-w-full">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="p-3 border text-center">
                <input
                  type="checkbox"
                  checked={paginatedData.every(item => selectedIds.includes(item.customerId))}
                  onChange={(e) => {
                    if (e.target.checked) {
                      const newSelections = paginatedData
                        .map(item => item.customerId)
                        .filter(id => !selectedIds.includes(id));
                      setSelectedIds([...selectedIds, ...newSelections]);
                    } else {
                      const newSelections = selectedIds.filter(
                        id => !paginatedData.some(item => item.customerId === id)
                      );
                      setSelectedIds(newSelections);
                    }
                  }}
                />
              </th>
              <th className="p-3 border">Branch Code</th>
              <th className="p-3 border">Branch</th>
              <th className="p-3 border">SCNO</th>
              <th className="p-3 border">Customer Id</th>
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Address</th>
              <th className="p-3 border">Mobile</th>
              <th className="p-3 border">Days</th>
              <th className="p-3 border">Balance</th>
              <th className="p-3 border">Status</th>
              <th className="p-3 border">Sent At</th>
            </tr>
          </thead>
          <tbody>
            {(showPreview ? selectedData : paginatedData).map((item) => (
              <tr key={item.customerId} className="even:bg-blue-50">
                <td className="p-3 border text-center">
                  <input type="checkbox" checked={selectedIds.includes(item.customerId)} onChange={() => toggleSelect(item.customerId)} />
                </td>
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
      </div>

      {/* Pagination Controls */}
      <div className="w-full  mt-6 flex justify-between items-center">
        <div className="text-gray-600 text-sm">
          Showing {(currentPage - 1) * rowsPerPage + 1} to {Math.min(currentPage * rowsPerPage, filteredData.length)} of {filteredData.length} records
        </div>
        <div className="flex gap-2">
          <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1} className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50">Prev.</button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-3 py-1 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
            >
              {index + 1}
            </button>
          ))}
          <button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages} className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50">Next</button>
        </div>
      </div>
      <div className="w-full  mt-4 flex justify-between items-center">
        {/* Left Side - Back to Table Button */}
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

        {/* Right Side - Preview Selected Button */}
        <div>
          {!showPreview && (
            <button
              className="bg-green-500 text-right text-white px-4 py-2 rounded hover:bg-green-600 disabled:opacity-50"
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

export default PreviewDataCard;