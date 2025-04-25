
import React from 'react';
import { format } from 'date-fns';
import { 
  MoreHorizontal, 
  CheckCircle, 
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

type Transaction = {
  id: string;
  user: {
    name: string;
    role: string;
  };
  amount: number;
  date: string;
  status: string;
  service: string;
};

interface TransactionTableProps {
  transactions: Transaction[];
  title?: string;
}

export const TransactionTable = ({ transactions, title }: TransactionTableProps) => {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Completed':
        return (
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 flex items-center gap-1">
            <CheckCircle size={12} /> Completed
          </Badge>
        );
      case 'Pending':
        return (
          <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200 flex items-center gap-1">
            <Clock size={12} /> Pending
          </Badge>
        );
      case 'Failed':
        return (
          <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200 flex items-center gap-1">
            ❌ Failed
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
              <TableHead>User</TableHead>
              <TableHead>Service</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell>
                  <div className="font-medium">{transaction.user.name}</div>
                  <div className="text-xs text-muted-foreground">{transaction.user.role}</div>
                </TableCell>
                <TableCell>{transaction.service}</TableCell>
                <TableCell className="font-medium">${transaction.amount.toFixed(2)}</TableCell>
                <TableCell>{format(new Date(transaction.date), 'MMM d, yyyy')}</TableCell>
                <TableCell>{getStatusBadge(transaction.status)}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal size={16} />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem>Download Receipt</DropdownMenuItem>
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
