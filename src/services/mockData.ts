
import { Employee, Review, ReviewCycle, ReviewCategory, ReviewStatus } from "@/types";

// Mock Departments
export const departments = [
  "Engineering",
  "Marketing",
  "Sales",
  "Human Resources",
  "Finance",
  "Product",
  "Design",
  "Customer Support"
];

// Mock Positions
export const positions = [
  "Software Engineer",
  "Marketing Specialist",
  "Sales Representative",
  "HR Manager",
  "Financial Analyst",
  "Product Manager",
  "UI/UX Designer",
  "Support Specialist",
  "Team Lead",
  "Director"
];

// Mock Employees
export const employees: Employee[] = [
  {
    id: "emp-001",
    name: "John Doe",
    position: "Software Engineer",
    department: "Engineering",
    email: "john.doe@company.com",
    avatarUrl: "https://randomuser.me/api/portraits/men/1.jpg",
    hireDate: "2022-03-15"
  },
  {
    id: "emp-002",
    name: "Jane Smith",
    position: "Marketing Specialist",
    department: "Marketing",
    email: "jane.smith@company.com",
    avatarUrl: "https://randomuser.me/api/portraits/women/2.jpg",
    hireDate: "2021-06-22"
  },
  {
    id: "emp-003",
    name: "Michael Johnson",
    position: "Sales Representative",
    department: "Sales",
    email: "michael.johnson@company.com",
    avatarUrl: "https://randomuser.me/api/portraits/men/3.jpg",
    managerId: "emp-007",
    hireDate: "2023-01-10"
  },
  {
    id: "emp-004",
    name: "Emily Brown",
    position: "HR Manager",
    department: "Human Resources",
    email: "emily.brown@company.com",
    avatarUrl: "https://randomuser.me/api/portraits/women/4.jpg",
    hireDate: "2020-11-05"
  },
  {
    id: "emp-005",
    name: "David Wilson",
    position: "Financial Analyst",
    department: "Finance",
    email: "david.wilson@company.com",
    avatarUrl: "https://randomuser.me/api/portraits/men/5.jpg",
    managerId: "emp-008",
    hireDate: "2022-08-30"
  },
  {
    id: "emp-006",
    name: "Sarah Martinez",
    position: "Product Manager",
    department: "Product",
    email: "sarah.martinez@company.com",
    avatarUrl: "https://randomuser.me/api/portraits/women/6.jpg",
    hireDate: "2021-04-18"
  },
  {
    id: "emp-007",
    name: "Robert Taylor",
    position: "Team Lead",
    department: "Sales",
    email: "robert.taylor@company.com",
    avatarUrl: "https://randomuser.me/api/portraits/men/7.jpg",
    hireDate: "2019-10-12"
  },
  {
    id: "emp-008",
    name: "Jennifer Anderson",
    position: "Director",
    department: "Finance",
    email: "jennifer.anderson@company.com",
    avatarUrl: "https://randomuser.me/api/portraits/women/8.jpg",
    hireDate: "2018-05-25"
  },
  {
    id: "emp-009",
    name: "Thomas Clark",
    position: "UI/UX Designer",
    department: "Design",
    email: "thomas.clark@company.com",
    avatarUrl: "https://randomuser.me/api/portraits/men/9.jpg",
    managerId: "emp-012",
    hireDate: "2022-02-14"
  },
  {
    id: "emp-010",
    name: "Lisa Rodriguez",
    position: "Support Specialist",
    department: "Customer Support",
    email: "lisa.rodriguez@company.com",
    avatarUrl: "https://randomuser.me/api/portraits/women/10.jpg",
    managerId: "emp-011",
    hireDate: "2023-03-20"
  },
  {
    id: "emp-011",
    name: "Daniel Lewis",
    position: "Team Lead",
    department: "Customer Support",
    email: "daniel.lewis@company.com",
    avatarUrl: "https://randomuser.me/api/portraits/men/11.jpg",
    hireDate: "2020-09-08"
  },
  {
    id: "emp-012",
    name: "Patricia Hall",
    position: "Director",
    department: "Design",
    email: "patricia.hall@company.com",
    avatarUrl: "https://randomuser.me/api/portraits/women/12.jpg",
    hireDate: "2019-01-15"
  }
];

// Mock Review Categories
export const reviewCategories: ReviewCategory[] = [
  {
    id: "cat-001",
    name: "Technical Skills",
    description: "Assessment of technical capabilities relevant to the role"
  },
  {
    id: "cat-002",
    name: "Communication",
    description: "Ability to communicate effectively with team members and stakeholders"
  },
  {
    id: "cat-003",
    name: "Teamwork",
    description: "Collaboration with others and contribution to team goals"
  },
  {
    id: "cat-004",
    name: "Leadership",
    description: "Guiding others and taking initiative"
  },
  {
    id: "cat-005",
    name: "Problem Solving",
    description: "Analytical thinking and creative problem resolution"
  }
];

// Mock Review Cycles
export const reviewCycles: ReviewCycle[] = [
  {
    id: "cycle-2025-q1",
    name: "Q1 2025 Performance Review",
    startDate: "2025-01-01",
    endDate: "2025-03-31",
    status: "active"
  },
  {
    id: "cycle-2024-q4",
    name: "Q4 2024 Performance Review",
    startDate: "2024-10-01",
    endDate: "2024-12-31",
    status: "completed"
  },
  {
    id: "cycle-2025-q2",
    name: "Q2 2025 Performance Review",
    startDate: "2025-04-01",
    endDate: "2025-06-30",
    status: "pending"
  }
];

