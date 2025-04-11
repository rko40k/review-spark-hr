
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  BarChart, 
  CheckCircle2, 
  ClipboardList, 
  Clock, 
  Star, 
  Users 
} from "lucide-react";
import { 
  employees, 
  reviewCategories, 
  countReviewsByStatus, 
  getAverageOverallRating, 
  getUpcomingReviews, 
  getAverageByCategoryId 
} from "@/services/taskMockData";
import { 
  Area, 
  AreaChart, 
  Bar, 
  BarChart as RechartsBarChart, 
  CartesianGrid, 
  ResponsiveContainer, 
  Tooltip, 
  XAxis, 
  YAxis 
} from "recharts";
import { Cell } from "@/components/ui/chart";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ReviewStatus } from "@/types";

export default function Dashboard() {
  const draftReviewsCount = countReviewsByStatus("draft");
  const pendingReviewsCount = countReviewsByStatus("pending");
  const completedReviewsCount = countReviewsByStatus("completed");
  const totalReviews = draftReviewsCount + pendingReviewsCount + completedReviewsCount;
  const averageRating = getAverageOverallRating();
  const upcomingReviews = getUpcomingReviews();
  
  const progressByStatus = (status: ReviewStatus) => {
    const count = countReviewsByStatus(status);
    return (count / totalReviews) * 100;
  };
  
  const categoryRatings = reviewCategories.map(category => ({
    name: category.name,
    rating: getAverageByCategoryId(category.id),
    fullScore: 5
  }));
  
  const performanceTrend = [
    { month: 'Jan', average: 3.8 },
    { month: 'Feb', average: 3.9 },
    { month: 'Mar', average: 4.1 },
    { month: 'Apr', average: 4.2 },
    { month: 'May', average: 4.3 },
    { month: 'Jun', average: 4.0 },
    { month: 'Jul', average: 4.2 },
    { month: 'Aug', average: 4.4 },
    { month: 'Sep', average: 4.5 },
    { month: 'Oct', average: 4.6 },
    { month: 'Nov', average: 4.7 },
    { month: 'Dec', average: 4.8 }
  ];
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <div className="text-sm text-muted-foreground">
          <span className="font-medium">Current Review Cycle:</span> 2024 Annual Review
        </div>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Employees</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{employees.length}</div>
            <p className="text-xs text-muted-foreground">
              Across {new Set(employees.map(e => e.department)).size} departments
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Review Completion</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {totalReviews > 0 ? Math.round((completedReviewsCount / totalReviews) * 100) : 0}%
            </div>
            <div className="mt-2">
              <Progress 
                value={(completedReviewsCount / totalReviews) * 100} 
                className="h-2"
              />
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              {completedReviewsCount} of {totalReviews} reviews completed
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{averageRating.toFixed(1)}/5.0</div>
            <div className="flex items-center mt-1">
              {Array.from({ length: 5 }, (_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(averageRating)
                      ? "text-yellow-400 fill-yellow-400"
                      : i < averageRating
                      ? "text-yellow-400 fill-yellow-400 opacity-50"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Based on {completedReviewsCount} completed reviews
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Reviews</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{upcomingReviews.length}</div>
            <p className="text-xs text-muted-foreground">
              Due in the next 30 days
            </p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Review Status</CardTitle>
            <CardDescription>
              Overview of all review progress
            </CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <ResponsiveContainer width="100%" height={300}>
              <RechartsBarChart
                data={[
                  { name: 'Draft', value: draftReviewsCount, color: '#94A3B8' },
                  { name: 'Pending', value: pendingReviewsCount, color: '#0EA5E9' },
                  { name: 'Completed', value: completedReviewsCount, color: '#10B981' }
                ]}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip 
                  formatter={(value) => [`${value} reviews`, 'Count']}
                  labelStyle={{ color: '#1f2937' }}
                  contentStyle={{ backgroundColor: 'white', borderRadius: '0.5rem' }}
                />
                <Bar dataKey="value" fill="color" name="Reviews">
                  {[
                    { name: 'Draft', value: draftReviewsCount, color: '#94A3B8' },
                    { name: 'Pending', value: pendingReviewsCount, color: '#0EA5E9' },
                    { name: 'Completed', value: completedReviewsCount, color: '#10B981' }
                  ].map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </RechartsBarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Performance Trend</CardTitle>
            <CardDescription>
              Average rating over time
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart
                data={performanceTrend}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorAverage" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0EA5E9" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#0EA5E9" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" />
                <YAxis domain={[0, 5]} />
                <Tooltip
                  formatter={(value) => [`${value} / 5`, 'Average Rating']}
                  labelStyle={{ color: '#1f2937' }}
                  contentStyle={{ backgroundColor: 'white', borderRadius: '0.5rem' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="average" 
                  stroke="#0EA5E9" 
                  fillOpacity={1} 
                  fill="url(#colorAverage)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Reviews</CardTitle>
            <CardDescription>
              Reviews due in the next 30 days
            </CardDescription>
          </CardHeader>
          <CardContent>
            {upcomingReviews.length > 0 ? (
              <div className="space-y-4">
                {upcomingReviews.map((review) => {
                  const employee = employees.find(e => e.id === review.employeeId);
                  if (!employee) return null;
                  
                  return (
                    <div key={review.id} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Avatar>
                          <AvatarImage src="/placeholder.svg" alt={employee.name} />
                          <AvatarFallback>
                            {employee.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{employee.name}</p>
                          <p className="text-sm text-muted-foreground">{employee.position}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="text-right mr-4">
                          <p className="text-sm font-medium">
                            {new Date(review.periodEnd).toLocaleDateString()}
                          </p>
                          <p className="text-xs text-muted-foreground">Due date</p>
                        </div>
                        <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                          review.status === 'draft' ? 'bg-gray-100 text-gray-700' :
                          review.status === 'pending' ? 'bg-blue-100 text-blue-700' :
                          'bg-green-100 text-green-700'
                        }`}>
                          {review.status.charAt(0).toUpperCase() + review.status.slice(1)}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-40 text-center">
                <ClipboardList className="h-10 w-10 text-muted-foreground mb-2" />
                <p className="text-muted-foreground">No upcoming reviews due in the next 30 days</p>
              </div>
            )}
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Category Performance</CardTitle>
            <CardDescription>
              Average ratings by evaluation category
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {categoryRatings.map((category) => (
                <div key={category.name} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">{category.name}</p>
                    <p className="text-sm font-medium">{category.rating.toFixed(1)}/5.0</p>
                  </div>
                  <Progress value={(category.rating / category.fullScore) * 100} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
