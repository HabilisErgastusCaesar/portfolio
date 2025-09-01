export const CarrisonHandling = ({item}) => {
    return(<>
        <h4>{item.name}</h4>
        <p>melee</p><p>{item.melee}</p>
        <p>missile</p><p>{item.missile}</p>
        <p>cavalry</p><p>{item.cavalry}</p>
        <p>vehicle</p><p>{item.vehicle}</p>
        <p>artillery</p><p>{item.artillery}</p>
        <p>arial</p><p>{item.arial}</p>
      </>)
}