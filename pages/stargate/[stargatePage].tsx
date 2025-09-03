import { useRouter } from "next/router"

import { MainLayout } from "../../components/stargate/mainLayout";
import { UpperBar } from "../../components/stargate/upperBar";

const StargatePage = () => {
    const router = useRouter();
    
    return(<div>
        {router.query.stargatePage && <>
            <UpperBar router={router.query.stargatePage}/>
            <MainLayout router={router.query.stargatePage}/>
        </>}
    </div>)
}

export default StargatePage
