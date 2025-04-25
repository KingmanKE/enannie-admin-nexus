
import React from 'react';
import { format } from 'date-fns';
import { MoreHorizontal, Check, Clock } from 'lucide-react';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

type User = {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
  dateJoined: string;
  avatar: string;
};

interface UserTableProps {
  users: User[];
  title?: string;
}

export const UserTable = ({ users, title }: UserTableProps) => {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Active':
        return (
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 flex items-center gap-1">
            <Check size={12} /> Active
          </Badge>
        );
      case 'Pending Verification':
        return (
          <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200 flex items-center gap-1">
            <Clock size={12} /> Pending
          </Badge>
        );
      case 'Verified':
        return (
          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 flex items-center gap-1">
            <Check size={12} /> Verified
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
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date Joined</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback className="bg-ennanie-100 text-ennanie-800">
                        {user.name.split(' ').map(part => part[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{user.name}</p>
                      <p className="text-xs text-muted-foreground">{user.email}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className={
                    user.role === 'Parent' 
                      ? 'bg-purple-50 text-purple-700 border-purple-200' 
                      : 'bg-ennanie-50 text-ennanie-700 border-ennanie-200'
                  }>
                    {user.role}
                  </Badge>
                </TableCell>
                <TableCell>{getStatusBadge(user.status)}</TableCell>
                <TableCell>{format(new Date(user.dateJoined), 'MMM d, yyyy')}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal size={16} />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View profile</DropdownMenuItem>
                      <DropdownMenuItem>Edit user</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">Suspend user</DropdownMenuItem>
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
