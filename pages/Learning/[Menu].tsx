import { useRouter } from "next/router";

import { Login } from "../../components/learningApp/logged/login";
import { LoggedIn } from "../../components/learningApp/logged/loggedIn";

const LearningApp = () => {
    const user = useRouter().query.Menu
    return(<div className="intro-menu">
        <h1>Scire</h1>
        {user && user === "logged-out" && 
        <>
        <img src="/images/placeholder1.webp"/>
        <Login />
        <img src="/images/placeholder2.webp"/>
        <img src="/images/placeholder3.webp"/>
        <img src="/images/placeholder4.webp"/>
        <img src="/images/placeholder5.webp"/>
        <img src="/images/placeholder6.webp"/>
        <img src="/images/placeholder7.webp"/>
        <img src="/images/placeholder8.webp"/>
        <img src="/images/placeholder9.webp"/>
        <img src="/images/placeholder10.webp"/>
        <img src="/images/placeholder11.webp"/>
        </>
        }
        {user && user !== "logged-out" && <LoggedIn />}
        {user === undefined && <h1>......loading</h1>}
    </div>)
};

export default LearningApp