
import React from 'react';
import { 
  FileText,
  CheckCircle,
  XCircle,
  Filter
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
import { VerificationTable } from '@/components/admin/VerificationTable';
import { pendingVerifications } from '@/data/adminDashboardData';

// Mock data for the verification page
const allVerifications = [
  ...pendingVerifications,
  {
    id: "v5",
    userId: "c015",
    name: "Michael Brown",
    documentType: "Professional Certificate",
    submittedDate: "2023-04-15T16:45:00",
    status: "Approved"
  },
  {
    id: "v6",
    userId: "c023",
    name: "Jennifer Davis",
    documentType: "Background Check",
    submittedDate: "2023-04-14T13:10:00",
    status: "Rejected"
  },
  {
    id: "v7",
    userId: "c037",
    name: "Christopher Wilson",
    documentType: "ID Verification",
    submittedDate: "2023-04-14T10:15:00",
    status: "Approved"
  }
];

const pendingOnly = allVerifications.filter(v => 
  v.status === "Pending Review" || v.status === "In Progress"
);
const approvedOnly = allVerifications.filter(v => v.status === "Approved");
const rejectedOnly = allVerifications.filter(v => v.status === "Rejected");

const VerificationManagement = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Verification Management</h1>
        <p className="text-muted-foreground">Review and manage caregiver document verifications</p>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4 items-end">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Input type="search" placeholder="Search by name or ID..." />
            </div>
            
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <div className="flex items-center gap-4">
                <Select defaultValue="all">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Document type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Document Types</SelectItem>
                    <SelectItem value="id">ID Verification</SelectItem>
                    <SelectItem value="certificate">Professional Certificate</SelectItem>
                    <SelectItem value="background">Background Check</SelectItem>
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
          <TabsList className="grid w-full max-w-md grid-cols-4">
            <TabsTrigger value="all">
              <FileText className="h-4 w-4 mr-2" />
              All
            </TabsTrigger>
            <TabsTrigger value="pending">
              <FileText className="h-4 w-4 mr-2" />
              Pending
            </TabsTrigger>
            <TabsTrigger value="approved">
              <CheckCircle className="h-4 w-4 mr-2" />
              Approved
            </TabsTrigger>
            <TabsTrigger value="rejected">
              <XCircle className="h-4 w-4 mr-2" />
              Rejected
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all" className="mt-0">
          <VerificationTable verifications={allVerifications} />
        </TabsContent>
        <TabsContent value="pending" className="mt-0">
          <VerificationTable verifications={pendingOnly} />
        </TabsContent>
        <TabsContent value="approved" className="mt-0">
          <VerificationTable verifications={approvedOnly} />
        </TabsContent>
        <TabsContent value="rejected" className="mt-0">
          <VerificationTable verifications={rejectedOnly} />
        </TabsContent>
      </Tabs>

      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          Showing <strong>7</strong> of <strong>42</strong> verifications
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

export default VerificationManagement;
