import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
import { FormRow, Logo } from '../components'


const Login = () => {
  return (
      <Wrapper>
        <form className='form'>
        <Logo />
        <h4>Login</h4>
        <FormRow type='email' name='email' 
          placeHolder='John@gmail.com' />
        <FormRow type='password' name='password' placeHolder='John123' />
        <button type='submit' className='btn btn-block'>
          Submit
        </button>
        <p>
        Not a member yet?
          <Link to='/register' className='member-btn'>
            register
          </Link>
        </p>
      </form>
      </Wrapper>
  )
}

export default Login;
