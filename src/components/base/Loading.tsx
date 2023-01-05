import logo from "src/logo.svg";

type Props = {
	loading: boolean;
};

const Loading = ({ loading = false }: Props) => {
	return (
		<>
			{loading && (
				<figure>
					<img src={logo} className="loading" alt="Loading ..." />
					<p>Loading ...</p>
				</figure>
			)}
		</>
	);
};

export default Loading;
