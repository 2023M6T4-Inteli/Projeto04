import React from "react";
import { LucideIcon } from "lucide-react";

interface Props extends React.HTMLProps<HTMLInputElement> {
	Icon?: LucideIcon;
    register: any
    name: string
}

const Input: React.FC<Props> = ({ Icon, register,name, ...rest }) => {
	const input = (
		<input {...register(name)} className="w-full bg-transparent px-2 outline-none" {...rest} />
	);
	if (Icon) {
		return (
			<>
				<div className="flex grow items-center gap-4 rounded bg-[#F6F6F6] px-4 py-2">
					<Icon />
					{input}
				</div>
			</>
		);
	}

	return <input />;
};

export default Input;
