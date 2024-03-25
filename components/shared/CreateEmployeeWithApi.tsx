"use client";

import { useRouter } from 'next/navigation';
import React, { ChangeEvent, useState } from 'react'
import DesignationsSelection from '../ui/DesignationsSelection';

const CreateEmployeeWithApi = () => {
  const[formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    emailAddress: '',
    contactNumber: '',
    employeeSpecialId: '',
    street: '',
    barangay: '',
    city: '',
    province: '',
    Country: '',
    zipCode: '',

    employeeType: '',
    assignmentStatus: '',
    designationId: ''
  })
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  const handleInputChange = (e:ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prevData) => (
      {
        ...prevData,
        [e.target.name]: e.target.value
      }
    ));

    console.log(formData);
  }
  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.emailAddress || !formData.contactNumber || !formData.employeeSpecialId || !formData.street || !formData.barangay || !formData.city || !formData.province || !formData.Country || !formData.zipCode) {
      setError("Please fill in all fields");
      return;
    }
    setError(null);
    setIsLoading(true);

    try{
      const response = await fetch('/api/employee', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          // ...formData,
          zipCode: Number(formData.zipCode),
          firstName: formData.firstName,
          middleName: formData.middleName,
          lastName: formData.lastName,
          emailAddress: formData.emailAddress,
          contactNumber: formData.contactNumber,
          employeeSpecialId: formData.employeeSpecialId,
          street: formData.street,
          barangay: formData.barangay,
          city: formData.city,
          province: formData.province,
          Country: formData.Country,

        })
      });

      if(!response.ok) {
        throw new Error('Something went wrong');
      } else {
        const employee = await response.json();
        const assignmentResponse = await fetch('/api/assign_designation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          employeeId: employee.id,
          employeeType: formData.employeeType,
          assignmentStatus: formData.assignmentStatus,
          designationId: formData.designationId
        })
      });

      if (!assignmentResponse.ok) {
        throw new Error('Failed to assign designation');
      }
        router.push('/employeeManagement')  
      }
    } catch (error) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
        <h1 className="text-2xl font-bold ml-10 mt-10">ADD EMPLOYEES</h1>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <input 
          type="text"  
          name="firstName"
          value={formData.firstName}
          placeholder='First Name'
          onChange={handleInputChange}
          className='w-full p-2 border border-gray-200 bg-indigo-50 '
        /> 
        <input 
          type="text"  
          name="middleName"
          value={formData.middleName}
          placeholder='Middle Name'
          onChange={handleInputChange}
          className='w-full p-2 border border-gray-200 bg-indigo-50 '
        /> 
        <input 
          type="text"  
          name="lastName"
          value={formData.lastName}
          placeholder='Last Name'
          onChange={handleInputChange}
          className='w-full p-2 border border-gray-200 bg-indigo-50 '
        /> 

        <input 
          type="text"  
          name="employeeSpecialId"
          value={formData.employeeSpecialId}
          placeholder='Employee ID'
          onChange={handleInputChange}
          className='w-full p-2 border border-gray-200 bg-indigo-50 '
        /> 
        <input 
          type="text"  
          name="barangay"
          value={formData.barangay}
          placeholder='Barangay'
          onChange={handleInputChange}
          className='w-full p-2 border border-gray-200 bg-indigo-50 '
        /> 
        <input 
          type="text"  
          name="street"
          value={formData.street}
          placeholder='Street'
          onChange={handleInputChange}
          className='w-full p-2 border border-gray-200 bg-indigo-50 '
        /> 
        <input 
          type="text"  
          name="city"
          value={formData.city}
          placeholder='City'
          onChange={handleInputChange}
          className='w-full p-2 border border-gray-200 bg-indigo-50 '
        /> 
        <input 
          type="text"  
          name="province"
          value={formData.province}
          placeholder='Province'
          onChange={handleInputChange}
          className='w-full p-2 border border-gray-200 bg-indigo-50 '
        /> 
        <input 
          type="text"  
          name="Country"
          value={formData.Country}
          placeholder='Country'
          onChange={handleInputChange}
          className='w-full p-2 border border-gray-200 bg-indigo-50 '
        /> 
        <input 
          type="number"  
          name="zipCode"
          value={formData.zipCode}
          placeholder='Zip Code'
          onChange={handleInputChange}
          onKeyDown={(event) => {
            const validKeys = [
              'Backspace', 'Tab', 'Enter', 'Delete', 
              'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'
            ];
            if (!/[0-9]/.test(event.key) && !validKeys.includes(event.key)) {
              event.preventDefault();
            }
          }}
          className='w-full p-2 border border-gray-200 bg-indigo-50 '
        /> 
        <input 
          type="text"  
          name="emailAddress"
          value={formData.emailAddress}
          placeholder='Email Address'
          onChange={handleInputChange}
          className='w-full p-2 border border-gray-200 bg-indigo-50 '
        /> 
        <input 
          type="text"  
          name="contactNumber"
          value={formData.contactNumber}
          placeholder='Contact Number'
          onChange={handleInputChange}
          className='w-full p-2 border border-gray-200 bg-indigo-50 '
        /> 

        <select
              className="w-[357px] p-2 border border-gray-200 bg-indigo-50"
              name="employeeType"
              onChange={handleInputChange}
            >
              <option value="" className=" text-gray-500 ">Select an employee type</option>
              <option value="Full Time">Full Time</option>
              <option value='Part Time'>Part Time</option>
              <option value="Intern">Intern</option>
              <option value="Contractual">Contractual</option>
        </select>

        <select
              className="w-[357px] p-2 border border-gray-200 bg-indigo-50"
              name="assignmentStatus"
              onChange={handleInputChange}
            >
              <option value="">Select an assignment status</option>
              <option value="Active">Active</option>
              <option value="Resigned">Resigned</option>
              <option value="AWOL">AWOL</option>
        </select>

        <DesignationsSelection name="designationId"  onChange={handleInputChange} />


        <button className='bg-black text-white mt-5 px-4 py-1 rounded-md cursor-pointer'
        type="submit" disabled={isLoading}>
          {isLoading ? "Adding..." : "Add Employee"}
        </button>
      </form>
      {error && <p className='text-red-500 mt-4'>{error}</p>}
    </div>
  )
}

export default CreateEmployeeWithApi