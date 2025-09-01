import Link from "next/link"
import { useRouter } from "next/router"

export const Navigation = {
  CityLink: ({ children, link, userId }: {
    children: React.ReactNode,
    onNavigate?: () => Promise<void>,
    link:string
    userId:string
  }) => {
    const router = useRouter()

    const handleClick = async (e: React.MouseEvent) => {
      e.preventDefault()
      router.push(`/${link}/${userId}`)
    }
      return (
        <Link href={`/${link}/${userId}`}>
        <h5 onClick={handleClick} style={{ cursor: 'pointer' }}>
          {children}
        </h5>
      </Link>
    )
  },

  

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
  AppLearningLink: ({ children,mkDir ,User }: {
     children: React.ReactNode,
     onNavigate?: () => Promise<void>,
     mkDir: String, User: String}) => {
      const href = `/${mkDir}/${User}`;
      return (
      <Link href={href}>
        <h5 style={{ cursor: 'pointer' }}>
          {children}
        </h5>
        </Link>
        )},
  MainLink: ({ children }: { children: React.ReactNode }) => (
    <Link href="/">
      {children}
    </Link>
  ),
  EpisodeLink: ({ children, episodeId, episodeData }: {
    children: React.ReactNode,
    episodeId: string | number,
    episodeData: any
  }) => {
    const router = useRouter();

    const handleClick = (e: React.MouseEvent) => {
      e.preventDefault();
      router.push({
        pathname: `/stargate/episode/${episodeId}`,
        query: { episodeData: JSON.stringify(episodeData) }
      }, `/stargate/episode/${episodeId}`);
    };

    return (
      <h5 onClick={handleClick} style={{ cursor: "pointer" }}>
        {children}
      </h5>
    );
  }
}


