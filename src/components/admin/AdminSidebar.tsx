
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import {
  Users,
  FileText,
  MessageSquare,
  CreditCard,
  BarChart,
  Settings,
  LogOut,
  Home,
  Shield,
  Clock,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  to: string;
  isActive: boolean;
}

const SidebarItem = ({ icon, label, to, isActive }: SidebarItemProps) => (
  <Link to={to}>
    <Button
      variant="ghost"
      className={cn(
        "w-full justify-start gap-3 mb-1 font-medium",
        isActive ? "bg-ennanie-100 text-ennanie-800" : "hover:bg-ennanie-50"
      )}
    >
      {icon}
      {label}
    </Button>
  </Link>
);

const AdminSidebar = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen w-64 border-r bg-white shadow-sm py-6 px-3 flex flex-col">
      <div className="px-3 mb-8">
        <h1 className="text-2xl font-bold text-ennanie-800 flex items-center gap-2">
          <Shield className="h-6 w-6 text-ennanie-600" />
          ENNANIE Admin
        </h1>
      </div>
      
      <div className="space-y-6 flex-1">
        <div>
          <h2 className="text-xs uppercase text-gray-500 font-semibold px-3 mb-2">Overview</h2>
          <SidebarItem 
            icon={<Home size={18} />} 
            label="Dashboard" 
            to="/admin" 
            isActive={isActive("/admin")} 
          />
        </div>
        
        <div>
          <h2 className="text-xs uppercase text-gray-500 font-semibold px-3 mb-2">Management</h2>
          <SidebarItem 
            icon={<Users size={18} />} 
            label="Users" 
            to="/admin/users" 
            isActive={isActive("/admin/users")} 
          />
          <SidebarItem 
            icon={<FileText size={18} />} 
            label="Verification" 
            to="/admin/verification" 
            isActive={isActive("/admin/verification")} 
          />
          <SidebarItem 
            icon={<Clock size={18} />} 
            label="Pending Actions" 
            to="/admin/pending" 
            isActive={isActive("/admin/pending")} 
          />
        </div>
        
        <div>
          <h2 className="text-xs uppercase text-gray-500 font-semibold px-3 mb-2">Communication</h2>
          <SidebarItem 
            icon={<MessageSquare size={18} />} 
            label="Messages" 
            to="/admin/messages" 
            isActive={isActive("/admin/messages")} 
          />
        </div>
        
        <div>
          <h2 className="text-xs uppercase text-gray-500 font-semibold px-3 mb-2">Finance</h2>
          <SidebarItem 
            icon={<CreditCard size={18} />} 
            label="Transactions" 
            to="/admin/transactions" 
            isActive={isActive("/admin/transactions")} 
          />
        </div>
        
        <div>
          <h2 className="text-xs uppercase text-gray-500 font-semibold px-3 mb-2">Reports</h2>
          <SidebarItem 
            icon={<BarChart size={18} />} 
            label="Analytics" 
            to="/admin/analytics" 
            isActive={isActive("/admin/analytics")} 
          />
        </div>
      </div>

      <div className="mt-auto space-y-2 pt-6 border-t">
        <SidebarItem 
          icon={<Settings size={18} />} 
          label="Settings" 
          to="/admin/settings" 
          isActive={isActive("/admin/settings")} 
        />
        <Button variant="ghost" className="w-full justify-start gap-3 text-gray-500 hover:text-red-600 hover:bg-red-50">
          <LogOut size={18} />
          Logout
        </Button>
      </div>
    </div>
  );
};

export default AdminSidebar;
