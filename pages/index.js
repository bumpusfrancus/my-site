import Head from 'next/head'
import {DarkModeToggle} from "../components/DarkModeToggle"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons"


export default function Home() {
  return (
      <div className="container">
        <DarkModeToggle />
        <Head>
          <title>Anise Is Online!</title>
        </Head>

        <main>
          <h1>Who even is Anise?</h1>
          <h3>Just the facts:</h3>
          <ul>
            <li> Anise has pronouns! She uses they/she. </li>
            <li> She is left handed.</li>
            <li> They grew up in the Philippines, and aspire to make good Philippine food. </li>
            <li> Her great aunt taught her to make springerle the way her ancestors make it. </li>
          </ul>
          <h3>Contact me</h3>
            <a href="mailto:anisebamford@gmail.com">anisebamford@gmail.com</a>
          <h3>Find me online</h3>
            <a href="https://www.linkedin.com/in/anise-bamford-bab747229/">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/bumpusfrancus">
              <FontAwesomeIcon icon={faGithub} />
            </a>
        </main>
      </div>
  )
}
