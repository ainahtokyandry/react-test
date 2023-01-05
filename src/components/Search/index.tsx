import { ChangeEvent, SyntheticEvent, useState } from "react";

import Result from "src/types/Result";
import Modal from "src/components/base/Modal";
import { get } from "src/lib/http";
import List from "./List";
import Form from "../Form";

type Props = { position?: GeolocationPosition };

const Search = ({ position }: Props) => {
	const [searchValue, setSearchValue] = useState("");
	const [activeResult, setActiveResult] = useState<Result>();
	const [results, setResults] = useState<Result[]>();
	const [isOpen, setIsOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string>();

	const closeModal = () => setIsOpen(false);

	const onChangeSearchValue = (e: ChangeEvent<HTMLInputElement>) =>
		setSearchValue(e.currentTarget.value);

	const searchHandler = async (e: SyntheticEvent) => {
		e.preventDefault();
		setError("");

		if (position && searchValue) {
			setIsLoading(true);
			try {
				const res = await get(
					`search?query=${searchValue}&ll=${position.coords.latitude},${position.coords.longitude}&v=20210324&limit=10`
				);
				setResults(res.results);
			} catch (_) {
				setError("Could not reach the API. You can retry");
			}
			setIsLoading(false);
		}
	};

	const openModal = async (item: Result) => {
		setIsOpen(true);
		setActiveResult(item);
	};

	return (
		<main>
			<div
				className={
					"m-auto flex flex-col gap-4 items-start" +
					(isLoading || (results && results.length === 0)
						? " mb-4"
						: results
						? " mb-0"
						: "")
				}
			>
				<span className="text-red">{error}</span>
				<Form
					onChangeSearchValue={onChangeSearchValue}
					searchHandler={searchHandler}
					searchValue={searchValue}
					isLoading={isLoading}
				/>
			</div>
			<List
				results={results}
				isLoading={isLoading}
				openModal={openModal}
			/>
			<Modal isOpen={isOpen} close={closeModal}>
				<h3>{activeResult?.name}</h3>
			</Modal>
		</main>
	);
};

export default Search;
