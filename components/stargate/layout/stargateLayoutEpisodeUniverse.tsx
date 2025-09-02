import { Navigation } from "../../navigate";
import { useStargateContext } from "../useContext/stargateComponents";

import { useEffect } from "react";
import { useRouter } from "next/router";

export const StargateLayoutEpisodeUniverse = () => {
    const { Context } = useStargateContext();
    const router = useRouter();
    const fetchEpisodeData = async(number) => {
        const response = await fetch(`/api/stargate/stargateGet?show=${encodeURIComponent("stargate universe")}&season=${number}`);
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
            universe :sortedEpisodeData
        }))
    }
    
    useEffect(() => {
        if (router.query.command) {
            const number = (router.query.command as string).replace("universe-","").replace("season-","").replace("&Info","").replace("&Episodes","").replace("&Cast","")
            if (Context.episode.universe.length === 0) {
                fetchEpisodeData(number);
            } else if (!Context.episode.universe[0].season.includes(number)) {
                fetchEpisodeData(number);
                Context.setEpisode((prev) => ({
                    ...prev,
                    sgOne :[]
                }));
            }
        }
        return () => {};
    },[router]);
    return(<>
    {Context.episode.universe.length < 0 && <h1 className="heading">{Context.episode.universe[0].series}</h1>}
    {Context.episode.universe.length < 0 && <h3 className="season">{Context.episode.universe[0].season}</h3>}
    {Context.episode.universe.map((item, index) => {
        return(
        <Navigation.EpisodeLink key={item.id} episodeId={item.id} episodeData={item}>
        <div className={"stargate-episode-layout stargate-episode-layout-universe"}>
        <div className={'main_box_h3'}>
            <div className='bar top'></div>
            <h3>{index + 1} {item.name}</h3>
        </div>
        <div className={'main_box_p'}>
            <div className='bar top'></div>
            <div className={"stargate-episode-container"}>
                <p
                    style={{
                        overflow:"auto",
                        height:"10rem",
                    }}
                >{item.description}</p>
                <div className={'main_box_img'}>
                    <img src={item.img}/>
                </div>
            </div>
        </div>
        <div className={'main_box_h3'}>
            <div className='bar top'></div>
            <h3>{item.airDate}</h3>
        </div>
        </div>
        </Navigation.EpisodeLink>
        );
    })}
    </>)
}