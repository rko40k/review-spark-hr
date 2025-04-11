
import { Employee, Review, ReviewCategory, ReviewCycle } from "@/types";

// Mock Departments
export const departments = [
  "Engineering",
  "Marketing",
  "Sales",
  "Customer Support",
  "Product",
  "Design",
  "Human Resources",
  "Finance",
  "Operations",
];

// Mock Positions
export const positions = [
  "Software Engineer",
  "Senior Software Engineer",
  "Product Manager",
  "UX Designer",
  "Marketing Specialist",
  "Sales Representative",
  "Customer Success Manager",
  "HR Manager",
  "Financial Analyst",
  "Operations Manager",
];

// Mock Review Categories
export const reviewCategories: ReviewCategory[] = [
  {
    id: "cat1",
    name: "Job Knowledge",
    description: "Understanding of job responsibilities and technical skills",
  },
  {
    id: "cat2",
    name: "Quality of Work",
    description: "Accuracy, thoroughness, and effectiveness of work output",
  },
  {
    id: "cat3",
    name: "Productivity",
    description: "Amount of work produced and efficiency in task completion",
  },
  {
    id: "cat4",
    name: "Communication",
    description: "Clarity, effectiveness, and appropriateness of communication",
  },
  {
    id: "cat5",
    name: "Teamwork",
    description: "Ability to work with others and contribute to team goals",
  },
  {
    id: "cat6",
    name: "Initiative",
    description: "Self-direction, motivation, and proactive problem-solving",
  },
  {
    id: "cat7",
    name: "Adaptability",
    description: "Response to change and ability to learn new skills",
  },
  {
    id: "cat8",
    name: "Leadership",
    description: "Ability to guide, motivate, and develop others",
  },
];

// Mock Employees
export const employees: Employee[] = [
  {
    id: "emp1",
    name: "Alex Johnson",
    position: "Senior Software Engineer",
    department: "Engineering",
    email: "alex.johnson@company.com",
    hireDate: "2020-03-15",
  },
  {
    id: "emp2",
    name: "Taylor Smith",
    position: "Product Manager",
    department: "Product",
    email: "taylor.smith@company.com",
    hireDate: "2019-06-22",
  },
  {
    id: "emp3",
    name: "Jordan Brown",
    position: "UX Designer",
    department: "Design",
    email: "jordan.brown@company.com",
    hireDate: "2021-01-10",
  },
  {
    id: "emp4",
    name: "Sam Wilson",
    position: "Marketing Specialist",
    department: "Marketing",
    email: "sam.wilson@company.com",
    hireDate: "2022-02-05",
  },
  {
    id: "emp5",
    name: "Casey Lee",
    position: "Sales Representative",
    department: "Sales",
    email: "casey.lee@company.com",
    hireDate: "2020-11-18",
  },
  {
    id: "emp6",
    name: "Morgan Davis",
    position: "Customer Success Manager",
    department: "Customer Support",
    email: "morgan.davis@company.com",
    hireDate: "2021-07-30",
  },
  {
    id: "emp7",
    name: "Riley Martinez",
    position: "Software Engineer",
    department: "Engineering",
    email: "riley.martinez@company.com",
    hireDate: "2022-04-12",
  },
  {
    id: "emp8",
    name: "Avery Thompson",
    position: "HR Manager",
    department: "Human Resources",
    email: "avery.thompson@company.com",
    hireDate: "2019-09-08",
  },
];

// Mock Review Cycles
export const reviewCycles: ReviewCycle[] = [
  {
    id: "cycle1",
    name: "Q1 2025 Review",
    startDate: "2025-01-01",
    endDate: "2025-03-31",
    status: "pending",
  },
  {
    id: "cycle2",
    name: "2024 Annual Review",
    startDate: "2024-01-01",
    endDate: "2024-12-31",
    status: "active",
  },
  {
    id: "cycle3",
    name: "Q4 2024 Review",
    startDate: "2024-10-01",
    endDate: "2024-12-31",
    status: "active",
  },
  {
    id: "cycle4",
    name: "H2 2024 Review",
    startDate: "2024-07-01",
    endDate: "2024-12-31",
    status: "active",
  },
  {
    id: "cycle5",
    name: "Q3 2024 Review",
    startDate: "2024-07-01",
    endDate: "2024-09-30",
    status: "completed",
  },
];

