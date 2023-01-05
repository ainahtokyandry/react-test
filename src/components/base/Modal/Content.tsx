import React, { MouseEventHandler, ReactNode } from "react";
import { motion } from "framer-motion";
import Backdrop from "./Backdrop";

const dropIn = {
	hidden: {
		y: "-100vh",
		opacity: 0,
	},
	visible: {
		y: "0",
		opacity: 1,
		transition: {
			duration: 0.1,
			type: "spring",
			damping: 25,
			stiffness: 500,
		},
	},
	exit: {
		y: "100vh",
		opacity: 0,
	},
};

type Props = {
	handleClose: MouseEventHandler;
	children: ReactNode;
};

const ModalContent = ({ handleClose, children }: Props) => {
	return (
		<Backdrop onClick={handleClose}>
			<motion.div
				onClick={(e) => e.stopPropagation()}
				className="modal orange-gradient"
				variants={dropIn}
				initial="hidden"
				animate="visible"
				exit="exit"
			>
				{children}
				<button className="btn-close" onClick={handleClose}>
					&#215;
				</button>
			</motion.div>
		</Backdrop>
	);
};

export default ModalContent;
