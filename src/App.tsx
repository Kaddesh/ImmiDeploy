
import Media from './components/media'
import Apply from './components/apply'
import Explore from './components/explore'
import Ecowas from './components/document'
import About from './components/about'
import Footer from './components/footer'
import Correct from './components/worknavbar'
import useMediaQuery from './query'



const App: React.FC = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 768px)");

  return (
    <div>
      <Correct />
      <Media />
      <Apply isAboveMediumScreens={isAboveMediumScreens} />
      <Explore />
      <Ecowas />
      <About />
      <Footer isAboveMediumScreens={isAboveMediumScreens} />

    </div>
  )
}

export default App
