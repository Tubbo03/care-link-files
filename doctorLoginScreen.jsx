import doctor1 from '../assets/doctor1.jpg'
import doctorLoginComponent from '../components/doctorLoginComponent'
import  '../styles/loginsignupScreenStyle.css'

function DoctorLoginScreen() {
    return (
        <>
        <div className='loginSignupMainContainer'>
            <div className='loginSignupimgContainer'>
                <img src={doctor1} alt="" />
            </div>
            <div className='loginSignupContainer'>
                <DoctorLoginComponent />
            </div>
        </div>
        </>
    )
}

export default DoctorLoginScreen