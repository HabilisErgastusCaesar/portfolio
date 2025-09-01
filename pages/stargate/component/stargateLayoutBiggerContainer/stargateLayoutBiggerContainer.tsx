import { StargateLayoutInfoSg } from "../stargateLayoutInfoSg"
import { StargateLayoutInfoAtlantis } from "../stargateLayoutInfoAtlantis"
import { StargateLayoutInfoUniverse } from "../stargateLayoutInfoUniverse"
import { StargateLayoutCastSg } from "../stargateLayoutCastSg"
import { StargateLayoutCastAtlantis } from "../stargateLayoutCastAtlantis/stargateLayoutCastAtlantis"
import { StargateLayoutCastUniverse } from "../stargateLayoutCastUniverse"
import { StargateLayoutEpisodeSg } from "../stargateLayoutEpisodeSg/stargateLayoutEpisodeSg"
import { StargateLayoutEpisodeAtlantis } from "../stargateLayoutEpisodeAtlantis/stargateLayoutEpisodeAtlantis"
import { StargateLayoutEpisodeUniverse } from "../stargateLayoutEpisodeUniverse"
import { useStargateContext } from "../../stargateComponents/stargateComponents"
import { DialingSequence } from "./dialingSequence/dialingSequence"

import { useRef, useEffect, useCallback } from "react"
import { useRouter } from "next/router"

export const StargateLayoutBiggerContainer = () => {
    const router = useRouter();
    const { Context } = useStargateContext();

    const scrollRef = useRef<{ container: HTMLDivElement | null }>({
        container:null
    });
    
    const debounce = (func, delay) => {
        let timeoutId;
        return (...args) => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            timeoutId = setTimeout(() => {
                func.apply(null, args);
            }, delay);
        };
    };

    const handleScroll = useCallback(
        debounce(() => {
            if (scrollRef.current && scrollRef.current.container) {
                const scrollTop = scrollRef.current.container.scrollTop;
                const shouldBeScrolled = scrollTop > 0; 

                if (
                    shouldBeScrolled &&
                    (!Context.scroll.infoScroll || !Context.scroll.CastScroll || !Context.scroll.episodeScroll)
                ) {
                    Context.setScroll({
                        infoScroll: true,
                        CastScroll: true,
                        episodeScroll: true,
                    });
                } else if (
                    !shouldBeScrolled &&
                    (Context.scroll.infoScroll || Context.scroll.CastScroll || Context.scroll.episodeScroll)
                ) {
                    Context.setScroll({
                        infoScroll: false,
                        CastScroll: false,
                        episodeScroll: false,
                    });
                }
            }
        }, 30), 
        [Context.scroll]
    );


    useEffect(() => {
        if (scrollRef.current && scrollRef.current.container) {
            scrollRef.current.container.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (scrollRef.current && scrollRef.current.container) {
                scrollRef.current.container.removeEventListener('scroll', handleScroll);
            }
        };
    }, [Context.scroll]);
    
    const stargate = (router.query.command as string)
    .replace("stargate", "").replace(/-season-(\d+)/,"").replace("&Episodes", "")
    .replace("&Cast", "").replace("&Info", "")
    return (<div
        ref={(el) => (scrollRef.current.container = el)}
        className={`stargate-command-bigger-layout stargate-command-bigger-layout-${stargate}`}>
        <div style={{
            display:"flex",
            flexDirection:"row",
            }}>
        <div className="loading-line"></div>
        <div className="info-layout-parent">
        <div className={`info-layout info-layout-${stargate}`}>
            <section className="when-fixed-position" />
            <section className={`headings headings-info ${Context.scroll.infoScroll ? "headings-scroll":"headings-non-scroll"}`}>
                <div className="heading"><h1>Info</h1></div>
            </section>
            {stargate === "sg-1" && <StargateLayoutInfoSg/>}
            {stargate === "atlantis" && <StargateLayoutInfoAtlantis/>}
            {stargate === "universe" && <StargateLayoutInfoUniverse/>}
        </div>
        <div className={`info-layout-child info-layout-child-${stargate}`}>Info</div>
        </div>
        <div className="loading-line"></div>
        {stargate === "atlantis" && <DialingSequence anchor={"left"}/>}
        <div className="cast-layout-parent">
        <div className={`cast-layout cast-layout-${stargate}`}>
            <section className="when-fixed-position" />
            <section className={`headings headings-cast ${Context.scroll.CastScroll ? "headings-scroll":"headings-non-scroll"}`}>
                <h1 className="heading">Cast</h1>
            </section>
            {stargate === "sg-1" && <StargateLayoutCastSg/>}
            {stargate === "atlantis" && <StargateLayoutCastAtlantis />}
            {stargate === "universe" && <StargateLayoutCastUniverse/>}
        </div>
        <div className={`cast-layout-child cast-layout-child-${stargate}`}>Cast</div>
        </div>
        <div className="loading-line"></div>
        <div className="stargate-command-layout-parent">
        <div className="stargate-command-layout-child">
            {stargate === "sg-1" &&  (
            <>
                <StargateLayoutEpisodeSg />
            </>
        )}
        {stargate === "atlantis" &&  (
            <>
                <StargateLayoutEpisodeAtlantis />
            </>
        )}
        {stargate === "universe" &&  (
            <>
                <StargateLayoutEpisodeUniverse />
            </>
        )}
        </div>
        <div className="stargate-command-layout-child-two">episode</div>
        </div>
        <div className="loading-line"></div>
        {stargate === "atlantis" && <DialingSequence anchor={"right"}/>}
        </div>
    </div>)
}