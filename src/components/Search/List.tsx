import { motion } from "framer-motion";

import Result from "src/types/Result";

type Props = {
	results?: Result[];
	openModal: Function;
	isLoading: boolean;
};

const List = ({ results, openModal, isLoading }: Props) => {
	return (
		<>
			{results && !isLoading ? (
				results.length === 0 ? (
					<p>No result</p>
				) : (
					<motion.ul className="mt-4">
						{results.map((result: Result, key) => (
							<li key={key}>
								<button onClick={() => openModal(result)}>
									{result.name}
								</button>
							</li>
						))}
					</motion.ul>
				)
			) : (
				isLoading && <span>Loading ...</span>
			)}
		</>
	);
};

export default List;
