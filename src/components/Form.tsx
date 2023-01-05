import { ChangeEventHandler, FormEventHandler } from "react";

type Props = {
	searchHandler: FormEventHandler;
	searchValue: string;
	onChangeSearchValue: ChangeEventHandler;
	isLoading?: boolean;
};

const Form = ({
	onChangeSearchValue,
	searchHandler,
	searchValue,
	isLoading,
}: Props) => {
	return (
		<form onSubmit={searchHandler}>
			<input
				autoFocus
				type="search"
				value={searchValue}
				onChange={onChangeSearchValue}
			/>
			<button disabled={isLoading} type="submit">
				Search
			</button>
		</form>
	);
};

export default Form;
