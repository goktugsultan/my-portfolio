import profile from './profile.jpeg'
import design from './design.png'
import code from './code.png'
import consulting from './consulting.png'
import { BsFillMoonStarsFill } from 'react-icons/bs';
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillMediumCircle,
} from "react-icons/ai";
import {useState} from "react"

function App() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={darkMode ? "dark": ""}>
    <div className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
      <section className="min-h-screen">
        <nav className="py-6 mb-1 flex justify-between">
          <h1 className="font-alkalami text-xl dark:text-white">goktugsultan</h1>
          <ul className="flex items-center">
            <li>
              <BsFillMoonStarsFill 
              className="cursor-pointer text-2xl dark:text-white"
              onClick={()=>setDarkMode(!darkMode)} />
            </li>
            <li>
              <a className="bg-orange-500 text-white px-4 py-2 rounded-md ml-8" href="#">Resume</a>
            </li>
          </ul>
        </nav>
        <div className="text-center p-10">
          <h2 className="text-5xl py-1 text-orange-500 font-medium md:text-6xl font-sofia">Goktug Mustafa Sultan</h2>
          <h3 className="text-2xl py-2 md:text-3xl dark:text-white">Frontend developer</h3>
          <p className="text-md py-1 leading-8 text-gray-800 md:text-lg mx-auto dark:text-white">
            I am a front-end developer who is interested in web technologies.
            I am still improving myself about that topic.
            Also,I like sharing posts about web technologies on Medium platform.<br/>
            The technologies that I am especially into are <span className="text-orange-500">JavaScript frameworks and React Native.</span>
          </p>
        </div>
        <div className="text-5xl flex justify-center gap-16  text-gray-600">
          <a
            href="https://twitter.com/GoktugMS"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="twitter"
            className="cursor-pointer dark:text-white"
          >
            <AiFillTwitterCircle />
          </a>
          <a
            href="https://www.linkedin.com/in/goktugsultan/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="linkedin"
            className="cursor-pointer dark:text-white"
          >
            <AiFillLinkedin />
          </a>
          <a
            href="https://medium.com/@goktugsultan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="medium"
            className="cursor-pointer dark:text-white"
          >
            <AiFillMediumCircle />
          </a>

        </div>
        <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-10 overflow-hidden border-solid border-2 border-grey-600">
          <img src={profile} layout="fill" objectFit="cover" />
        </div>
      </section>
      <section>
        <div>
          <h3 className="text-3xl py-1 dark:text-white">Service I Offer</h3>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
            I am a front-end developer who is interested in web technologies.
            I am still improving myself about that topic.
          </p>
        </div>

        <div className="lg:flex gap-10">
          <div>
            <div className="flex flex-col justify-center items-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <img src={design} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Design</h3>
              <p className="py-2">Creating elegant designs suited for your needs following core
                design theory.</p>
              <h4 className="py-4 text-orange-500">Design tools I use</h4>
              <p className="text-gray-800 py-1">Adobe</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-center items-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <img src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Design</h3>
              <p className="py-2">Creating elegant designs suited for your needs following core
                design theory.</p>
              <h4 className="py-4 text-orange-500">Design tools I use</h4>
              <p className="text-gray-800 py-1">Adobe</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-center items-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <img src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Design</h3>
              <p className="py-2">Creating elegant designs suited for your needs following core
                design theory.</p>
              <h4 className="py-4 text-orange-500">Design tools I use</h4>
              <p className="text-gray-800 py-1">Adobe</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
}

export default App;
