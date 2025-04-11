
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Employee, Review, ReviewStatus } from "@/types";
import { employees, reviews } from "@/services/mockData";
import { FilterX, Search } from "lucide-react";
import { useState } from "react";

export default function ReviewList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState<string | undefined>();
  const [statusFilter, setStatusFilter] = useState<string | undefined>();
  
  const departments = Array.from(new Set(employees.map(emp => emp.department)));
  
  const filteredReviews = reviews.filter(review => {
    const employee = employees.find(emp => emp.id === review.employeeId);
    if (!employee) return false;
    
    // Apply search filter
    const searchMatch = searchTerm === "" || 
      employee.name.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Apply department filter if selected
    const departmentMatch = !departmentFilter || departmentFilter === "all-departments" || 
      employee.department === departmentFilter;
    
    // Apply status filter if selected
    const statusMatch = !statusFilter || statusFilter === "all-statuses" || 
      review.status === statusFilter;
    
    return searchMatch && departmentMatch && statusMatch;
  });
  
  const clearFilters = () => {
    setSearchTerm("");
    setDepartmentFilter(undefined);
    setStatusFilter(undefined);
  };
  
  const getEmployeeById = (id: string): Employee | undefined => {
    return employees.find(emp => emp.id === id);
  };
  
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Performance Reviews</h1>
        <Button>
          New Review
        </Button>
      </div>
      
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-medium">Filters</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Input 
                placeholder="Search by name..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9"
              />
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            </div>
            
            <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
              <SelectTrigger>
                <SelectValue placeholder="All Departments" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-departments">All Departments</SelectItem>
                {departments.map(dept => (
                  <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger>
                <SelectValue placeholder="All Statuses" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-statuses">All Statuses</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
              </SelectContent>
            </Select>
            
            <Button variant="outline" onClick={clearFilters} className="flex items-center">
              <FilterX className="mr-2 h-4 w-4" />
              Clear Filters
            </Button>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Employee</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Review Period</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Updated</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredReviews.length > 0 ? (
                filteredReviews.map(review => {
                  const employee = getEmployeeById(review.employeeId);
                  if (!employee) return null;
                  
                  return (
                    <TableRow key={review.id} className="cursor-pointer hover:bg-muted/50">
                      <TableCell className="font-medium">{employee.name}</TableCell>
                      <TableCell>{employee.department}</TableCell>
                      <TableCell>{`${new Date(review.periodStart).toLocaleDateString()} - ${new Date(review.periodEnd).toLocaleDateString()}`}</TableCell>
                      <TableCell>
                        <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          review.status === 'draft' ? 'bg-gray-100 text-gray-800' :
                          review.status === 'pending' ? 'bg-blue-100 text-blue-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {review.status.charAt(0).toUpperCase() + review.status.slice(1)}
                        </div>
                      </TableCell>
                      <TableCell>{review.overallRating > 0 ? review.overallRating.toFixed(1) : "-"}</TableCell>
                      <TableCell>{new Date(review.updatedAt).toLocaleDateString()}</TableCell>
                    </TableRow>
                  );
                })
              ) : (
                <TableRow>
                  <TableCell colSpan={6} className="h-24 text-center">
                    No reviews found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
