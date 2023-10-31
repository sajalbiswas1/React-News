
import Header from "../Header/Header";
import LastNews from "../nav/LastNews";
import Nav from "../nav/Nav";
import LeftBar from "./LeftBar";

import Right from "./Right";
import { Outlet } from "react-router-dom";


const Home = () => {
    
    
    return (
        <div className="">
           <Header></Header>
           <LastNews></LastNews>
           <Nav></Nav>
           <div className="grid md: grid-cols-4 gap-4">
            <div>
                <LeftBar></LeftBar>
            </div>
            <div className="col-span-2">
               <Outlet></Outlet>
                
            </div>
            <div>
                <Right></Right>
            </div>
           </div>
        </div>
    );
};

export default Home;