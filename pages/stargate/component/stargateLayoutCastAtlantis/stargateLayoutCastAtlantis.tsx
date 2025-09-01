import { Loading } from "../loading/loading";
import { useStargateContext } from "../../stargateComponents/stargateComponents";

import { useEffect } from "react"

export const StargateLayoutCastAtlantis = () => {
    const { Context } = useStargateContext ();
    
    const getCast = async() => {
        const response = await fetch(`/api/stargate/stargateGetAtlantisCast`);
        const Cast = await response.json();
        Context.setCastAtlantis(Cast);
    }
    
    useEffect(() => {
        if (Context.castAtlantis.length === 0) {
            getCast();
        }
    },[]);

    return (<>
    {Context.castAtlantis.length === 0 && <Loading />}
    {Context.castAtlantis.map((item) => {
        return  <div key={item.id}>
            <div className="item">
            <section className="name-container">
                <h2>{item.name}</h2>
                <h3>{item.rol}</h3>
            </section>
            <section className="episode-container">
                <h3>number of episodes {item.numberOfEpisodes}</h3>
                <h3>years active {item.yearsActive.join(" ")}</h3>
            </section>
            <section className="img">
                <img src={item.img}/>
            </section>
            </div>
            <div className="terminal">
                <span className="terminal-text-one">
                    <p>event - compiled client -end |</p>
                    <p>wait - compiling... --proqest |</p>
                    <p>event - compiled client -end |</p>
                    <p>wait - compiling... --proqest |</p>
                    <p>event - compiled client -end |</p>
                    <p>wait - compiling... --proqest |</p>
                    <p>event - compiled client -end |</p>
                    <p>wait - compiling... --proqest |</p>
                    <p>event - compiled client -end |</p>
                    <p>wait - compiling... --proqest |</p>
                    <p>event - compiled client -end |</p>
                    <p>wait - compiling... --proqest |</p>
                    <p>event - compiled client -end |</p>
                    <p>wait - compiling... --proqest |</p>
                    <p>event - compiled client -end |</p>
                    <p>wait - compiling... --proqest |</p>
                </span>
                <span className="terminal-text-two">
                    <p>success</p>
                    <p>SELECT</p>
                    <p>success</p>
                    <p>sudo</p>
                    <p>success</p>
                    <p>SELECT</p>
                    <p>success</p>
                    <p>mission</p>
                    <p>success</p>
                    <p>SELECT</p>
                    <p>success</p>
                    <p>mission</p>
                    <p>success</p>
                    <p>SELECT</p>
                    <p>success</p>
                    <p>mission</p>
                </span>
            </div>
        </div>
    })}</>)
}