import LeftPannel from './components/home/LeftPannel.js'
import RightPannel from './components/home/RightPannel.js'
import BackgroundEffect from './components/BackgroundEffect';

export default function Home() {
  return (
    <main className="lg:overflow-hidden content flex h-lvh h-full w-full flex-col lg:flex-row items-center justify-between">
      <BackgroundEffect />
      <LeftPannel />
      <RightPannel />
    </main>
  );
}
