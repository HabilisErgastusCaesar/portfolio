import { useEffect } from "react"
import { useRouter } from "next/router"
import { useStargateContext } from "../../components/useContext/stargateComponents";

const StargatePage = () => {
    const router = useRouter();
    const { Context } = useStargateContext();

    const fetchEpisodeData = async(number) => {
        const response = await fetch(`/api/stargate/stargateGet?show=${encodeURIComponent("stargate Atlantis")}&season=${number}`);
        const data = await response.json();
        let sortedList = []
        let sortedItem = []
        const result = data.map((item) => {
            const match = item.id.match(/Episode(\d+)/);
            if (match) {
                sortedList.push(match[1])
                return match;
            }
            return item
        })
        for (let i = 0; i < sortedList.sort((a, b) => a - b).length; i++) {
            result.map((item) => {
                if (sortedList[i] === item[1]) {
                    sortedItem.push(item[0]);
                }
            })
        }
        const sortedEpisodeData = sortedItem.map(episodeId => {
            return data.find(item => item.id.includes(episodeId));
        }).filter(item => item !== undefined);
        Context.setEpisode((prev) => ({
            ...prev,
            atlantis :sortedEpisodeData
        }));
    }

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