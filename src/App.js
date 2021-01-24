import './App.scss';

import { ShipList } from './components/ShipList/ShipList';
import { Nav } from './components/Nav/Nav';
import { Footer } from './components/Footer/Footer';

function App() {
    return (
        <>
            <header>
                <Nav />
            </header>
            <main>
                <div className="container">
                    <ShipList />
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
}

export default App;
