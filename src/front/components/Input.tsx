import React from "react";
import { LucideIcon } from "lucide-react";

interface Props extends React.HTMLProps<HTMLInputElement> {
	Icon?: LucideIcon;
}

const Input: React.FC<Props> = ({Icon, ...rest}) => {
    const input = <input className="px-2 w-full bg-transparent outline-none" {...rest} />
    if (Icon) {
        return (
            <div className="flex items-center gap-4 px-4 py-2 bg-[#F6F6F6] rounded grow">
                <Icon />
                {input}
            </div>
        )
    }

	return <input />;
};

export default Input;
