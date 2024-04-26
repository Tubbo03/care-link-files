import doctor2 from '../assets/doctor2.jpg'
import DoctorSignupComponent from '../components/doctorSignUpComponent'
import  '../styles/loginsignupScreenStyle.css'

function DoctorSignupScreen() {
    return (
        <>
        <div className='loginSignupMainContainer'>
            <div className='loginSignupimgContainer'>
                <img src={doctor2} alt="" />
            </div>
            <div className='loginSignupContainer'>
                <DoctorSignupComponent />
            </div>
        </div>
        </>
    )
}

export default DoctorSignupScreen