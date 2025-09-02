import { StatusBar } from "../../../components/game/statusBar/statusBar"
import { MainMap } from "../../../components/game/mainMap/mainMap"
import { OptionsBar } from "../../../components/game/optionsBar/optionsBar"
import { SideBar } from "../../../components/game/sideBar/sideBar"
import { useGamesContext } from "../../../components/game/Context/gameContext"

import { useState, useEffect } from "react"
import { useRouter } from "next/router"

const MainMapContainer = () => {
    const router = useRouter();
    const { Context } = useGamesContext();
    const [ player, setPlayer ] = useState({id:"empty"})
    
    const getUser = async(user) => {
        const response = await fetch(`/api/logins/userGetById?id=${encodeURIComponent(user as string)}`);
        const userResult = await response.json();
    };

    const getProfile = async(id) => {
        const responseProfile = await fetch(`/api/game/getPlayerData?id=${encodeURIComponent(id as string)}`);
        const profileResult = await responseProfile.json();
        const responseMap = await fetch(`/api/game/getMapData?id=${encodeURIComponent(profileResult.id as string)}`);
        const mapResult = await responseMap.json();
        const responseMainBuilding = await fetch(`/api/game/getMainBuildingData?id=${encodeURIComponent(mapResult.id as string)}`);
        const mainBuildingResult = await responseMainBuilding.json();
        mapResult.mainBuilding = mainBuildingResult
        profileResult.city[0] = mapResult
        console.log(profileResult)
        setPlayer(profileResult)
    };

    useEffect(() => {
        if (router.query.mainMap !== undefined) {
            if (Context.logedIn.id === "logged-out") {
                getUser(router.query.mainMap)
                getProfile(router.query.mainMap)
            }
        }
    }, [router])
    
    return (<div className="game-main-window">
        <StatusBar/>
        <div className="mainMap-sidebar">
            <MainMap data={player} setData={setPlayer}/>
            <SideBar data={player}/>
        </div>
        <OptionsBar />
    </div>)}

export default MainMapContainer