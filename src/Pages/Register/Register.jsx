import { useContext } from 'react';
import NavBar from '../../Shared/NavBar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {
    const {createUser} = useContext(AuthContext);

    const handleRegister = (e) =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        console.log(email,password, name, photo);

        createUser(email,password)
        .then(res =>{
            console.log(res.user);
        })
        .catch(error =>{
            console.error(error);
        })
    }
    return (
        <div>
            <NavBar></NavBar>
            <h1 className="text-3xl text-center">Please Register</h1>
            <div className="w-4/6 bg-base-200 mx-auto">
                    <div className=" shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" name="name" placeholder="Enter Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photo" placeholder="Enter Your Photo URL" className="input input-bordered" required />
                            </div>
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