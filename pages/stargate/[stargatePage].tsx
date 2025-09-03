import { useEffect } from "react"
import { useRouter } from "next/router"
import { useStargateContext } from "../../components/useContext/stargateComponents";

const StargatePage = () => {
    const router = useRouter();
    const { Context } = useStargateContext();

    useEffect(() => {
        if (router.query.stargatePage) {
            fetchEpisodeData(1);
        };

        return () => {}
    }, [router])
    
    return(<div>
        <h1>stargatePage</h1>
    </div>)
}


export default StargatePage
