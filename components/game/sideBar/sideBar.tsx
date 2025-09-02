import { useEffect } from "react"

export const SideBar = ({data}) => {
    useEffect(() => (
        console.log("trigger")
    ), [data])


    return (<div className="sideBar">
        <h3>selected Buildings</h3>
        {data.city && data.city.map((item,index) => {
            console.log(item.mainBuilding)
            if (item.mainBuilding.popup) {
                return <section key={index} className={`mainBuilding`}>
                    <h3>headbuilding</h3>
                    <h3>level {item.mainBuilding.currentLevel}</h3>
                    {item.mainBuilding.currentLevel === 0 && <section>upgrade</section>}
                </section>
            }
        })}
        <section>upgrade all</section>
    </div>)
}