export interface Employee {
  employeeSpecialId: string;
  firstName: string;
  middleName: string;
  lastName: string;
  barangay: string;
  street: string;
  city: string;
  province: string;
  country: string;
  zipCode: number;
  emailAddress: string;
  contactNumber: string;
}

export interface Assign_Designation {
  employee: Employee;
  employeeType: string;
  assignmentStatus: string;
  designation: Designation;
}

export interface Designation {
  designationName: string;
  status: string;
  department: Department
}

export interface Department {
  departmentName: string;
  status: string;
}

export interface EmployeeFormProps {
  id: string;
  employeeSpecialId: string;
  firstName: string;
  middleName: string;
  lastName: string;
  barangay: string;
  street: string;
  city: string;
  province: string;
  country: string;
  zipCode: number;
  emailAddress: string;
  contactNumber: string;
  setFirstName: (value: string) => void;
  setMiddleName: (value: string) => void;
  setLastName: (value: string) => void;
  setBarangay: (value: string) => void;
  setStreet: (value: string) => void;
  setCity: (value: string) => void;
  setProvince: (value: string) => void;
  setCountry: (value: string) => void;
  setZipCode: (value: number) => void;
  setEmailAddress: (value: string) => void;
  setContactNumber: (value: string) => void;
}

export interface ErrorModalProps {
  show: boolean;
  message: string;
}

export interface SuccessModalProps {
  show: boolean;
  message: string;
}