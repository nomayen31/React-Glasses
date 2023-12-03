import { Link } from "react-router-dom";
import NavBar from "../../Shared/NavBar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
    const {signIn} = useContext(AuthContext)
    const handleLogin = (e) =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password);
        signIn(email, password)
        .then(res => {
            console.log(res);
        })
        .catch(error =>{
            console.log(error);
        })
    }
    return (
        <div>
            <NavBar></NavBar>
            <h1 className="text-3xl text-center">Please Login</h1>
            <div className="w-4/6 bg-base-200 mx-auto">
                    <div className=" shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
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
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p className="text-center mt-4">Dont't have an account <Link className="text-blue-800 font-bold" to='/register '>Register</Link></p>
                    </div>
            </div>
        </div>
    );
};

export default Login;