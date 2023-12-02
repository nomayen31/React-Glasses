import NavBar from '../../Shared/NavBar';
import { Link } from 'react-router-dom';

const Register = () => {
    const handleRegister = (e) =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password);
    }
    return (
        <div>
            <NavBar></NavBar>
            <h1 className="text-3xl text-center">Please Login</h1>
            <div className="w-4/6 bg-base-200 mx-auto">
                    <div className=" shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                                <label className="label">
                                    <Link to='' className="label-text-alt link link-hover">Forgot Password</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <p className="text-center mt-4">Already you  have an account please  <Link className="text-blue-800 font-bold" to='/login '>Login</Link></p>
                    </div>
            </div>
        </div>
    );
};

export default Register;



// 9.9