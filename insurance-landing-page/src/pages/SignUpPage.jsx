import { useForm } from 'react-hook-form';
import './SignUpPage.css'
import PeoplePhoto from '../assets/image-intro-desktop.jpg'
import { Link } from 'react-router-dom';
// import { useForm } from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
function SignUpPage() {
    const schema = yup.object().shape({
        firstName: yup.string().required("*"),
        lastName: yup.string().required("*"),
        county: yup.string().required("*"),
        phoneNumber: yup.string().required("*"),
        email: yup.string().email().matches( /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/).required("*"),
        dateOfBirth: yup.date().required("*"),
        password: yup.string().matches( /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/).required("Password is required"),
        confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required("Confirm Password is required")
    });
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver:yupResolver(schema),});
    const onSubmit = (data) => {console.log(data)};
  return (
    <>
    <div id='RegisterMain'>
        
        <form id='RegisterForm' onSubmit={handleSubmit(onSubmit)}>
        <h2>Registration Form</h2>
            <div id='Names'>
            <label>
                FirstName:
            </label> <input type="text" placeholder='First Name' {...register("firstName")} />
            <p>{errors.firstName?.message}</p>
            <label>
                LastName:
            </label> <input type="text" placeholder='Last Name' {...register("lastName")}  />
            <p>{errors.lastName?.message}</p>
            </div>
            <div id='countyPhone'>
            <label>
                County:
            </label> <input type="text" placeholder='County' {...register("county")} />
            <p>{errors.county?.message}</p>
            <label>
                Phone Number:
            </label> <input type="text" placeholder='Phone Number' {...register("phoneNumber")} />
            <p>{errors.phoneNumber?.message}</p>
            </div>
            <div id='EmailDate'>
            <label>
                Email:
            </label> <input type="text" placeholder='Email' {...register("email")}/>
            <p>{errors.email?.message}</p>
            <label>
                Date Of Birth:
            </label> <input type="text" placeholder='Date Of Birth' {...register("dateOfBirth")}/>
            <p>{errors.dateOfBirth?.message}</p>
            </div>
            <div id='Password'>
            <label>
                Password:
            </label><input type="password" placeholder='Password' {...register("password")} />
            <p>{errors.password?.message}</p>
            <label>
                Confirm Password:
            </label><input type="password" placeholder='Password' {...register("confirmPassword")} />
            <p>{errors.confirmPassword?.message}</p>
            </div>
           <button type='submit'>Submit</button>
        </form>
        <div id='RightRegisterImg'>
            <img src={PeoplePhoto} alt="" />
        </div>
    </div>
    </>
  )
}
export default SignUpPage;