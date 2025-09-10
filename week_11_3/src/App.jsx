import './App.css'
import {  RecoilRoot, useRecoilValue , useRecoilState} from 'recoil'
import { jobsAtom, messageAtom, networkAtom, notiAtom} from './store/atoms';

function App() {

    return <RecoilRoot>
        <Main />
    </RecoilRoot>

}

function Main() {
    
  const networkNotiCount = useRecoilValue(networkAtom);
  const jobsCount = useRecoilValue(jobsAtom);
  const [messageCount, setMessageCount] = useRecoilState(messageAtom);
  const NotiCount = useRecoilValue(notiAtom);
  

  return <div>
    <button>Home</button>

    <button > My Network {networkNotiCount > 99 ? "99+" : networkNotiCount} </button>
    <button> Jobs {jobsCount == 0 ? '' : jobsCount}</button>
    <button> Messaging {messageCount == 0 ? '' : messageCount} </button>
    <button> Notification {NotiCount == 0 ? '' : NotiCount}</button>

    <button onClick={() => setMessageCount((c) => c + 1)} > Me </button>
  </div>
}

export default App
