import { useEffect } from "react"
import { useRouter } from "next/router"

import { useStargateContext } from "../../components/stargate/useContext/stargateComponents";
import { MainLayout } from "../../components/stargate/mainLayout";
import { UpperBar } from "../../components/stargate/upperBar";

const StargatePage = () => {
    const router = useRouter();
    const { Context } = useStargateContext();

    useEffect(() => {
        if (router.query.stargatePage) {
            console.log("kenker zooi")
        };

        return () => {}
    }, [router])
    
    return(<div>
        <UpperBar />
        <MainLayout />
    </div>)
}

export default StargatePage

