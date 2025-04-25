
import React from 'react';
import { Bell, Search, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

const AdminHeader = () => {
  return (
    <header className="bg-white border-b px-6 py-3">
      <div className="flex items-center justify-between">
        <div className="relative w-64">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input 
            type="search"
            placeholder="Search..." 
            className="w-full pl-9 bg-gray-50 border-gray-200 focus:bg-white"
          />
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Button variant="ghost" size="icon" className="rounded-full relative">
              <Bell size={20} />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">
                3
              </Badge>
            </Button>
          </div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative flex items-center gap-2 p-1 pl-2">
                <div className="flex flex-col items-start mr-2">
                  <span className="text-sm font-medium">Admin User</span>
                  <span className="text-xs text-muted-foreground">Super Admin</span>
                </div>
                <Avatar className="h-9 w-9">
                  <AvatarImage src="" alt="Admin User" />
                  <AvatarFallback className="bg-ennanie-500 text-white">AU</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-600">
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
