import { useLearningContext } from "../../../components/learningApp/Context/learningContext"
import { Navigation } from "../../../components/navigate";
import { QandADropdown } from "../../../components/learningApp/testList/QandADropdown";

import { useRouter } from "next/router";
import { useEffect, useState } from "react"

const TestList = () => {
    const { Context } = useLearningContext();
    const  router  = useRouter();
    const user = router.query.testList
    const [ changeQandA, setQandAChange ] = useState([]);
    const [ open, setOpen ] = useState({
        QandA:true
    })
    useEffect(() => {
        let isMounted = true;
        const update = (data) => {
            Context.setQandAData(data);
                if (data.id !== "Gues-User") {
                    let returnList = []
                    data.map((item) => {
                        returnList.push({
                            question: item.question,
                            answer: item.answer,
                            questionPlaceholder:"",
                            questionClassPlaceholder:false,
                            answerPlaceholder:"",
                            answerClassPlaceholder:false
                        })
                    })
                    setQandAChange(returnList);
                }
            Context.setLoading(false);
        }

        const fetchOnlyData = async () => {
            try {
                const userData = await fetch(`/api/Learning/QandAGetByUserId?id=${encodeURIComponent(user as string)}`);
                const userResult = await userData.json();
                if (isMounted) {
                    update(userResult);
                }
            }  catch (error) {
                console.log(error)
                if (isMounted) {
                    router.push(`/Learning/invalid-user`);
                }
            }
        }

        const fetchUser = async () => {
            try {
                const response = await fetch(`/api/logins/userGetById?id=${encodeURIComponent(user as string)}`);
                const userData = await fetch(`/api/Learning/QandAGetByUserId?id=${encodeURIComponent(user as string)}`);
                const userResult = await userData.json();
                const responseResult = await response.json();
                if (isMounted) {
                    Context.setLogedIn(responseResult);
                    update(userResult);
                }
            } catch (error) {
                console.log(error)
                if (isMounted) {
                    router.push(`/Learning/invalid-user`);
                }
            }
        };
        if (user && user !== Context.logedIn.id) {
            fetchUser();
        } else if (user && user === Context.logedIn.id) {
            fetchOnlyData();
        }
        return () => {  isMounted : false };
    }, [user]);
    const dropDown = (type) => {
        setOpen((prev) => ({
            ...prev,
            [type]:!open[type]
        }))
    }
    return (<>
        {user && !Context.loading && <div className="testList-Layout">
            <div className="links">
                <Navigation.AppLearningLink mkDir={"Learning"} User={String(user)}>
                    <section><h3>back</h3></section>
                </Navigation.AppLearningLink>
                <Navigation.AppLearningLink mkDir={"Learning/makeTest"} User={String(user)}>
                    <section><h3>make test</h3></section>
                </Navigation.AppLearningLink>
            </div>
            {Context.logedIn.id === "Guest-User" && 
            <>
            <h1>welcome guest user</h1>
            <p>Because you're a guest you can't add or update</p>
            </>}
            {Context.logedIn.id !== "Guest-User" &&
            <>
            <h1>welcome {Context.logedIn.name}</h1>
            <h1 onClick={() => dropDown("QandA")}>QandA</h1>
            </>}
            {open.QandA && <QandADropdown changeQandA={changeQandA} setQandAChange={setQandAChange}/>}
            </div>}
    </>)
}

export default TestList