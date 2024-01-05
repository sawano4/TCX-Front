import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function SignUpForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    speciality: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    // This effect will run whenever the form data is updated
    console.log('Form data updated:', formData);
  }, [formData]);

  const handleChange = (e) => {
    // Update the state when input values change
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Perform your sign-up logic here
    console.log('Form submitted with:', formData);
  };

  return (
    <div className='flex flex-col justify-center items-center mt-12 w-full'>
      <form onSubmit={handleSubmit} className='lg:w-2/3  mx-auto p-8 gap-8'>
        <div className='flex flex-col gap-4 justify-center align-center mb-8 '>
          <h1 className='text-center text-blue-700 text-3xl font-extrabold'>Join us to get started</h1>
          <p className='text-center font-thin text-xl'>Easily manage your patients' situation with Calendly</p>
        </div>
        <div className='flex flex-wrap gap-8 justify-center'>
          <div className='flex flex-col w-full sm:w-1/2 lg:w-5/12'>
            <label htmlFor="firstName" > FirstName</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className='border-2 rounded-lg p-3'
              placeholder='FirstName'
              onChange={handleChange}
            />
          </div>
          <div className='flex flex-col w-full sm:w-1/2 lg:w-5/12'>
            <label htmlFor="lastName"> LastName</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className='border-2 rounded-lg p-3'
              placeholder='LastName'
              onChange={handleChange}
            />
          </div>
          <div className='flex flex-col w-full sm:w-1/2 lg:w-5/12'>
            <label htmlFor="phoneNumber">PhoneNumber</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              className='border-2 rounded-lg p-3'
              placeholder='PhoneNumber'
              onChange={handleChange}
            />
          </div>
          <div className='flex flex-col w-full sm:w-1/2 lg:w-5/12'>
            <label htmlFor="email"> Mail Adress</label>
            <input
              type="text"
              id="email"
              name="email"
              className='border-2 rounded-lg p-3'
              placeholder='Mail Address'
              onChange={handleChange}
            />
          </div>
          <div className='flex flex-col w-full sm:w-1/2 lg:w-5/12'>
            <label htmlFor="speciality">Speciality
            </label>
            <select
              id="speciality"
              name="speciality"
              className='border-2 rounded-lg p-3'
              onChange={handleChange}
            >
              {/* Add options for different specialties */}
              <option value="">Choose a Speciality</option>
              <option value="cardiologist">Cardiologist</option>
              <option value="dermatologist">Dermatologist</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className='flex flex-col w-full sm:w-1/2 lg:w-5/12 relative mb-8  '>
            <label htmlFor="password">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              className='border-2 rounded-lg p-3 pr-10'
              placeholder='Password'
              onChange={handleChange}
            />
            <button
              type="button"
              className='absolute inset-y-0 right-0 flex px-3 py-2 items-center justify-center'
              onClick={handleTogglePassword}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
            <p className='text-white'>gggg</p> 
          </div>
        </div>
        <div className='flex flex-col gap-6 mb-8 '>
          <button type="submit" className='w-1/2 rounded-lg bg-teal-400 p-4 mx-auto text-white'>
            Save
          </button>
          
        </div>
        <p className='text-center'>Already have an account ?<span className='text-blue-400'><Link to='/login'> Login</Link></span></p>
      </form>
    </div>
  );
}

export default SignUpForm;
