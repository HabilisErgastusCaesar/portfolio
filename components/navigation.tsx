import Link from "next/link"

export const Navigation = {
    stargate: ({ children, show, season, selection }: {
     children: React.ReactNode,
     onNavigate?: () => Promise<void>,
     show: string,
     selection: string,
     season: number}) => {
      const formattedShow = show.toLowerCase().replace(/\\s/g, '-').replace("stargate ","");
      const href = `/stargate/${formattedShow}-season-${season}&${selection}`;
      const handleClick = () => {
        if (typeof event !== "undefined") event.preventDefault();
      };
      handleClick();
      return (
      <Link href={href}>
        <h5 style={{ cursor: 'pointer',color:"white" }}>
          {children}
          </h5>
        </Link>
        )},
}