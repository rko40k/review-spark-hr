
export interface Employee {
  id: string;
  name: string;
  position: string;
  department: string;
  email: string;
  avatarUrl?: string;
  managerId?: string;
  hireDate: string;
}

export interface ReviewRating {
  categoryId: string;
  categoryName: string;
  score: number;
  maxScore: number;
}

export type ReviewStatus = 'draft' | 'pending' | 'completed';

export interface Review {
  id: string;
  employeeId: string;
  reviewerId: string;
  periodStart: string;
  periodEnd: string;
  createdAt: string;
  updatedAt: string;
  submittedAt?: string;
  status: ReviewStatus;
  ratings: ReviewRating[];
  strengths: string;
  areasForImprovement: string;
  goals: string;
  overallComments: string;
  overallRating: number;
}

export interface ReviewCategory {
  id: string;
  name: string;
  description: string;
}

export interface ReviewCycle {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  status: 'pending' | 'active' | 'completed';
}
