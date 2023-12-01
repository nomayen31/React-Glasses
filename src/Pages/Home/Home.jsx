import Header from "../../Shared/Header";
import LeftSideNav from "../../Shared/LeftSideNav";
import NavBar from "../../Shared/NavBar";
import RightSIdeNav from "../../Shared/RightSIdeNav";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <NavBar></NavBar>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="border">
                <LeftSideNav></LeftSideNav>
            </div>
            <div className="md:col-span-2 border">
                <h2 className="text-4xl">Coming soon</h2>
            </div>
            <div className="border">
                <RightSIdeNav></RightSIdeNav>
            </div>
                
            </div>              
        </div>
    );
};

export default Home;