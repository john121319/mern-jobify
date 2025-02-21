import Wrapper from '../assets/wrappers/LandingPage'
import main from '../assets/images/main.svg'
import { Link } from 'react-router-dom'
import { Logo } from '../components'
// const StyledBtn = styled.button`
// font-size: 1.5rem;
// background: red;
// color: white;
// `;
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
        <div className="container page">
          <div className="info">
            <h1>
              Job <span>Tracking</span> App
            </h1>
            <p>
            I'm baby wayfarers hoodie next level taiyaki brooklyn cliche blue bottle 
            single-origin coffee chia. Aesthetic post-ironic venmo, quinoa lo-fi tote bag 
            adaptogen everyday carry meggings +1 brunch narwhal.
            </p>
            <Link to='/register' className='btn register-link'>
              Register
            </Link>
            <Link to='/login' className='btn'>
              Login / Demo user
            </Link>
          </div>
          <img src={main} alt='Job hunt' className='img main-img' />
        </div>
      {/* <StyledBtn>styled button</StyledBtn> */}
    </Wrapper>
  )
}
// const Wrapper = styled.div`
// background: red;
// h1{
//   color: white;
// }
// .content{
//   background: blue;
//   color: yellow;
// }`;

export default Landing
