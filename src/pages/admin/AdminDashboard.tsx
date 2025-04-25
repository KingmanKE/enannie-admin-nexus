
import React from 'react';
import { 
  Users, 
  UserCheck, 
  FileText, 
  MessageSquare, 
  DollarSign,
  User
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StatCard } from '@/components/admin/StatCard';
import { UserTable } from '@/components/admin/UserTable';
import { VerificationTable } from '@/components/admin/VerificationTable';
import { TransactionTable } from '@/components/admin/TransactionTable';
import { dashboardStats, recentUsers, pendingVerifications, recentTransactions } from '@/data/adminDashboardData';

const AdminDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="text-sm text-muted-foreground">
          Last updated: {new Date().toLocaleDateString()} at {new Date().toLocaleTimeString()}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard
          title="Total Users"
          value={dashboardStats.totalUsers.count}
          icon={<Users size={24} />}
          description={dashboardStats.totalUsers.description}
          trend={dashboardStats.totalUsers.trend}
        />
        <StatCard
          title="Active Parents"
          value={dashboardStats.activeParents.count}
          icon={<User size={24} />}
          description={dashboardStats.activeParents.description}
          trend={dashboardStats.activeParents.trend}
        />
        <StatCard
          title="Caregivers"
          value={dashboardStats.registeredCaregivers.count}
          icon={<UserCheck size={24} />}
          description={dashboardStats.registeredCaregivers.description}
          trend={dashboardStats.registeredCaregivers.trend}
        />
        <StatCard
          title="Pending Verifications"
          value={dashboardStats.pendingVerifications.count}
          icon={<FileText size={24} />}
          description={dashboardStats.pendingVerifications.description}
          trend={dashboardStats.pendingVerifications.trend}
          className="bg-amber-50 border-amber-200"
        />
        <StatCard
          title="Active Chats"
          value={dashboardStats.activeChats.count}
          icon={<MessageSquare size={24} />}
          description={dashboardStats.activeChats.description}
          trend={dashboardStats.activeChats.trend}
        />
        <StatCard
          title="Monthly Revenue"
          value={dashboardStats.monthlyRevenue.count}
          icon={<DollarSign size={24} />}
          description={dashboardStats.monthlyRevenue.description}
          trend={dashboardStats.monthlyRevenue.trend}
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Recent Users</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <UserTable users={recentUsers} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Pending Verifications</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <VerificationTable verifications={pendingVerifications} />
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <TransactionTable transactions={recentTransactions} />
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;
