import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SidebarToggleIcon } from './components/icons/toggle';
import { useEffect } from 'react';


const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
      const media = window.matchMedia(query);
      if(media.matches != matches) {
        setMatches(media.matches);
      }

      const listener = () => {
        setMatches(media.matches);
      }
      media.addListener(listener);
      return () => {
        media.removeListener(listener);
      }
    }, [matches, query])

  return matches;
};

function App() {

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  useEffect(() =>{
    setSidebarOpen(isDesktop);
  },[isDesktop]);

  return <div className='flex'>
    <Sidebar sidebarOpen = {sidebarOpen} setSidebarOpen = {setSidebarOpen} />
    <MainComponent />
  </div>
}

function Sidebar({sidebarOpen, setSidebarOpen}) {
    if(!sidebarOpen) {
    return <div className='fixed top-0 left-0 bg-white'>
        <div className='cursor-pointer hover:bg-slate-200' onClick={() => {
            setSidebarOpen(!sidebarOpen)
        }}>
          <SidebarToggleIcon />
        </div>
      </div>
    }

    return <div className='w-72 bg-pink-800 h-screen fixed top-0 left-0 md:relative'>
      <div className='cursor-pointer hover:bg-slate-200' onClick={() => {
            setSidebarOpen(!sidebarOpen)
        }}>
        <SidebarToggleIcon />
      </div>
    </div>
}

function MainComponent() {
    return <div className='w-full'>
        <div className='h-32 bg-black hidden md:block'></div>
      <div className='grid grid-cols-13 gap-8 p-8'>
      <div className='h-72 md:col-span-3 bg-red-200 hidden -translate-y-16 rounded-2xl shadow-lg col-span-13 md:block'>

        </div>
      <div className='h-96 md:col-span-6 bg-green-300 rounded-2xl shadow-lg col-span-13'>

        </div>
      <div className='h-96 md:col-span-4 bg-blue-400 rounded-2xl shadow-lg col-span-13'>

        </div>
        
      </div>
    </div>
}

export default App