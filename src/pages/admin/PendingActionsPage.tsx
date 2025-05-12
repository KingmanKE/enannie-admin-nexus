
import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { 
  Badge
} from "@/components/ui/badge";
import { 
  Check, 
  X, 
  Filter, 
  Search,
  Info,
  Clock
} from 'lucide-react';
import { pendingVerifications } from '@/data/adminDashboardData';

// Extended data for pending actions demonstration
const pendingRequests = [
  {
    id: "r1",
    user: "Emma Johnson",
    requestType: "Account Deletion",
    reason: "Privacy concerns",
    date: "2023-05-01T14:32:00",
    status: "Pending Review"
  },
  {
    id: "r2",
    user: "Marcus Lee",
    requestType: "Payment Dispute",
    reason: "Service not provided",
    date: "2023-05-02T10:12:00",
    status: "Pending Review"
  },
  {
    id: "r3",
    user: "Sophia Williams",
    requestType: "Identity Verification Extension",
    reason: "Documents delayed",
    date: "2023-05-03T16:42:00",
    status: "Under Investigation"
  },
  {
    id: "r4",
    user: "Daniel Rodriguez",
    requestType: "Refund Request",
    reason: "Double charge",
    date: "2023-05-03T09:23:00",
    status: "Pending Review"
  },
];

const pendingReports = [
  {
    id: "p1",
    reporter: "Noah Martinez",
    reportedUser: "Alice Thompson",
    reason: "Inappropriate behavior",
    date: "2023-05-02T14:57:00",
    status: "Under Investigation"
  },
  {
    id: "p2",
    reporter: "Olivia Garcia",
    reportedUser: "James Wilson",
    reason: "No-show for appointment",
    date: "2023-05-01T11:25:00",
    status: "Pending Review"
  },
  {
    id: "p3",
    reporter: "Liam Wilson",
    reportedUser: "Sophie Davis",
    reason: "False information in profile",
    date: "2023-04-30T13:15:00",
    status: "Pending Review"
  },
];

const PendingActionsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('verifications');
  
  // Filter data based on search term and active tab
  const getFilteredData = () => {
    switch(activeTab) {
      case 'verifications':
        return pendingVerifications.filter(item => 
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.documentType.toLowerCase().includes(searchTerm.toLowerCase())
        );
      case 'requests':
        return pendingRequests.filter(item => 
          item.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.requestType.toLowerCase().includes(searchTerm.toLowerCase())
        );
      case 'reports':
        return pendingReports.filter(item => 
          item.reporter.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.reportedUser.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.reason.toLowerCase().includes(searchTerm.toLowerCase())
        );
      default:
        return [];
    }
  };

  const filteredData = getFilteredData();

  // Format date to be more readable
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Pending Actions</h1>
          <p className="text-muted-foreground mt-1">
            Review and process pending actions across the platform
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter size={18} className="mr-2" />
            Filter
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Pending Actions
            </CardTitle>
            <div className="relative w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search pending actions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="verifications" onValueChange={setActiveTab}>
            <TabsList className="mb-6">
              <TabsTrigger value="verifications">Verifications</TabsTrigger>
              <TabsTrigger value="requests">User Requests</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
            </TabsList>
            
            <TabsContent value="verifications">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Document Type</TableHead>
                    <TableHead>Submitted Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredData.length > 0 ? (
                    filteredData.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.name}</TableCell>
                        <TableCell>{item.documentType}</TableCell>
                        <TableCell>{formatDate(item.submittedDate)}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">
                            {item.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                              <Info className="h-4 w-4" />
                              <span className="sr-only">View Details</span>
                            </Button>
                            <Button size="sm" variant="outline" className="h-8 w-8 p-0 text-green-600 border-green-200 hover:bg-green-50">
                              <Check className="h-4 w-4" />
                              <span className="sr-only">Approve</span>
                            </Button>
                            <Button size="sm" variant="outline" className="h-8 w-8 p-0 text-red-600 border-red-200 hover:bg-red-50">
                              <X className="h-4 w-4" />
                              <span className="sr-only">Reject</span>
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center py-6 text-muted-foreground">
                        No pending verifications found
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TabsContent>
            
            <TabsContent value="requests">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>User</TableHead>
                    <TableHead>Request Type</TableHead>
                    <TableHead>Reason</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredData.length > 0 ? (
                    filteredData.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.user}</TableCell>
                        <TableCell>{item.requestType}</TableCell>
                        <TableCell>{item.reason}</TableCell>
                        <TableCell>{formatDate(item.date)}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className={item.status === "Under Investigation" 
                            ? "bg-blue-100 text-blue-800 border-blue-200"
                            : "bg-amber-100 text-amber-800 border-amber-200"}>
                            {item.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                              <Info className="h-4 w-4" />
                              <span className="sr-only">View Details</span>
                            </Button>
                            <Button size="sm" variant="outline" className="h-8 w-8 p-0 text-green-600 border-green-200 hover:bg-green-50">
                              <Check className="h-4 w-4" />
                              <span className="sr-only">Approve</span>
                            </Button>
                            <Button size="sm" variant="outline" className="h-8 w-8 p-0 text-red-600 border-red-200 hover:bg-red-50">
                              <X className="h-4 w-4" />
                              <span className="sr-only">Reject</span>
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center py-6 text-muted-foreground">
                        No pending requests found
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TabsContent>
            
            <TabsContent value="reports">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Reporter</TableHead>
                    <TableHead>Reported User</TableHead>
                    <TableHead>Reason</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredData.length > 0 ? (
                    filteredData.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.reporter}</TableCell>
                        <TableCell>{item.reportedUser}</TableCell>
                        <TableCell>{item.reason}</TableCell>
                        <TableCell>{formatDate(item.date)}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className={item.status === "Under Investigation" 
                            ? "bg-blue-100 text-blue-800 border-blue-200"
                            : "bg-amber-100 text-amber-800 border-amber-200"}>
                            {item.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                              <Info className="h-4 w-4" />
                              <span className="sr-only">View Details</span>
                            </Button>
                            <Button size="sm" variant="outline" className="h-8 w-8 p-0 text-green-600 border-green-200 hover:bg-green-50">
                              <Check className="h-4 w-4" />
                              <span className="sr-only">Resolve</span>
                            </Button>
                            <Button size="sm" variant="outline" className="h-8 w-8 p-0 text-red-600 border-red-200 hover:bg-red-50">
                              <X className="h-4 w-4" />
                              <span className="sr-only">Dismiss</span>
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center py-6 text-muted-foreground">
                        No pending reports found
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default PendingActionsPage;
