
import React from 'react';
import { 
  UsersIcon,
  User,
  UserCheck,
  Filter, 
  ArrowDown,
  PlusCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Select,
  SelectContent,
  SelectItem, 
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { UserTable } from '@/components/admin/UserTable';
import { recentUsers } from '@/data/adminDashboardData';

// Mock data for the users page
const allUsers = [
  ...recentUsers,
  {
    id: "u6",
    name: "James Smith",
    email: "james.s@example.com",
    role: "Caregiver",
    status: "Verified",
    dateJoined: "2023-04-16T11:32:00",
    avatar: "",
  },
  {
    id: "u7",
    name: "Isabella Brown",
    email: "isabella.b@example.com",
    role: "Parent",
    status: "Active",
    dateJoined: "2023-04-15T09:54:00",
    avatar: "",
  },
  {
    id: "u8",
    name: "Ethan Davis",
    email: "ethan.d@example.com",
    role: "Caregiver",
    status: "Pending Verification",
    dateJoined: "2023-04-15T08:23:00",
    avatar: "",
  }
];

const parentsOnly = allUsers.filter(user => user.role === "Parent");
const caregiversOnly = allUsers.filter(user => user.role === "Caregiver");

const UsersManagement = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Users Management</h1>
          <p className="text-muted-foreground">Manage all users in the ENNANIE platform</p>
        </div>
        <Button className="sm:self-start">
          <PlusCircle className="mr-2 h-4 w-4" />
          Add User
        </Button>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4 items-end">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Input type="search" placeholder="Search users..." />
            </div>
            
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <div className="flex items-center gap-4">
                <Select defaultValue="all">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="pending">Pending Verification</SelectItem>
                    <SelectItem value="verified">Verified</SelectItem>
                  </SelectContent>
                </Select>
  
                <Button variant="outline" size="icon" className="shrink-0">
                  <Filter size={16} />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="all">
        <div className="flex items-center justify-between mb-4">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="all">
              <UsersIcon className="h-4 w-4 mr-2" />
              All Users
            </TabsTrigger>
            <TabsTrigger value="parents">
              <User className="h-4 w-4 mr-2" />
              Parents
            </TabsTrigger>
            <TabsTrigger value="caregivers">
              <UserCheck className="h-4 w-4 mr-2" />
              Caregivers
            </TabsTrigger>
          </TabsList>
          
          <div className="flex items-center text-sm text-muted-foreground">
            <span className="mr-2">Sort by:</span>
            <Button variant="ghost" size="sm" className="h-7 gap-1">
              Newest 
              <ArrowDown className="h-3 w-3" />
            </Button>
          </div>
        </div>

        <TabsContent value="all" className="mt-0">
          <UserTable users={allUsers} />
        </TabsContent>
        <TabsContent value="parents" className="mt-0">
          <UserTable users={parentsOnly} />
        </TabsContent>
        <TabsContent value="caregivers" className="mt-0">
          <UserTable users={caregiversOnly} />
        </TabsContent>
      </Tabs>

      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          Showing <strong>8</strong> of <strong>120</strong> users
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" disabled>Previous</Button>
          <Button variant="outline" size="sm">1</Button>
          <Button variant="outline" size="sm">2</Button>
          <Button variant="outline" size="sm">3</Button>
          <Button variant="outline" size="sm">Next</Button>
        </div>
      </div>
    </div>
  );
};

export default UsersManagement;
