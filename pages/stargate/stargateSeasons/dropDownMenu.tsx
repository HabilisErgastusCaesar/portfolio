import { useStargateContext } from "../stargateComponents/stargateComponents";
import { Navigation } from "../../../components/navigate";
import { SearchFilter } from "../component/searchFilter/searchFilter";

export const DropDownMenu = () => {
    const { Context } = useStargateContext();
    const resetDropBoxHoverSg = () => {
        const sg = document.querySelector('.select_seasons_sg-1');
        const episodeSg = sg.getElementsByClassName('select_episodes');
        for (let i = 0; i < episodeSg.length; i++) {
            const item = episodeSg[i] as HTMLElement;
            item.style.border = ""
            item.style.backgroundColor = ""
        }
    }

    const dropBoxHoverSg = (type ,e, index) => {
        const borderStyle = (item, size) => {
            item.style.borderRight = `${size}px solid rgb(0, 110, 255)`
            item.style.borderLeft = `${size}px solid rgb(0, 110, 255)`
            item.style.borderBottom = "2px solid rgb(0, 110, 255)"
        }
        const episode = e.target.parentNode.getElementsByClassName('select_episodes');
        if (type === "over") {
            for (let i = 0; i < episode.length; i++) {
                if (i < index) {
                    const item = episode[i];
                    borderStyle(item, 2)
                    item.style.backgroundColor = "rgb(157, 185, 92)"
                } else {
                    const item = episode[i];
                    item.style.border = ""
                    item.style.backgroundColor = ""    
                }
                borderStyle(e.target, 20)
                e.target.style.backgroundColor = "rgb(49, 107, 43)"
            }
        } else {
            for (let i = 0; i < episode.length; i++) {
                const item = episode[i];
                e.target.style.border = ""
                item.style.backgroundColor = ""
            }
        }
    }

    const numberSeason = (total) => {
        let returnDictionary = []
        for (let i = 1; i < total + 1; i++) {
            returnDictionary.push({value:i,name:`season ${i}`})
        }
        return returnDictionary
    }
    
    return(
    <div 
    onMouseLeave={() => resetDropBoxHoverSg()}
    className="select_seasons">
        {!Context.windowWidth.searchFilter && <SearchFilter  stargate={Context.stargate} />}
        <span
        className="select_seasons_sg-1"
        > stargate sg-1
            {!Context.open.select && !Context.search && numberSeason(10).map((item, index) => {
                return(<Navigation.stargate key={index} show={"sg-1"} season={index+1} selection={"Episodes"}>
                <span
                onClick={() => Context.setReset(false)}
                className="select_episodes"
                style={{ top: `${index * 1.9}rem` }}
                onMouseOver={(e) => dropBoxHoverSg("over", e, index)}
                onMouseLeave={(e) => dropBoxHoverSg("leave", e, index)}
                >{item.name}
                </span>
                </Navigation.stargate>)
            })}
        </span>
        <span
        className="select_seasons_atlantis"
        >stargate Atlantis
            {!Context.open.select && !Context.search && numberSeason(5).map((item, index) => {
                return(<Navigation.stargate key={index} show={"Atlantis"} season={index+1} selection={"Episodes"}>
                <span
                onClick={() => Context.setReset(false)}
                className="select_episodes"
                style={{ top: `${index * 1.9}rem` }}
                >{item.name}
                </span>
                </Navigation.stargate>)
            })}
        </span>
        <span
        className="select_seasons_universe"
        >stargate universe
            {!Context.open.select && !Context.search && numberSeason(2).map((item, index) => {
                return(<Navigation.stargate key={index} show={"universe"} season={index+1} selection={"Episodes"}>
                <span
                onClick={() => Context.setReset(false)}
                className="select_episodes"
                style={{ top: `${index * 1.9}rem` }}
                >{item.name}
                </span>
                </Navigation.stargate>)
            })}
        </span>
    </div>
    )
}
