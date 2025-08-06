import React from "react";

const ManageUserCard = ({ users }) => {
  return (
    <div className="min-h-screen flex justify-center pt-8 bg-white">
      <div className="w-full mx-5">
        <div className="overflow-x-auto shadow-lg rounded-lg bg-white">
          <table className="w-full border border-gray-300">
            {/* Table Header */}
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="p-3 border border-gray-300 text-left">Name</th>
                <th className="p-3 border border-gray-300 text-left">Email</th>
                <th className="p-3 border border-gray-300 text-left">Role</th>
                <th className="p-3 border border-gray-300 text-left">Actions</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {users.length > 0 ? (
                users.map((user, index) => (
                  <tr
                    key={index}
                    className={`border ${
                      index % 2 === 1 ? "bg-blue-100" : "bg-white"
                    } hover:bg-green-300 transition-all`}
                  >
                    <td className="p-3 border">{user.name}</td>
                    <td className="p-3 border">{user.email}</td>
                    <td className="p-3 border">{user.role}</td>
                    <td className="p-3 border">
                      <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2">Edit</button>
                      <button className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="p-3 text-center border text-gray-500">
                    No users available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUserCard;
