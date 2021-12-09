import Container from "./components/Layout/Container";
import Footer from "./components/Layout/Footer";
import WeatherCard from "./components/WeatherCard";

function App() {
    return (
        <div className="app">
            <Container>
                <WeatherCard />
            </Container>

            <Footer />
        </div>
    );
}

export default App;
