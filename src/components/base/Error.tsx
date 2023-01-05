type Props = {
	error?: string;
};

const Error = ({ error }: Props) => {
	return (
		<>
			{error && (
				<span
					className="error"
					dangerouslySetInnerHTML={{ __html: error }}
				/>
			)}
		</>
	);
};

export default Error;
