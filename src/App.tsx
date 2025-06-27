import './App.css';
import CompanyBrowser from './components/CompanyBrowser/CompanyBrowser';
import Header from './components/Header/Header';

function App() {
    return (
        <div className="App">
            <Header />
            <div>
                <main>
                    <CompanyBrowser />
                </main>
            </div>
        </div>
    );
}

export default App;
