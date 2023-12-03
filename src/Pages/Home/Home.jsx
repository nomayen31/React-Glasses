import { useLoaderData } from "react-router-dom";
import BrackingNews from "../../Components/BrackingNews";
import Header from "../../Shared/Header";
import LeftSideNav from "../../Shared/LeftSideNav";
import NavBar from "../../Shared/NavBar";
import RightSIdeNav from "../../Shared/RightSIdeNav";
import NewsCard from "./NewsCard/NewsCard";

const Home = () => {
    const news = useLoaderData();
    console.log(news);
    return (
        <div>
            <Header></Header>
            <BrackingNews></BrackingNews>
            <NavBar></NavBar>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div>
                <LeftSideNav></LeftSideNav>
            </div>
            <div className="md:col-span-2">
               {
                news?.map(singleNews => <NewsCard
                news={singleNews}
                key={singleNews._id}
                ></NewsCard>)
               }
            </div>
            <div>
                <RightSIdeNav></RightSIdeNav>
            </div>
                
            </div>              
        </div>
    );
};

export default Home;