import React from "react";
import AdminHeader from "../Adminn/AdminPage/AdminHeader";
import ManageUserCard from "../Adminn/AdminComponents/ManageUserCard";

const ManageUser = () =>
{
    return (
        <>
            <AdminHeader />
                  <ManageUserCard
                    users={[
                      { name: "Alice Sharma", email: "alice@example.com", role: "Admin" },
                      { name: "Bikash Thapa", email: "bikash@example.com", role: "User" },
                      { name: "Sita Ram", email: "sita@example.com", role: "Manager" },
                    ]}
                  />
        </>
    );
}

export default ManageUser;