// Mock Reviews
export const reviews: Review[] = [
  {
    id: "rev1",
    employeeId: "emp1",
    reviewerId: "emp8",
    periodStart: "2024-01-01",
    periodEnd: "2024-03-31",
    createdAt: "2024-04-02",
    updatedAt: "2024-04-05",
    submittedAt: "2024-04-05",
    status: "completed",
    ratings: [
      { categoryId: "cat1", categoryName: "Job Knowledge", score: 4, maxScore: 5 },
      { categoryId: "cat2", categoryName: "Quality of Work", score: 5, maxScore: 5 },
      { categoryId: "cat3", categoryName: "Productivity", score: 4, maxScore: 5 },
      { categoryId: "cat4", categoryName: "Communication", score: 4, maxScore: 5 },
      { categoryId: "cat5", categoryName: "Teamwork", score: 5, maxScore: 5 },
      { categoryId: "cat6", categoryName: "Initiative", score: 4, maxScore: 5 },
      { categoryId: "cat7", categoryName: "Adaptability", score: 4, maxScore: 5 },
      { categoryId: "cat8", categoryName: "Leadership", score: 3, maxScore: 5 },
    ],
    strengths: "Alex has exceptional technical skills and consistently delivers high-quality code. He's also an excellent team player who helps junior developers.",
    areasForImprovement: "Could take on more leadership responsibilities and improve documentation practices.",
    goals: "Complete the advanced cloud certification. Lead the migration of legacy systems to the new architecture.",
    overallComments: "Alex is a valuable team member who consistently exceeds expectations in technical areas. With some focus on leadership skills, he could be ready for a tech lead position.",
    overallRating: 4.1,
  },
  {
    id: "rev2",
    employeeId: "emp2",
    reviewerId: "emp8",
    periodStart: "2024-01-01",
    periodEnd: "2024-03-31",
    createdAt: "2024-04-02",
    updatedAt: "2024-04-06",
    submittedAt: "2024-04-06",
    status: "completed",
    ratings: [
      { categoryId: "cat1", categoryName: "Job Knowledge", score: 5, maxScore: 5 },
      { categoryId: "cat2", categoryName: "Quality of Work", score: 4, maxScore: 5 },
      { categoryId: "cat3", categoryName: "Productivity", score: 4, maxScore: 5 },
      { categoryId: "cat4", categoryName: "Communication", score: 5, maxScore: 5 },
      { categoryId: "cat5", categoryName: "Teamwork", score: 5, maxScore: 5 },
      { categoryId: "cat6", categoryName: "Initiative", score: 5, maxScore: 5 },
      { categoryId: "cat7", categoryName: "Adaptability", score: 4, maxScore: 5 },
      { categoryId: "cat8", categoryName: "Leadership", score: 5, maxScore: 5 },
    ],
    strengths: "Taylor is excellent at stakeholder management and feature prioritization. Communication skills are outstanding.",
    areasForImprovement: "Could benefit from more technical knowledge to better understand engineering constraints.",
    goals: "Complete a technical product management course. Lead the development of the new product roadmap.",
    overallComments: "Taylor is an exceptional product manager who balances business needs with technical constraints effectively. The team consistently delivers on time due to her clear requirements and prioritization.",
    overallRating: 4.6,
  },
  {
    id: "rev3",
    employeeId: "emp3",
    reviewerId: "emp8",
    periodStart: "2024-01-01",
    periodEnd: "2024-03-31",
    createdAt: "2024-04-02",
    updatedAt: "2024-04-03",
    status: "draft",
    ratings: [
      { categoryId: "cat1", categoryName: "Job Knowledge", score: 4, maxScore: 5 },
      { categoryId: "cat2", categoryName: "Quality of Work", score: 5, maxScore: 5 },
      { categoryId: "cat3", categoryName: "Productivity", score: 3, maxScore: 5 },
      { categoryId: "cat4", categoryName: "Communication", score: 4, maxScore: 5 },
      { categoryId: "cat5", categoryName: "Teamwork", score: 4, maxScore: 5 },
      { categoryId: "cat6", categoryName: "Initiative", score: 3, maxScore: 5 },
      { categoryId: "cat7", categoryName: "Adaptability", score: 4, maxScore: 5 },
      { categoryId: "cat8", categoryName: "Leadership", score: 3, maxScore: 5 },
    ],
    strengths: "Jordan creates beautiful, intuitive designs and has excellent attention to detail.",
    areasForImprovement: "Could improve on meeting deadlines and taking more initiative on projects.",
    goals: "Improve design system documentation. Take lead on redesigning the mobile experience.",
    overallComments: "Jordan is a talented designer who creates great work. With some improvement in productivity and initiative, could become a senior designer.",
    overallRating: 3.8,
  },
  {
    id: "rev4",
    employeeId: "emp4",
    reviewerId: "emp8",
    periodStart: "2024-01-01",
    periodEnd: "2024-03-31",
    createdAt: "2024-04-02",
    status: "draft",
    ratings: [
      { categoryId: "cat1", categoryName: "Job Knowledge", score: 3, maxScore: 5 },
      { categoryId: "cat2", categoryName: "Quality of Work", score: 4, maxScore: 5 },
      { categoryId: "cat3", categoryName: "Productivity", score: 4, maxScore: 5 },
      { categoryId: "cat4", categoryName: "Communication", score: 5, maxScore: 5 },
      { categoryId: "cat5", categoryName: "Teamwork", score: 5, maxScore: 5 },
      { categoryId: "cat6", categoryName: "Initiative", score: 4, maxScore: 5 },
      { categoryId: "cat7", categoryName: "Adaptability", score: 4, maxScore: 5 },
      { categoryId: "cat8", categoryName: "Leadership", score: 3, maxScore: 5 },
    ],
    strengths: "",
    areasForImprovement: "",
    goals: "",
    overallComments: "",
    overallRating: 0,
  },
  {
    id: "rev5",
    employeeId: "emp5",
    reviewerId: "emp8",
    periodStart: "2024-01-01",
    periodEnd: "2024-03-31",
    createdAt: "2024-04-02",
    updatedAt: "2024-04-07",
    submittedAt: "2024-04-07",
    status: "completed",
    ratings: [
      { categoryId: "cat1", categoryName: "Job Knowledge", score: 4, maxScore: 5 },
      { categoryId: "cat2", categoryName: "Quality of Work", score: 4, maxScore: 5 },
      { categoryId: "cat3", categoryName: "Productivity", score: 5, maxScore: 5 },
      { categoryId: "cat4", categoryName: "Communication", score: 5, maxScore: 5 },
      { categoryId: "cat5", categoryName: "Teamwork", score: 4, maxScore: 5 },
      { categoryId: "cat6", categoryName: "Initiative", score: 5, maxScore: 5 },
      { categoryId: "cat7", categoryName: "Adaptability", score: 4, maxScore: 5 },
      { categoryId: "cat8", categoryName: "Leadership", score: 4, maxScore: 5 },
    ],
    strengths: "Casey consistently exceeds sales targets and has excellent relationship building skills with clients.",
    areasForImprovement: "Could improve knowledge of technical product details to better address client questions.",
    goals: "Complete product training for new offerings. Develop 3 new enterprise clients this quarter.",
    overallComments: "Casey is a top performer who consistently brings in new business. With more product knowledge, could move into a senior sales or account management role.",
    overallRating: 4.4,
  },
];

