import { Navigation } from "../../../components/navigate"
import { useRouter } from "next/router"
import { useLearningContext } from "../learningContext"

import { useEffect } from "react"

export const LoggedIn = () => {
    const { Context } = useLearningContext();
    const user = useRouter().query.Menu
    const router = useRouter();
    useEffect(() => {
        let isMounted = true;
        const update = (type) => {
            Context.setLogedIn(type);
            Context.setLoading(false);
        }
        
        const fetchUser = async () => {
            try {
                const response = await fetch(`/api/logins/userGetById?id=${encodeURIComponent(user as string)}`);
                const userResult = await response.json();
                if (isMounted) {
                    update(userResult)
                }
            } catch (error) {
                if (isMounted) {
                    router.push(`/Learning/invalid-user`);
                }
            }
        };
        if (user === "Guest-User") {
            update({
                id: "Guest-User",
                logged: true
            })
        } else if (user === "invalid-user") {
            update({ id: "invalid user" })
        } else if (user !== "logged-out" && Context.logedIn.id === "logged-out") {
            fetchUser();
        } else {
            Context.setLoading(false);
        }
        return () => { isMounted = false; };
    }, [user]);
    const loggedOut = async() => {
        await fetch(`/api/logins/userPatch`, {
            method: 'PATCH', 
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify({
                id: user,
                logged: false
            }),
        });
        Context.setLogedIn({id : "logged-out"});
        router.push(`/Learning/logged-out`);
    }
    const clearInput = () => {
        const form = document.querySelector('form');
        if (form) {
            const passwordInput = form.querySelector('#password') as HTMLInputElement;
            if (passwordInput.placeholder !== "") {
                passwordInput.placeholder = ""
            }}}
    const reLogin = async(user) => {
        const form = document.querySelector('form');
        if (form) {
            const passwordInput = form.querySelector('#password') as HTMLInputElement;
            if (passwordInput.value === "") {
                passwordInput.placeholder = "please enter password"
            } else {
                const response = await fetch(`/api/logins/userGetById?id=${encodeURIComponent(user)}`);
                const userResult = await response.json()
                if (userResult.password === passwordInput.value) {
                    const patch = await fetch(`/api/logins/userPatch`, {
                        method: 'PATCH', 
                        headers: {
                            'Content-Type': 'application/json', 
                        },
                        body: JSON.stringify({
                            id: user,
                            logged: true
                        }),
                    });
                    Context.setLogedIn(await patch.json());
                } else {
                    passwordInput.placeholder = "password incorrect"
                    passwordInput.value = ""
                }}}}
    return (<div>
        {Context.loading ? (
            <h1>......loading</h1>
        ):(
            <>
            {Context.logedIn.logged ?(<>
                {user === "Guest-User" && <h2>welcome guest</h2>}
                {Context.logedIn.name && <h2>{Context.logedIn.name}</h2>}
                <Navigation.AppLearningLink mkDir={"Learning/makeTest"} User={String(user)}>
                    <section><h3>make test</h3></section>
                </Navigation.AppLearningLink>
                <Navigation.AppLearningLink mkDir={"Learning/testList"} User={String(user)}>
                    <section><h3>test list</h3></section>
                </Navigation.AppLearningLink>
                <Navigation.AppLearningLink mkDir={"Learning/Options"} User={String(user)}>
                    <section><h3>options</h3></section>
                </Navigation.AppLearningLink>
                <section onClick={() => loggedOut()}><h3>log out</h3></section>
            </>):(<>
            {Context.logedIn.id === "invalid user" &&
                <h1>invalid user</h1>}
                {Context.logedIn.id !== "invalid user" && <><form>
                    <h2>logged out</h2>
                    <h4>please re-enter password</h4>
                    <input onFocus={() => clearInput()} id="password" />
                    <section onClick={() => reLogin(user)}><h3>login</h3></section>
                </form>
                <Navigation.AppLearningLink mkDir={"Learning/Options"} User={"logged-out"}>
                    <section><h3>back to log in</h3></section>
                </Navigation.AppLearningLink></>}
            </>)}</>)}
    </div>)
}