// Mock Reviews
export const reviews: Review[] = [
  {
    id: "rev-001",
    employeeId: "emp-001",
    reviewerId: "emp-007",
    periodStart: "2024-10-01",
    periodEnd: "2024-12-31",
    createdAt: "2025-01-05T10:30:00Z",
    updatedAt: "2025-01-10T14:45:00Z",
    submittedAt: "2025-01-10T14:45:00Z",
    status: "completed",
    ratings: [
      { categoryId: "cat-001", categoryName: "Technical Skills", score: 4, maxScore: 5 },
      { categoryId: "cat-002", categoryName: "Communication", score: 3, maxScore: 5 },
      { categoryId: "cat-003", categoryName: "Teamwork", score: 4, maxScore: 5 },
      { categoryId: "cat-004", categoryName: "Leadership", score: 3, maxScore: 5 },
      { categoryId: "cat-005", categoryName: "Problem Solving", score: 4, maxScore: 5 }
    ],
    strengths: "John has excellent technical skills and is a quick learner. He excels at problem solving and is always willing to help others.",
    areasForImprovement: "Could improve on communication, particularly with non-technical stakeholders. Sometimes takes on too much work alone.",
    goals: "Improve documentation of code. Take a leadership role in at least one project in the next quarter.",
    overallComments: "Overall, John is a valuable member of the team with strong technical skills. With some improvement in communication, he could grow into a leadership role.",
    overallRating: 3.6
  },
  {
    id: "rev-002",
    employeeId: "emp-002",
    reviewerId: "emp-008",
    periodStart: "2024-10-01",
    periodEnd: "2024-12-31",
    createdAt: "2025-01-06T09:15:00Z",
    updatedAt: "2025-01-11T16:30:00Z",
    submittedAt: "2025-01-11T16:30:00Z",
    status: "completed",
    ratings: [
      { categoryId: "cat-001", categoryName: "Technical Skills", score: 3, maxScore: 5 },
      { categoryId: "cat-002", categoryName: "Communication", score: 5, maxScore: 5 },
      { categoryId: "cat-003", categoryName: "Teamwork", score: 4, maxScore: 5 },
      { categoryId: "cat-004", categoryName: "Leadership", score: 4, maxScore: 5 },
      { categoryId: "cat-005", categoryName: "Problem Solving", score: 3, maxScore: 5 }
    ],
    strengths: "Jane is exceptional at communication and has built great relationships with clients. She is a natural leader and collaborates well with her team.",
    areasForImprovement: "Technical skills in data analysis could be enhanced. Sometimes struggles with interpreting campaign metrics.",
    goals: "Complete a course on marketing analytics. Lead the upcoming product launch campaign.",
    overallComments: "Jane is a great asset to the marketing team, especially for client-facing activities. With improved analytical skills, she will be an even more rounded marketer.",
    overallRating: 3.8
  },
  {
    id: "rev-003",
    employeeId: "emp-003",
    reviewerId: "emp-007",
    periodStart: "2025-01-01",
    periodEnd: "2025-03-31",
    createdAt: "2025-01-15T11:45:00Z",
    updatedAt: "2025-01-15T11:45:00Z",
    status: "draft",
    ratings: [
      { categoryId: "cat-002", categoryName: "Communication", score: 4, maxScore: 5 },
      { categoryId: "cat-003", categoryName: "Teamwork", score: 3, maxScore: 5 }
    ],
    strengths: "Michael has shown good relationship building with clients.",
    areasForImprovement: "Needs to improve on meeting sales targets consistently.",
    goals: "",
    overallComments: "",
    overallRating: 0
  },
  {
    id: "rev-004",
    employeeId: "emp-005",
    reviewerId: "emp-008",
    periodStart: "2025-01-01",
    periodEnd: "2025-03-31",
    createdAt: "2025-02-01T10:00:00Z",
    updatedAt: "2025-02-15T14:20:00Z",
    status: "pending",
    ratings: [
      { categoryId: "cat-001", categoryName: "Technical Skills", score: 5, maxScore: 5 },
      { categoryId: "cat-002", categoryName: "Communication", score: 3, maxScore: 5 },
      { categoryId: "cat-003", categoryName: "Teamwork", score: 4, maxScore: 5 },
      { categoryId: "cat-004", categoryName: "Leadership", score: 3, maxScore: 5 },
      { categoryId: "cat-005", categoryName: "Problem Solving", score: 5, maxScore: 5 }
    ],
    strengths: "David has exceptional analytical abilities and attention to detail. His technical skills in financial modeling are outstanding.",
    areasForImprovement: "Could improve on presenting financial data to non-financial teams. Sometimes goes too deep into details when a summary would suffice.",
    goals: "Take a course on data visualization. Present at least two financial reports to the executive team in the next quarter.",
    overallComments: "David is extremely valuable for his technical abilities. With some refinement in communication, he could become a key advisor to leadership.",
    overallRating: 4.0
  },
  {
    id: "rev-005",
    employeeId: "emp-009",
    reviewerId: "emp-012",
    periodStart: "2025-01-01",
    periodEnd: "2025-03-31",
    createdAt: "2025-01-20T13:10:00Z",
    updatedAt: "2025-01-20T13:10:00Z",
    status: "draft",
    ratings: [],
    strengths: "",
    areasForImprovement: "",
    goals: "",
    overallComments: "",
    overallRating: 0
  }
];

// Helper function to get the employee name by ID
export const getEmployeeName = (employeeId: string): string => {
  const employee = employees.find(emp => emp.id === employeeId);
  return employee ? employee.name : "Unknown Employee";
};
