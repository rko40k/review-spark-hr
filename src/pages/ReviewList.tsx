
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Link } from "react-router-dom";
import { employees, reviews } from "@/services/mockData";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  CheckCircle2, 
  Clock, 
  Edit, 
  PenLine, 
  PlusCircle, 
  Search, 
  Star
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ReviewStatus } from "@/types";

export default function ReviewList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<ReviewStatus | "">("");
  
  const filteredReviews = reviews.filter(review => {
    const employee = employees.find(e => e.id === review.employeeId);
    const employeeName = employee?.name || "";
    
    const matchesSearch = employeeName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "" || review.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Performance Reviews</h1>
        <Button>
          <PlusCircle className="h-4 w-4 mr-2" />
          Start New Review
        </Button>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>All Reviews</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="w-full md:w-2/3 relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by employee name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
            <div className="w-full md:w-1/3">
              <Select
                value={statusFilter}
                onValueChange={(value) => setStatusFilter(value as ReviewStatus | "")}
              >
                <SelectTrigger>
                  <SelectValue placeholder="All Statuses" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Statuses</SelectItem>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Employee</TableHead>
                  <TableHead>Period</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Last Updated</TableHead>
                  <TableHead>Rating</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredReviews.length > 0 ? (
                  filteredReviews.map((review) => {
                    const employee = employees.find(e => e.id === review.employeeId);
                    
                    return (
                      <TableRow key={review.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarImage src="/placeholder.svg" alt={employee?.name} />
                              <AvatarFallback>
                                {employee?.name.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">{employee?.name}</p>
                              <p className="text-xs text-muted-foreground">{employee?.position}</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm">
                            {new Date(review.periodStart).toLocaleDateString()} - {new Date(review.periodEnd).toLocaleDateString()}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className={`${
                              review.status === 'draft'
                                ? 'bg-gray-100 text-gray-700 hover:bg-gray-100'
                                : review.status === 'pending'
                                ? 'bg-blue-100 text-blue-700 hover:bg-blue-100'
                                : 'bg-green-100 text-green-700 hover:bg-green-100'
                            }`}
                          >
                            <div className="flex items-center gap-1">
                              {review.status === 'draft' ? (
                                <PenLine className="h-3 w-3" />
                              ) : review.status === 'pending' ? (
                                <Clock className="h-3 w-3" />
                              ) : (
                                <CheckCircle2 className="h-3 w-3" />
                              )}
                              <span>
                                {review.status.charAt(0).toUpperCase() + review.status.slice(1)}
                              </span>
                            </div>
                          </Badge>
                        </TableCell>
                        <TableCell>
                          {review.updatedAt 
                            ? new Date(review.updatedAt).toLocaleDateString() 
                            : new Date(review.createdAt).toLocaleDateString()}
                        </TableCell>
                        <TableCell>
                          {review.status === 'completed' ? (
                            <div className="flex items-center">
                              <div className="mr-2">{review.overallRating.toFixed(1)}</div>
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            </div>
                          ) : (
                            <span className="text-muted-foreground text-sm">N/A</span>
                          )}
                        </TableCell>
                        <TableCell className="text-right">
                          <Link to={`/review/${review.id}`}>
                            <Button 
                              variant={review.status === 'draft' ? 'default' : 'outline'} 
                              size="sm"
                            >
                              {review.status === 'draft' ? (
                                <>
                                  <Edit className="h-3.5 w-3.5 mr-1" />
                                  Edit
                                </>
                              ) : (
                                'View'
                              )}
                            </Button>
                          </Link>
                        </TableCell>
                      </TableRow>
                    );
                  })
                ) : (
                  <TableRow>
                    <TableCell colSpan={6} className="h-24 text-center">
                      No reviews found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