// Helper function to get reviews by employee ID
export const getReviewsByEmployeeId = (employeeId: string): Review[] => {
  return reviews.filter((review) => review.employeeId === employeeId);
};

// Helper function to get employee by ID
export const getEmployeeById = (employeeId: string): Employee | undefined => {
  return employees.find((employee) => employee.id === employeeId);
};

// Helper function to get review by ID
export const getReviewById = (reviewId: string): Review | undefined => {
  return reviews.find((review) => review.id === reviewId);
};

// Helper function to count reviews by status
export const countReviewsByStatus = (status: ReviewStatus): number => {
  return reviews.filter((review) => review.status === status).length;
};

// Helper function to get upcoming reviews (within next 30 days)
export const getUpcomingReviews = (): Review[] => {
  const today = new Date();
  const thirtyDaysFromNow = new Date();
  thirtyDaysFromNow.setDate(today.getDate() + 30);
  
  return reviews.filter((review) => {
    const endDate = new Date(review.periodEnd);
    return endDate >= today && endDate <= thirtyDaysFromNow && review.status !== 'completed';
  });
};

// Calculate average rating across all completed reviews
export const getAverageOverallRating = (): number => {
  const completedReviews = reviews.filter(review => review.status === 'completed');
  if (completedReviews.length === 0) return 0;
  
  const sum = completedReviews.reduce((acc, review) => acc + review.overallRating, 0);
  return Number((sum / completedReviews.length).toFixed(1));
};

// Calculate average rating by category
export const getAverageByCategoryId = (categoryId: string): number => {
  const relevantRatings = reviews
    .filter(review => review.status === 'completed')
    .flatMap(review => review.ratings)
    .filter(rating => rating.categoryId === categoryId);
  
  if (relevantRatings.length === 0) return 0;
  
  const sum = relevantRatings.reduce((acc, rating) => acc + rating.score, 0);
  return Number((sum / relevantRatings.length).toFixed(1));
};
