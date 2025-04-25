
import React from 'react';
import { format } from 'date-fns';
import { 
  FileText, 
  MoreHorizontal, 
  CheckCircle, 
  XCircle,
  Clock 
} from 'lucide-react';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

type Verification = {
  id: string;
  userId: string;
  name: string;
  documentType: string;
  submittedDate: string;
  status: string;
};

interface VerificationTableProps {
  verifications: Verification[];
  title?: string;
}

export const VerificationTable = ({ verifications, title }: VerificationTableProps) => {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Pending Review':
        return (
          <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200 flex items-center gap-1">
            <Clock size={12} /> Pending Review
          </Badge>
        );
      case 'In Progress':
        return (
          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 flex items-center gap-1">
            <Clock size={12} /> In Progress
          </Badge>
        );
      case 'Approved':
        return (
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 flex items-center gap-1">
            <CheckCircle size={12} /> Approved
          </Badge>
        );
      case 'Rejected':
        return (
          <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200 flex items-center gap-1">
            <XCircle size={12} /> Rejected
          </Badge>
        );
      default:
        return (
          <Badge variant="outline">{status}</Badge>
        );
    }
  };
  
  return (
    <div className="rounded-md border bg-card">
      {title && (
        <div className="p-4 border-b">
          <h3 className="text-lg font-medium">{title}</h3>
        </div>
      )}
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Document Type</TableHead>
              <TableHead>Submitted Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {verifications.map((verification) => (
              <TableRow key={verification.id}>
                <TableCell>
                  <div className="font-medium">{verification.name}</div>
                  <div className="text-xs text-muted-foreground">ID: {verification.userId}</div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <FileText size={16} className="text-muted-foreground" />
                    {verification.documentType}
                  </div>
                </TableCell>
                <TableCell>{format(new Date(verification.submittedDate), 'MMM d, yyyy')}</TableCell>
                <TableCell>{getStatusBadge(verification.status)}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal size={16} />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View Document</DropdownMenuItem>
                      <DropdownMenuItem className="text-green-600">Approve</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">Reject</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
