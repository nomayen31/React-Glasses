import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import img1 from '../assets/qZone1.png';
import img2 from '../assets/qZone2.png';
import img3 from '../assets/qZone3.png';

const RightSIdeNav = () => {
    return (
        <div>
            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-3xl">Login With</h2>
                <button className="btn btn-outline w-full">
                <FaGoogle />
                Google
                </button>
                <button className="btn btn-outline w-full">
                <FaGithub />
                Github
                </button>
            </div>
            <div className="p-4  mb-6">
                <h2 className="text-3xl mb-4">Find Us On</h2>
                <Link className="p-4 flex text-lg items-center border rounded-t-lg">
                <FaFacebook className="mr-3"></FaFacebook>
                Facebook
                </Link>
                <Link className="p-4 flex text-lg items-center border rounded-t-lg">
                <FaTwitter className="mr-3"></FaTwitter>
                Tweeter
                </Link>
                <Link className="p-4 flex text-lg items-center border rounded-b-lg ">
                <FaInstagram className="mr-3"></FaInstagram>
                Instagram
                </Link>
            </div>
            <div className="p-4 space-y-3 mb-6 bg-gray-400">
                <h2 className="text-3xl">Q Zone</h2>
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />

            </div>
        </div>
    );
};

export default RightSIdeNav;