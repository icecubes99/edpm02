// EmployeesType.ts

export enum AssignmentStatus {
  Active = "Active",
  Resigned = "Resigned",
  AWOL = "AWOL",
}

export enum EmployeeType {
  Regular = "Regular",
  Contractual = "Contractual",
  Part_Time = "Part_Time",
  Remote = "Remote",
  Intern = "Intern",
  Freelance = "Freelance",
}

export enum Status {
  Active = "Active",
  Inactive = "Inactive",
}

export interface Designation {
  id: string;
  designationName: string;
  status: Status;
  departmentId: string;
}

export interface AssignDesignation {
  id: string;
  employeeId: string;
  employeeType: EmployeeType;
  assignmentStatus: AssignmentStatus;
  designationId: string;
}

export interface Employee {
  id: string;
  employeeSpecialId: string;
  firstName: string;
  middleName: string;
  lastName: string;
  barangay: string;
  street?: string;
  city?: string | null;
  province: string;
  Country: string;
  zipCode: number;
  emailAddress: string;
  contactNumber: string;
  createdAt: Date;
  assignment: AssignDesignation[];
}
