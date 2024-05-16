import React, { useState } from 'react'
import Modal from 'react-modal';
import CloseIcon from '@mui/icons-material/Close';
import { Link, useNavigate } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import SignUp from './SignUp';
import AddReaction from '@mui/icons-material/AddReaction';

Modal.setAppElement('#root');


// eslint-disable-next-line
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        padding: '20px',
        margin: '0px',
        // marginRight: '-50%',
        width: "30%",
        transform: 'translate(-50%, -50%)',
        border: '2px solid var(--primary)',
        borderRadius: '12px',
    },
};


export default function Login(props) {
  
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    const [error, setError] = useState(null);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = 'var(--primary)';
    }

    function closeModal() {
        setIsOpen(false);
    }



    const host = "http://localhost:8000";

    const [cred, setCred] = useState({email: "", password: ""})
    const navigate = useNavigate();

    const onChange = (e) => {
        setCred({ ...cred, [e.target.name]: e.target.value })
    }

    const handelOnSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${host}/api/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email: cred.email, password: cred.password }),
            });

            /*-----------We can not add ----Highly Recommneded-----Beacuse these code not show the error msg in the user------*/

            // if (!response.ok) {
            //     throw new Error('Login failed');
            // }

            const json = await response.json();
            console.log(json);
            if (json.success) {
                // redirect to HomePage--
                localStorage.setItem("token", json.authToken);
                console.log("You have Successfully Login")
                navigate("/");
                closeModal();
            } else {
                setError("Invaild Credintials, Please try again...")
                console.log("Not Login")
            }
        } catch (error) {
            console.log("Interanl Server Error")
        }
    }

   
    return (
        <div className='boxModal'>
            <li onClick={openModal}>{props.login}</li>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className='login-main'>
                    <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Login Your Account Here</h2>
                    <CloseIcon onClick={closeModal} />
                </div>

               <div className='login-form btn'>
                    <p className='choiceAcnt'>You Don't have an Account? <span><SignUp signup="Sign Up" /></span></p>
                    <div className="login-socialBtn">
                        <div className="login-socialBtn-first">
                            <button style={{ marginRight: "20px" }} ><Link to="/facebook">Google <GoogleIcon fontSize="small" /></Link></button>
                            <button><Link to="/google">FaceBook <FacebookIcon fontSize="small" /></Link></button>
                        </div>
                        <div className="login-socialBtn-first">
                            <button style={{ marginRight: "20px" }}><Link to="/instagram">Discord <AddReaction/></Link></button>
                            <button><Link to="/github">GitHub <GitHubIcon fontSize="small" /></Link></button>
                        </div>
                    </div>
                    <p className='or'>OR</p>
                    <form onSubmit={handelOnSubmit}>
                        <input type="text" placeholder='Enter your Email' id="email" name="email" value={cred.email} onChange={onChange} required/><br />
                        <input type="text" placeholder='Enter your Password' id="password" name="password"  value={cred.password} onChange={onChange} required/><br />
                        <button type="submit" className='sbtn'>Login</button>
                        {<spa style={{color:"red", fontSize:"16px"}}>{error}</spa>}
                    </form>
                </div>
            </Modal>
        </div>
    )
}
