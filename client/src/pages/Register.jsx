import { Link } from 'react-router-dom'
import { FormRow, Logo } from '../components'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'

function Register() {
  return (
    <Wrapper>
      <form className='form'>
        <Logo />
        <h4>Register</h4>
        <FormRow type='text' name='name' defaultValue='John' />
        <FormRow type='text' name='lastName' 
          labelText='Last Name' defaultValue='Smith' />
        <FormRow type='text' name='location' 
          defaultValue='earth' />
        <FormRow type='email' name='email' 
          defaultValue='John@gmail.com' />
        <FormRow type='password' name='password' defaultValue='John123' />
        <button type='submit' className='btn btn-block'>
          Submit
        </button>
        <p>
          Already a member?
          <Link to='/login' className='member-btn'>
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  )
}

export default Register
