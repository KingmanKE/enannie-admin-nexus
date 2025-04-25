
export const dashboardStats = {
  totalUsers: {
    count: 2546,
    trend: {
      value: 12.8,
      isPositive: true,
    },
    description: "Total registered users",
  },
  activeParents: {
    count: 1235,
    trend: {
      value: 8.3,
      isPositive: true,
    },
    description: "Parents seeking care",
  },
  registeredCaregivers: {
    count: 1311,
    trend: {
      value: 18.4,
      isPositive: true,
    },
    description: "Registered caregivers",
  },
  pendingVerifications: {
    count: 87,
    trend: {
      value: 2.5,
      isPositive: false,
    },
    description: "Pending document verifications",
  },
  activeChats: {
    count: 342,
    trend: {
      value: 24.1,
      isPositive: true,
    },
    description: "Active conversations",
  },
  monthlyRevenue: {
    count: "$32,450",
    trend: {
      value: 6.4,
      isPositive: true,
    },
    description: "Monthly transactions",
  },
};

export const recentUsers = [
  {
    id: "u1",
    name: "Emma Johnson",
    email: "emma.j@example.com",
    role: "Parent",
    status: "Active",
    dateJoined: "2023-04-18T14:32:00",
    avatar: "",
  },
  {
    id: "u2",
    name: "Marcus Lee",
    email: "marcus.lee@example.com",
    role: "Caregiver",
    status: "Pending Verification",
    dateJoined: "2023-04-18T10:12:00",
    avatar: "",
  },
  {
    id: "u3",
    name: "Sophia Williams",
    email: "sophia.w@example.com",
    role: "Parent",
    status: "Active",
    dateJoined: "2023-04-17T16:42:00",
    avatar: "",
  },
  {
    id: "u4",
    name: "Daniel Rodriguez",
    email: "daniel.r@example.com",
    role: "Caregiver",
    status: "Verified",
    dateJoined: "2023-04-17T09:23:00",
    avatar: "",
  },
  {
    id: "u5",
    name: "Olivia Garcia",
    email: "olivia.g@example.com",
    role: "Parent",
    status: "Active",
    dateJoined: "2023-04-16T14:57:00",
    avatar: "",
  }
];

export const pendingVerifications = [
  {
    id: "v1",
    userId: "c001",
    name: "Marcus Lee",
    documentType: "Professional Certificate",
    submittedDate: "2023-04-18T10:12:00",
    status: "Pending Review"
  },
  {
    id: "v2",
    userId: "c034",
    name: "Jasmine Patel",
    documentType: "Background Check",
    submittedDate: "2023-04-17T15:23:00",
    status: "Pending Review"
  },
  {
    id: "v3",
    userId: "c021",
    name: "Robert Thompson",
    documentType: "ID Verification",
    submittedDate: "2023-04-16T11:45:00",
    status: "In Progress"
  },
  {
    id: "v4",
    userId: "c042",
    name: "Sarah Wilson",
    documentType: "Professional Certificate",
    submittedDate: "2023-04-16T09:30:00",
    status: "Pending Review"
  }
];

export const recentTransactions = [
  {
    id: "t1",
    user: {
      name: "Emma Johnson",
      role: "Parent",
    },
    amount: 120.00,
    date: "2023-04-18T16:23:00",
    status: "Completed",
    service: "Weekly Childcare"
  },
  {
    id: "t2",
    user: {
      name: "Sophia Williams",
      role: "Parent",
    },
    amount: 95.50,
    date: "2023-04-18T12:05:00",
    status: "Completed",
    service: "Eldercare Session"
  },
  {
    id: "t3",
    user: {
      name: "Olivia Garcia",
      role: "Parent",
    },
    amount: 150.00,
    date: "2023-04-17T15:48:00",
    status: "Pending",
    service: "Special Needs Care"
  },
  {
    id: "t4",
    user: {
      name: "Noah Martinez",
      role: "Parent",
    },
    amount: 85.00,
    date: "2023-04-17T09:12:00",
    status: "Completed",
    service: "Childcare Session"
  }
];
