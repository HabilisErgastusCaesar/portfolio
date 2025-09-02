import { Navigation } from "../../../navigate";
import { useStargateContext } from "../../useContext/stargateComponents";

import { useRouter } from "next/router";
import { useEffect } from "react";

export const StargateLayoutEpisodeSg = () => {
    const { Context } = useStargateContext();
    const router = useRouter();
    const fetchEpisodeData = async(number) => {
        const response = await fetch(`/api/stargate/stargateGet?show=${encodeURIComponent("stargate sg-1")}&season=${number}`);
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
            sgOne :sortedEpisodeData
        }))
    }
    
    useEffect(() => {
        if (router.query.command) {
            const number = (router.query.command as string).replace("sg-1-","").replace("season-","").replace("&Info","").replace("&Episodes","").replace("&Cast","")
            if (Context.episode.sgOne.length === 0) {
                fetchEpisodeData(number);
            } else if (!Context.episode.sgOne[0].season.includes(number)) {
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
    <section className="when-fixed-position" />
    <section className={`headings headings-episode ${Context.scroll.episodeScroll ? "headings-scroll":"headings-non-scroll"}`}>
        {Context.episode.sgOne.length > 0 && <h1 className="heading">{Context.episode.sgOne[0].series}</h1>}
        {Context.episode.sgOne.length > 0 && <h3 className="season">{Context.episode.sgOne[0].season}</h3>}
    </section>
    {Context.episode.sgOne.map((item, index) => {
        return(
        <Navigation.EpisodeLink key={item.id} episodeId={item.id} episodeData={item}>
        <div className={`stargate-episode-layout stargate-episode-layout-sg-1}`}>
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