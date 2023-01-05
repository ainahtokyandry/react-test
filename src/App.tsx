import { useEffect, useState } from "react";
import "./App.css";
import "./styles/bootstrap.css";
import "./styles/form.css";
import "./styles/list.css";
import "./styles/modal.css";
import Error from "./components/base/Error";
import Loading from "./components/base/Loading";
import Search from "src/components/Search";

function App() {
	const [loading, setLoading] = useState(true);
	const [position, setPosition] = useState<GeolocationPosition>();
	const [error, setError] = useState<string>();

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			(position) => {
				setError("");
				setLoading(false);
				setPosition(position);
			},
			(error) => {
				switch (error.code) {
					case 1:
						setError(
							"You cannot use this app if you block him for accessing your location. Refresh and allow it."
						);
						break;
					case 2:
						setError(
							"It seems like you are not connected to the internet. To use this app, you must be connected."
						);
						break;
					case error.POSITION_UNAVAILABLE:
						setError(
							`This error was not encountered during the development of this app. Please contact the developer. Error code: <strong>position unavailable</strong>`
						);
						break;
					case error.TIMEOUT:
						setError(
							`This error was not encountered during the development of this app. Please contact the developer. Error code: <strong>timeout</strong>`
						);
						break;
					default:
						setError(error.message);
				}
				setLoading(false);
			}
		);
	}, []);

	return (
		<>
			<Search position={position} />

			<Loading loading={loading} />

			<Error error={error} />
		</>
	);
}

export default App;
