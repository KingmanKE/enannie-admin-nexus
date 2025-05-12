import React from 'react';
import { 
  MessageSquare, 
  Filter, 
  CheckCircle,
  Clock,
  User,
  ArrowDown,
  XCircle,
  MoreHorizontal
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
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

// Mock data for messages page
const messagesData = [
  {
    id: "m1",
    sender: {
      id: "u2",
      name: "Sophie Taylor",
      avatar: "",
      role: "Parent"
    },
    receiver: {
      id: "c1",
      name: "David Johnson",
      avatar: "",
      role: "Caregiver"
    },
    lastMessage: "Hello, I'd like to discuss availability for next week",
    timestamp: "2023-05-01T09:30:00",
    unread: true,
    status: "Active"
  },
  {
    id: "m2",
    sender: {
      id: "u3",
      name: "Emma Wilson",
      avatar: "",
      role: "Parent"
    },
    receiver: {
      id: "c2",
      name: "Maria Garcia",
      avatar: "",
      role: "Caregiver"
    },
    lastMessage: "Thank you for the information. I'll get back to you soon.",
    timestamp: "2023-05-01T11:20:00",
    unread: false,
    status: "Active"
  },
  {
    id: "m3",
    sender: {
      id: "u4",
      name: "James Brown",
      avatar: "",
      role: "Parent"
    },
    receiver: {
      id: "c3",
      name: "Robert Smith",
      avatar: "",
      role: "Caregiver"
    },
    lastMessage: "Could you send me your references?",
    timestamp: "2023-04-30T16:45:00",
    unread: true,
    status: "Active"
  },
  {
    id: "m4",
    sender: {
      id: "c1",
      name: "David Johnson",
      avatar: "",
      role: "Caregiver"
    },
    receiver: {
      id: "u5",
      name: "Olivia Davis",
      avatar: "",
      role: "Parent"
    },
    lastMessage: "I'm available for an interview this Thursday.",
    timestamp: "2023-04-30T14:10:00",
    unread: false,
    status: "Active"
  },
  {
    id: "m5",
    sender: {
      id: "admin",
      name: "System",
      avatar: "",
      role: "Admin"
    },
    receiver: {
      id: "u2",
      name: "Sophie Taylor",
      avatar: "",
      role: "Parent"
    },
    lastMessage: "Your payment has been processed successfully.",
    timestamp: "2023-04-29T10:15:00",
    unread: false,
    status: "Closed"
  }
];

const activeMessages = messagesData.filter(msg => msg.status === 'Active');
const unreadMessages = messagesData.filter(msg => msg.unread);
const resolvedMessages = messagesData.filter(msg => msg.status === 'Closed');

const MessagesManagement = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Message Management</h1>
        <p className="text-muted-foreground">Monitor and manage communication between parents and caregivers</p>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4 items-end">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Input type="search" placeholder="Search by name or message content..." />
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
                    <SelectItem value="unread">Unread</SelectItem>
                    <SelectItem value="resolved">Resolved</SelectItem>
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
              <MessageSquare className="h-4 w-4 mr-2" />
              All
            </TabsTrigger>
            <TabsTrigger value="active">
              <CheckCircle className="h-4 w-4 mr-2" />
              Active
            </TabsTrigger>
            <TabsTrigger value="unread">
              <Clock className="h-4 w-4 mr-2" />
              Unread
            </TabsTrigger>
            <TabsTrigger value="resolved">
              <XCircle className="h-4 w-4 mr-2" />
              Resolved
            </TabsTrigger>
          </TabsList>
          
          <div className="flex items-center text-sm text-muted-foreground">
            <span className="mr-2">Sort by:</span>
            <Button variant="ghost" size="sm" className="h-7 gap-1">
              Recent 
              <ArrowDown className="h-3 w-3" />
            </Button>
          </div>
        </div>

        <TabsContent value="all" className="mt-0">
          <MessageTable messages={messagesData} />
        </TabsContent>
        <TabsContent value="active" className="mt-0">
          <MessageTable messages={activeMessages} />
        </TabsContent>
        <TabsContent value="unread" className="mt-0">
          <MessageTable messages={unreadMessages} />
        </TabsContent>
        <TabsContent value="resolved" className="mt-0">
          <MessageTable messages={resolvedMessages} />
        </TabsContent>
      </Tabs>

      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          Showing <strong>{messagesData.length}</strong> of <strong>{35}</strong> messages
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

// Message Table Component
interface MessageTableProps {
  messages: typeof messagesData;
}

const MessageTable = ({ messages }: MessageTableProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="rounded-md border bg-card">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Participants</TableHead>
              <TableHead>Last Message</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {messages.map((message) => (
              <TableRow key={message.id} className={message.unread ? "bg-muted/30" : ""}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="flex flex-col">
                      <div className="flex items-center gap-1">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={message.sender.avatar} alt={message.sender.name} />
                          <AvatarFallback className="bg-ennanie-100 text-ennanie-800">
                            {message.sender.name.split(' ').map(part => part[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">{message.sender.name}</p>
                          <Badge variant="outline" className={
                            message.sender.role === 'Parent' 
                              ? 'bg-purple-50 text-purple-700 border-purple-200 text-xs' 
                              : 'bg-ennanie-50 text-ennanie-700 border-ennanie-200 text-xs'
                          }>
                            {message.sender.role}
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-1 mt-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={message.receiver.avatar} alt={message.receiver.name} />
                          <AvatarFallback className="bg-gray-100 text-gray-800">
                            {message.receiver.name.split(' ').map(part => part[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">{message.receiver.name}</p>
                          <Badge variant="outline" className={
                            message.receiver.role === 'Parent' 
                              ? 'bg-purple-50 text-purple-700 border-purple-200 text-xs' 
                              : 'bg-ennanie-50 text-ennanie-700 border-ennanie-200 text-xs'
                          }>
                            {message.receiver.role}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-start">
                    <p className={`line-clamp-2 text-sm ${message.unread ? "font-medium" : ""}`}>{message.lastMessage}</p>
                    {message.unread && (
                      <Badge className="ml-2 h-2 w-2 rounded-full bg-blue-500 p-0" />
                    )}
                  </div>
                </TableCell>
                <TableCell className="text-sm">{formatDate(message.timestamp)}</TableCell>
                <TableCell>
                  {message.status === 'Active' ? (
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 flex items-center gap-1">
                      <CheckCircle size={12} /> Active
                    </Badge>
                  ) : (
                    <Badge variant="outline" className="bg-gray-50 text-gray-700 border-gray-200 flex items-center gap-1">
                      <XCircle size={12} /> Closed
                    </Badge>
                  )}
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal size={16} />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View Conversation</DropdownMenuItem>
                      <DropdownMenuItem>Mark as {message.unread ? "Read" : "Unread"}</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">Close Conversation</DropdownMenuItem>
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

export default MessagesManagement;
