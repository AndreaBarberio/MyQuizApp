import { IButtonProps } from '@/types/utilities';
import Link from 'next/link';

const Button = (props: IButtonProps) => {
	return (
		<Link href={props.link}>
			<button className="" title={props.title}>
				{props.username}
			</button>
		</Link>
	);
};

export default Button;
