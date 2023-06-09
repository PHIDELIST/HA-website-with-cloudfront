import './LoginPage.css'
import { useState } from 'react';
import PeoplePhoto from '../assets/image-intro-desktop.jpg'
import { Link } from 'react-router-dom';
function LoginPage() {
    const [credentials,setCredentials]=useState({email:'', password:''});
    const handlechange =(event) =>{
        const{name, value} = event.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [name]: value,
        }));
    };
    const handleSubmit = (event) => {
        event.prevCredentials();
        //login logic here
        console.log('Credentials:',credentials);
        //reset form
        setCredentials({
            email: '',password:''
        });
    
    }
  return (
    <>
    <div id='LoginContainer'>
        <div id='Log'>
    <form id='LoginForm' onSubmit={handleSubmit}>
        <label> Email: </label><input type='text' name="email" value={credentials.email} onChange={handlechange}/> 
        < br />
        <label> Password: </label><input type='password' name='password' value={credentials.password} onChange={handlechange} />
        <br />
        <button type='submit'>Login</button>
    </form>
    <Link to='/register'>SignUp here</Link>
    </div>
    <div id='RightLoginImg'>
            <img src={PeoplePhoto} alt="" />
    </div>
    </div>
    </>
  )
}
export default LoginPage;