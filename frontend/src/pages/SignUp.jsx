import { useNavigate } from 'react-router-dom'
import styles from './page.module.css';
import axios from 'axios';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon
  }
  from 'mdb-react-ui-kit';
  
function SignUp (){

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try{
      const email = e.target.email.value;
      const password = e.target.password.value;
      console.log(email, password)
      const response = await axios.post('http://localhost:8000/api/sign-up', { email, password });
      console.log('Login successful', response.data);
      alert("Success!")
      navigate('/main');
    }catch(e){
      console.error('sign-up failed', e.response.data);
      alert("Sign-up failed, try again!");
    }
  }

  return (
        <MDBContainer fluid className={styles.posCent}>
          <MDBRow className='d-flex justify-content-center align-items-center h-100'>
            <MDBCol col='12'>
    
              <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
                <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
    
                  <h2 className="fw-bold mb-2 text-uppercase">Sign Up</h2>
                  <p className="text-white-50 mb-5">Please enter your email and password!</p>
    
                  <form onSubmit={handleSignUp}>
                    <MDBInput name="email" wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email address' id='formControlLg' type='email' size="lg"/>
                    <MDBInput name="password" wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='formControlLg' type='password' size="lg"/>
                    <MDBBtn outline className='mx-2 px-5' color='white' size='lg'>
                      Sign Up
                    </MDBBtn>
                  </form>
                  
    
                  <div className='d-flex flex-row mt-3 mb-5'>
                    <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                      <MDBIcon fab icon='facebook-f' size="lg"/>
                    </MDBBtn>
    
                    <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                      <MDBIcon fab icon='twitter' size="lg"/>
                    </MDBBtn>
    
                    <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                      <MDBIcon fab icon='google' size="lg"/>
                    </MDBBtn>
                  </div>
    
                  <div onClick={() => navigate('/login')}>
                    <p className="mb-0">Already have an account? <a href="" class="text-white-50 fw-bold">Login</a></p>
    
                  </div>
                </MDBCardBody>
              </MDBCard>
    
            </MDBCol>
          </MDBRow>
    
        </MDBContainer>
    );
}
export default SignUp;