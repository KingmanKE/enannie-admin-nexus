
import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { TransactionTable } from '@/components/admin/TransactionTable';
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from '@/components/ui/pagination';
import { Button } from '@/components/ui/button';
import { 
  CreditCard,
  Download,
  Search,
  Filter
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { recentTransactions } from '@/data/adminDashboardData';

// Extended transaction data for demonstration purposes
const allTransactions = [
  ...recentTransactions,
  {
    id: "t5",
    user: {
      name: "Liam Wilson",
      role: "Parent",
    },
    amount: 200.00,
    date: "2023-04-16T13:22:00",
    status: "Completed",
    service: "Weekend Childcare"
  },
  {
    id: "t6",
    user: {
      name: "Ava Rodriguez",
      role: "Parent",
    },
    amount: 65.00,
    date: "2023-04-16T09:15:00",
    status: "Failed",
    service: "Baby-sitting Session"
  },
  {
    id: "t7",
    user: {
      name: "William Brown",
      role: "Parent",
    },
    amount: 110.00,
    date: "2023-04-15T16:40:00",
    status: "Pending",
    service: "Eldercare Visit"
  },
  {
    id: "t8",
    user: {
      name: "Isabella Garcia",
      role: "Parent",
    },
    amount: 145.00,
    date: "2023-04-15T10:05:00",
    status: "Completed",
    service: "Special Needs Care"
  }
];

const TransactionsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter transactions based on search term
  const filteredTransactions = searchTerm
    ? allTransactions.filter(transaction => 
        transaction.user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        transaction.service.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : allTransactions;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Transaction Management</h1>
          <p className="text-muted-foreground mt-1">
            Monitor and manage all payment transactions
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter size={18} className="mr-2" />
            Filter
          </Button>
          <Button variant="outline">
            <Download size={18} className="mr-2" />
            Export
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl flex items-center gap-2">
              <CreditCard className="h-5 w-5" />
              All Transactions
            </CardTitle>
            <div className="relative w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search transactions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <TransactionTable transactions={filteredTransactions} />
        </CardContent>
      </Card>

      <div className="flex justify-center">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default TransactionsPage;
