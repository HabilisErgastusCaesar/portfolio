import { useLearningContext } from "../learningContext"

import { useRouter } from "next/router";
import { useEffect } from "react"

const MakeTest = () => {
    const { Context } = useLearningContext();
    const  router  = useRouter();
    useEffect(() => {
        let isMounted = true;

        const fetchUser = async () => {
            try {
                const response = await fetch(`/api/logins/userGetById?id=${encodeURIComponent(router.query.makeTest as string)}`);
                const userResult = await response.json();
                if (isMounted) {
                    Context.setLogedIn(userResult);
                    Context.setLoading(false);
                }
            } catch (error) {
                if (isMounted) {
                    router.push(`/Learning/invalid-user`);
                }
            }
        };
        
        if (router.query.makeTest !== Context.logedIn.id) {
            fetchUser()
        }
        return () => {  isMounted : false };
    }, [Context.logedIn, router]);
    return (<>
    {Context.loading ? (
        <h1>......loading</h1>
    ):(
        <>
        <h1>make test</h1>
        <h1>{Context.logedIn.name}</h1>
        </>
    )}
    </>)    
}

export default MakeTest