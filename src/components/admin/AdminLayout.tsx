
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from "@/components/ui/sonner";
import AdminSidebar from './AdminSidebar';
import AdminHeader from './AdminHeader';

const AdminLayout = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <AdminSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminHeader />
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
      <Toaster position="top-right" />
    </div>
  );
};

export default AdminLayout;
