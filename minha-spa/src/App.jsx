import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import {Navbar} from './components/Mavbar';
import {Sobre} from './pages/Sobre';
import {};
import {Home} from './pages/Home';
//Rotas no React: meacnismo para navegação entre diferentes páginas ou componentes em uma aplicação de página única (SPA)

//importação direta de uma página
function App() {
  return (
    <BrowserRouter>
     <Navbar/>
    </BrowserRouter>
  );
}

export default App
