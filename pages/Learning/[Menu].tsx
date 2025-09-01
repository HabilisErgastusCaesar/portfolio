import { useRouter } from "next/router";

import { Login } from "./component/login";
import { LoggedIn } from "./component/loggedIn";

const LearningApp = () => {
    const user = useRouter().query.Menu
    return(<div className="intro-menu">
        <h1>Scire</h1>
        {user && user === "logged-out" && 
        <>
        <img src="/images/placeholder1.jpg"/>
        <Login />
        <img src="/images/placeholder2.jpg"/>
        <img src="/images/placeholder3.jpg"/>
        <img src="/images/placeholder4.jpg"/>
        <img src="/images/placeholder5.jpg"/>
        <img src="/images/placeholder6.jpg"/>
        <img src="/images/placeholder7.jpg"/>
        <img src="/images/placeholder8.jpg"/>
        <img src="/images/placeholder9.jpg"/>
        <img src="/images/placeholder10.jpg"/>
        <img src="/images/placeholder11.jpg"/>
        </>
        }
        {user && user !== "logged-out" && <LoggedIn />}
        {user === undefined && <h1>......loading</h1>}
    </div>)
};

export default LearningApp