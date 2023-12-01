import './App.css'; 
import SectionFormWrapper from './section';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <>
      <h1>Que bom que você está aqui, faça sua inscrição agora mesmo</h1>
      <SectionFormWrapper/>
      <ToastContainer />
    </>
  )
}

export default App
