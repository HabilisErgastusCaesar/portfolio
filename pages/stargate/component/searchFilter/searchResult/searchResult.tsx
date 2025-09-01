import { useStargateContext } from "../../../stargateComponents/stargateComponents";

export const SearchResult = () => {
    const { Context } = useStargateContext();
    return Context.searchResult.map((item, index) => {
        const itemClass = item.series.replace("stargate ","").toLowerCase();
        const id = item.id.replace("Atlantis","").replace("sg-1","").replace("universe","")
        .replace("Season","Season " ).replace("Episode"," Episode ")
        return(<div key={index} className={`stargate-popup-layout-${itemClass}`}>
            <h2>{item.name}</h2>
            <h4>{id}</h4>
            <p>{item.airDate}</p>
            {item.type === "Actor" && <section className="cast">{ 
            item.cast.map((item, index) => {
                if (item.toLowerCase().includes(Context.search.toLowerCase())) {
                    return(<h4 key={index} className="highLight">{item}</h4>)
                } else {
                    return(<h4 key={index} className="none-highLight">{item}</h4>)
                }
            })}</section>}
        </div>)
    })
}