import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const EpisodePage = () => {
  const router = useRouter();
  const { episodeId, episodeData: passedEpisodeDataString } = router.query;
  const [episode, setEpisode] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchEpisode = async() => {
      try {
        const response = await fetch(`/api/stargate/stargateGetEpisodeById?episode=${(episodeId)}`)
        const result = await response.json()
        setEpisode(result);
        setLoading(false);
        setError(null);
      } catch (error) {
  
      }

    }
    if (typeof episodeId !== "undefined") {
      if (typeof passedEpisodeDataString === "undefined") {
        fetchEpisode()
      } else {
        const result = JSON.parse(passedEpisodeDataString as string);
        setLoading(false);
        setError(null);
        setEpisode(result);
      }
    }
    return () => {}
  },[router])

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (loading) {
    return <div>Loading episode data...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (episode.length === 0) {
    return
  }

  if (!episode) {
    return <div>Episode data could not be loaded.</div>;
  }

  const classname = (id, type) => {
    const episode = (series) => {
      let match = ""
      if (id) {match = id.match(/Season(\d+)/);}
      if (type) {
        if (match) {
          return `${series}-${type} ${series}-${type}-${match[0]}`
        } else {
          console.log(type.replace(" ", ""))
          return `${series}-${type.replace(" ", "")}`
        }
      }
      if (match) {
        return `${series} ${series}-${match[0]}`
      }
      return id
    }
    if (id && id.includes("sg-1")) {
      return episode("sg1")
    } else if (id && id.includes("Atlantis")) {
      return episode("Atlantis")
    } else {
      return episode(id)
    }
  }

  const dialSequence = ["/images/glyph27-negative.jpg","/images/glyph07-negative.png",
    "/images/glyph15-negative.png","/images/glyph32-negative.png","/images/glyph12-negative.png",
    "/images/glyph30-negative.png","/images/glyph01-negative.png"]

  return (
    <div className={`episode-page-layout episode-page-layout-${classname(episode.id, null)}`}>
      <h1>{episode.name}</h1>
      <div className={classname(episode.id, "grid")}>
        <div className={`episode-page-container`}>
          <div className={classname(episode.id, null)}>
            <div className={classname(episode.id, "background")}>
              {episode.series && <p>{episode.series}</p>}
              {episode.season && <p>{episode.season}</p>}
              <p>Air Date: {episode.airDate}</p>
            </div>
          </div>
        </div>
        {episode.stargateAdresses && episode.stargateAdresses.length > 0 ?
          (<>
            <div className='statusBar'>
              <span />
            </div>
            <div className={classname("dial-the-gate", episode.season)}>
              {dialSequence.map((item, index) => {
                console.log(episode.season)
                return(
                <section key={index} className={`chevron-${index + 1} encoded`}>
                  <img src={item} width="90%"/>
                </section>)})}
            </div>
          </>) : (<>
            <div className={classname("dial-the-gate", episode.season)}>
              <section className="idle section-1">stats</section>
              <section className="idle section-2">stats</section>
              <section className="idle section-3">stats</section>
              <section className="idle section-4">stats</section>
              <section className="idle section-5">stats</section>
              <section className="idle section-6">stats</section>
              <section className="idle section-7">stats</section>
            </div>
          </>)
        }
      </div>
      <div className={`episode-page-container`}>
        <div className={classname(episode.id, null)}>
          <div className={classname(episode.id, "background")}>
            <p>Description: {episode.description}</p>
          </div>
        </div>
      </div>
      {Array.isArray(episode.writtenBy) && episode.writtenBy.length > 0 && (
        <p>Written By: {episode.writtenBy.join(', ')}</p>
      )}
      {episode.img && <img src={episode.img} alt={`Image for ${episode.name}`} />}
    </div>
  );
};

export default EpisodePage