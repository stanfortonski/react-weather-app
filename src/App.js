import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import Weather from "./components/Weather/Weather";

function App() {
    return (
        <div className="app">
            <Header />

            <div className="container">
                <div className="row">
                    <div className="col">
                        <Weather />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default App;
