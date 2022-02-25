import "./css/FontsAndColors.css";
import "./css/style.css";
import "./components/NavigationBar";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Services from "./components/Services";
import Usps from "./components/Usps";
import Portfolio from "./components/Portfolio";

import "./scripts/script";

function App() {
	return (
		<div className='App'>
			<NavigationBar />
			<Home />
			<Services />
			<Usps />
			<Portfolio />
			<Footer />
		</div>
	);
}

export default App;
