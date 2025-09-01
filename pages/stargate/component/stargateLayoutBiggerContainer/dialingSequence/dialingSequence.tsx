export const DialingSequence = ({anchor}) => {
    const dialSequence = ["/images/glyph27-negative.jpg","/images/glyph07-negative.png",
    "/images/glyph15-negative.png","/images/glyph32-negative.png","/images/glyph12-negative.png",
    "/images/glyph30-negative.png","/images/glyph01-negative.png","/images/glyph01-negative.png"]
    
    return (<div className={`side-Terminal side-Terminal-${anchor}`}>
        {dialSequence.map((item, index) => {
            return(<section key={index} className={`side-Terminal-item-${index}`}>
            <img src={item}/>
        </section>)
        })}
    </div>)
}