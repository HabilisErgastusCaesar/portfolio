import { Navigation } from "../../navigate"
import { useRouter } from "next/router"
import { useLearningContext } from "../Context/learningContext"

import { useState, useEffect } from "react"

export const Login = () => {
    const router = useRouter();
    const { Context } = useLearningContext();
    const [popup, setPopup] = useState({
        createAccount:false
    })
    const [accountDetail, setAccountDetail] = useState({
        userEmail:false,
        userEmailPlaceholder:"",
        password:false,
        passwordPlaceholder:""
    })
    const createAccountScreen = (state) => {
        setPopup((prev) => ({
            ...prev,
            createAccount:state
        }))
    }
    
    const focus = () => {
        const form = document.querySelector('form');
        if (form) {
            const nameInput = form.querySelector('#name') as HTMLInputElement;
            const passwordInput = form.querySelector('#email') as HTMLInputElement;
            if ((nameInput.placeholder || passwordInput.placeholder) !== "") {
                setAccountDetail((prev) => ({
                    ...prev,
                    userEmailPlaceholder:"",
                    userEmail:false,
                    passwordPlaceholder:"",
                    password:false
                }))
            }
        }
    }
    
    const tryLogin = async() => {
        const form = document.querySelector('form');
        const update = (type, string,value) => {
            const placeholder = `${type}Placeholder`
            setAccountDetail((prev) => ({
                ...prev,
                [placeholder]:[string],
                [type]:[value]
            }))
        }
        if (form) {
            const nameInput = form.querySelector('#name') as HTMLInputElement;
            const passwordInput = form.querySelector('#email') as HTMLInputElement;
            if ((nameInput.value  && passwordInput.value) !== "") {
                const response = await fetch(`/api/logins/userGet?username=${encodeURIComponent(nameInput.value)}&password=${passwordInput.value}`);
                const account = await response.json();
                if (account.length === 0) {
                    update("userEmail","user or email not found",true)
                    update("password","or incorrect password",true)
                    nameInput.value = ""
                    passwordInput.value = ""
                } else {
                    const patch = await fetch(`/api/logins/userPatch`, {
                        method: 'PATCH', 
                        headers: {
                            'Content-Type': 'application/json', 
                        },
                        body: JSON.stringify({
                            id: account[0].id,
                            logged: true
                        }),
                    });
                    const result = await patch.json()
                    Context.setLogedIn(result)
                    router.push(`/Learning/${result.id}`);
                }
            } else {
                if (nameInput.value !== "") {
                    if (accountDetail.userEmailPlaceholder === "") {
                        update("userEmail","invalid user name or email",true)
                    }
                    nameInput.value = ""
                } else {
                    if (accountDetail.userEmailPlaceholder === "") {
                        update("userEmail","please enter your user name or email",true)
                    }
                }
                if (passwordInput.value !== "") {
                    if (accountDetail.passwordPlaceholder === "") {
                        update("password","incorrect password or user",true)
                    }
                    passwordInput.value = ""
                } else {
                    if (accountDetail.passwordPlaceholder === "") {
                        update("password","please enter your password",true)
                    }
                }}
        }
    }
    return (<div className="login-menu-container">
        <div className="login-menu">
        {popup.createAccount ? (<>
            <h1>create account</h1>
            <h4>user name</h4>
            <input />
            <h4>email</h4>
            <input />
            <h4>password</h4>
            <input />
            <h4>repeat password</h4>
            <input />
            <div style={{
                display:"flex"
            }}>
                <section onClick={(() => createAccountScreen(false))}><h4>oke</h4></section>
                <section onClick={(() => createAccountScreen(false))}><h4>cencel</h4></section>
            </div>
        </>):(
            <>
            <form action="" method="get">
                <h1>please login</h1>
                <h4>user or email</h4>
                <input type="text" name="name" id="name" required placeholder={accountDetail.userEmailPlaceholder} 
                onFocus={() => focus()}/>
                <h4>password</h4>
                <input  type="email" name="email" id="email" required placeholder={accountDetail.passwordPlaceholder}
                onFocus={() => focus()}/>
                <section onClick={() => tryLogin()}>
                    <h4>login</h4>
                </section>
            </form>
            <section onClick={(() => createAccountScreen(true))}><h4>create account</h4></section>
            <Navigation.AppLearningLink mkDir={"Learning"} User={"Guest-User"}>
                <section><h3>login as guest</h3></section>
            </Navigation.AppLearningLink></>
        )}
    </div>
    </div>)
}