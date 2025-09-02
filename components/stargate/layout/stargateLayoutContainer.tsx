import { StargateLayoutEpisodeSg } from "./stargateLayoutEpisodeSg/stargateLayoutEpisodeSg"
import { StargateLayoutEpisodeAtlantis } from "./stargateLayoutEpisodeAtlantis/stargateLayoutEpisodeAtlantis"
import { StargateLayoutEpisodeUniverse } from "./stargateLayoutEpisodeUniverse"
import { StargateLayoutInfoSg } from "./stargateLayoutInfoSg"
import { StargateLayoutInfoAtlantis } from "./stargateLayoutInfoAtlantis"
import { StargateLayoutInfoUniverse } from "./stargateLayoutInfoUniverse"
import { StargateLayoutCastSg } from "./stargateLayoutCastSg"
import { StargateLayoutCastAtlantis } from "./stargateLayoutCastAtlantis/stargateLayoutCastAtlantis"
import { StargateLayoutCastUniverse } from "./stargateLayoutCastUniverse"
import { useStargateContext } from "../useContext/stargateComponents"
import { SearchFilter } from "../searchFilter/searchFilter"
import { StargateLayoutBiggerContainer } from "./stargateLayoutBiggerContainer"

import { useRouter } from "next/router"
import { useState, useEffect } from "react"

export const StargateLayoutContainer = ({scrollRef}) => {
    const { Context } = useStargateContext();
    const router = useRouter();
    const selectDefaultOption = (type) => {
        if( selectOptionToggle !== type ) setSelectOptionToggle(type);
    }

    useEffect(() => {
        if (typeof router.query.command !== "undefined") {
            if ((router.query.command as string).includes("Cast")) {
                selectDefaultOption("Cast")
            } else if ((router.query.command as string).includes("Info")) {
                selectDefaultOption("Info")
            }
        }
        return () => {};
    },[router]);

    const [selectOptionToggle, setSelectOptionToggle] = useState("Episodes")

    const selectOption = (type) => {
        const destination = router.asPath.replaceAll("Episodes","").replaceAll("Cast","").replaceAll("Info","")
        if( selectOptionToggle !== type ) setSelectOptionToggle(type);
        event.preventDefault();
        router.push(`${destination}${type}`);
    }

    const stargate = (router.query.command as string)
    .replace("stargate", "").replace(/-season-(\d+)/,"").replace("&Episodes", "")
    .replace("&Cast", "").replace("&Info", "");
    
    return (
        <>
            {Context.windowWidth.optionButtons ? (
            <div className={`stargate-command-layout stargate-command-layout-${stargate}`}>
            {!Context.search && !Context.open.select && (
                <div className="option-button">
                    <section className={selectOptionToggle === "Cast" ? "selected selected-cast" : "not-selected not-selected-cast"} onClick={() => selectOption("Cast")}>Cast</section>
                    <section className={selectOptionToggle === "Episodes" ? "selected" : "not-selected"} onClick={() => selectOption("Episodes")}>Episodes</section>
                    <section className={selectOptionToggle === "Info" ? "selected selected-info" : "not-selected not-selected-info"} onClick={() => selectOption("Info")}>Info</section>
                </div>
            )}
            <div className={`stargate-command-layout-child ${Context.search.length > 0 ? "search":"non-search"}`}>
                {Context.windowWidth.searchFilter && <SearchFilter stargate={stargate}/>}
                {stargate === "sg-1" && (
                    <>
                        {selectOptionToggle === "Info" && <StargateLayoutInfoSg/>}
                        {selectOptionToggle === "Episodes" && <StargateLayoutEpisodeSg />}
                        {selectOptionToggle === "Cast" && <StargateLayoutCastSg/>}
                    </>
                )}
                {stargate === "atlantis" && (
                    <>
                        {selectOptionToggle === "Info" && <StargateLayoutInfoAtlantis/>}
                        {selectOptionToggle === "Episodes"  && <StargateLayoutEpisodeAtlantis/>}
                        {selectOptionToggle === "Cast" && <StargateLayoutCastAtlantis />}
                    </>
                )}
                {stargate === "universe" && (
                    <>
                        {selectOptionToggle === "Info" && <StargateLayoutInfoUniverse/>}
                        {selectOptionToggle === "Episodes" && <StargateLayoutEpisodeUniverse />}
                        {selectOptionToggle === "Cast" && <StargateLayoutCastUniverse/>}
                    </>
                )}
            </div>
            </div>
            ) : (
                <StargateLayoutBiggerContainer />
            )}
        </>
    )};