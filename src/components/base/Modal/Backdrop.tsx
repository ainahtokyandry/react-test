import React, { MouseEventHandler, ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
	children: ReactNode;
	onClick: MouseEventHandler;
};

const Backdrop = ({ children, onClick }: Props) => {
	return (
		<motion.div
			onClick={onClick}
			className="backdrop"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			{children}
		</motion.div>
	);
};

export default Backdrop;
