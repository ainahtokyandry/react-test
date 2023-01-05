import { AnimatePresence } from "framer-motion";
import { MouseEventHandler, ReactNode } from "react";
import ModalContent from "./Content";

type Props = {
	isOpen: boolean;
	children: ReactNode;
	close: MouseEventHandler;
};

const Modal = ({ isOpen, children, close }: Props) => {
	return (
		<AnimatePresence
			// Disable any initial animations on children that
			// are present when the component is first rendered
			initial={false}
			// Only render one component at a time.
			// The exiting component will finish its exit
			// animation before entering component is rendered
			mode="wait"
			// Fires when all exiting nodes have completed animating out
			onExitComplete={() => null}
		>
			{isOpen && (
				<ModalContent handleClose={close}>{children}</ModalContent>
			)}
		</AnimatePresence>
	);
};

export default Modal;
