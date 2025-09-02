import { Navigation } from "../../../navigate";
import { useStargateContext } from "../../useContext/stargateComponents";
import { Loading } from "../../loading/loading";

import { useEffect } from "react";
import { useRouter } from "next/router";

export const StargateLayoutEpisodeAtlantis = () => {
    const { Context } = useStargateContext();
    const router = useRouter();
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
        if (router.query.command) {
            const number = (router.query.command as string).replace("atlantis-","").replace("season-","").replace("&Info","").replace("&Episodes","").replace("&Cast","")
            if (Context.episode.atlantis.length === 0) {
                fetchEpisodeData(number);
            } else if (!Context.episode.atlantis[0].season.includes(number)) {
                fetchEpisodeData(number);
                Context.setEpisode((prev) => ({
                    ...prev,
                    atlantis :[]
                }));
            }
        }
        return () => {};
    },[router]);
    
    return(<div className={`stargate-layout-Atlantis ${Context.search.length > 0 ? "search" : "non-search"}`}>
        <section className={`headings headings-episode ${Context.scroll.episodeScroll ? "headings-scroll":"headings-non-scroll"}`}>
            {Context.episode.atlantis.length > 0 && <h1 className="heading">{Context.episode.atlantis[0].series}</h1>}
            {Context.episode.atlantis.length > 0 && <h3 className="season">{Context.episode.atlantis[0].season}</h3>}
        </section>
    <div className="Atlantis-2">
    {Context.episode.atlantis.length === 0 && <Loading />}
    {Context.episode.atlantis.map((item, index) => {
        return(<div key={item.id}>
        <Navigation.EpisodeLink episodeId={item.id} episodeData={item}>
        <div className={`stargate-episode-layout`}>
        <div className={'main_box_h3'}>
            <div className='bar top'></div>
            <div className={'main_box_h3_2'}>
                <h3>{index + 1} {item.name}</h3>
            </div>
        </div>
        <div className={'main_box_p'}>
            <div className='bar top'></div>
            <div className={"stargate-episode-container"}>
                <p>{item.description}</p>
                <div className={'main_box_img'}>
                    <img src={item.img}/>
                </div>
            </div>
        </div>
        <div className={'main_box_h3'}>
            <div className='bar top'></div>
            <div className='main_box_h3_2'>
                <h3>{item.airDate}</h3>
            </div>
        </div>
        </div>
        </Navigation.EpisodeLink>
        <div className="Atlantis-Terminal">
            <span className="terminal-text">
            <p>event - compiled client -end | success</p>
            <p>wait - compiling... --proqest | SELECT</p>
            <p>event - compiled client -end | success</p>
            <p>wait - compiling... --proqest | sudo</p>
            <p>event - compiled client -end | success</p>
            <p>wait - compiling... --proqest | SELECT</p>
            <p>event - compiled client -end | success</p>
            <p>wait - compiling... --proqest | mission</p>
            <p>event - compiled client -end | success</p>
            <p>wait - compiling... --proqest | SELECT</p>
            <p>event - compiled client -end | success</p>
            <p>wait - compiling... --proqest | mission</p>
            <p>event - compiled client -end | success</p>
            <p>wait - compiling... --proqest | SELECT</p>
            <p>event - compiled client -end | success</p>
            <p>wait - compiling... --proqest | mission</p>
            </span>
        </div>
        </div>
        );
    })}
    </div>
    </div>)
}