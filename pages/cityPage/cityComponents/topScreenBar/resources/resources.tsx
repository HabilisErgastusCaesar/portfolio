import { useCityContext } from "../../cityContext/cityContext"

export const Resources = () => {
    const { contextValue } = useCityContext();
    return(<div className='headResource'>
        <h3>resources</h3>
        {Object.entries(contextValue.resources).map(([key, value]) => (
        value[1] && (
          <span key={key} className="resource-item">
            <p>{key}</p>
            <p>{value[0]}</p>
          </span>
        )))}
    </div>)
}