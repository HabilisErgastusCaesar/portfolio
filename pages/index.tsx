import React from "react"
import { Navigation } from "../components/navigation"

const Portfolio = () => {
  return (<main>
      <div className="portfolio-layout">
        <h1 >portfolio</h1>
        <div style={{
          display:"flex",
          flexDirection:"column"
          }}>
          <div className="der-mench">
          <p>
            <b>Zarathustra aber sahe das Volk an und wunderte<br /></b>
            sich. Dann sprach er also:
          </p>
          <p>
            <b>Der Mensch ist ein Seil, geknüpft zwischen Thier<br /></b>
            und Übermensch, — ein Seil über einem Abgrunde.
          </p>
          </div>
          <b>--Friedrich Nietzsche</b>
        </div>
        <section>
          <h2>Passion :</h2>
          <p>I am a driven developer with a passion for large, complex projects.<br />
            I pay close attention to detail and strive for high-quality results that I am proud of. See page link below, for example, for an example of my work. <br />
            My choice for this project is based on my enthusiasm for the Stargate franchise. <br />
            Sci-fi films and series often contain fascinating computer systems the layout you see in this website, is based on those computersystems visible in the series,
          </p>
          <h3>For that, I've used the folowing techniques:</h3>
          <ol>
            <li>typscript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Postman</li>
            <li>node.js</li>
            <li>next.js</li>
            <li>react</li>
            <li>SQL</li>
            <li>API integration</li>
          </ol>
          <span>
            <h4>Here is de link to that website as an example :</h4>
            <Navigation.stargate show={"sg-1"} season={1} selection={"Episodes"}>
              <button>stargate show page</button>
            </Navigation.stargate>
          </span>
        </section>
        <div className="der-mench">
          <p>
            <b>Ein gefährliches Hinüber, ein gefährliches Auf-<br /></b>
            dem-Wege, ein gefährliches Zurückblicken, ein gefähr¬<br />
            liches Schaudern und Stehenbleiben.
          </p>
          <p>
            <b>Was gross ist am Menschen, das ist, dass er eine<br /></b>
            Brücke und kein Zweck ist: was geliebt werden kann<br />
            am Menschen, das ist, dass er ein Übergang und<br />
            ein Untergang ist.
          </p>
        </div>
        <section>
          <h2>Eager :</h2>
          <p>I am also also eager to learn what you can see in these complex datastructures.<br />
            Thats why i'm always searching for a new challance<br />
            I have choosen this project because it combeins me passion for history.<br />
            The thing i am exploring into this demo is a game who portraits the devolopment of a civilazation.<br />
            With that is a challancing concept because onlike other games the game needs the player to create its cultur more dynamic.<br />
            The challance it creates with programming is creating a datasctructure what is fluid.<br />
            You can play the demo to what it holds
          </p>
          <h3>For that, I've used the folowing techniques:</h3>
          <ol>
            <li>typscript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Postman</li>
            <li>node.js</li>
            <li>next.js</li>
            <li>react</li>
            <li>SQL</li>
            <li>API integration</li>
          </ol>
        </section>
        <div className="der-mench">
          <p>
            <b>Ich liebe Die, welche nicht zu leben wissen, es sei<br /></b>
            denn als Untergehende, denn es sind die Hinüber¬<br />
            gehenden.
          </p>
          <p>
            <b>Ich liebe die grossen Verachtenden, weil sie die<br /></b>
            grossen Verehrenden sind und Pfeile der Sehnsucht<br />
            nach dem andern Ufer.
          </p>
        </div>
        <div>
          <h3>curieus</h3>
          <p>
            Ik ben een leergierig persoon de eerste app die ik schreef was een app waarmee je jezelf mee kan overhorren
            Ik maakte deze app met python en kivy met dit project wil ik het crossplatform uitproberen
          </p>
        </div>
        <div className="der-mench">
          <p>
            <b>Ich liebe Die, welche nicht erst hinter den Sternen<br /></b>
            einen Grund suchen, unterzugehen und Opfer zu sein:<br />
            sondern die sich der Erde opfern, dass die Erde einst<br />
            des Übermenschen werde.
          </p>
          <p>
            <b>Ich liebe Den, welcher lebt, damit er erkenne,<br /></b>
            und welcher erkennen will, damit einst der Über¬<br />
            mensch lebe. Und so will er seinen Untergang.
          </p>
        </div>
      </div>
    </main>)
}

export default Portfolio
