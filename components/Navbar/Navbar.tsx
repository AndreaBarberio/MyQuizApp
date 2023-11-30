// components/Navbar.tsx
import Link from 'next/link';
import navbarItems from './navItems.json'; // Assicurati di impostare il percorso corretto

interface NavbarItem {
	id: number;
	title: string;
	path: string;
}

const Navbar: React.FC = () => {
	const navbarItemsData: NavbarItem[] = navbarItems;

	return (
		<nav className="bg-gray-800 p-4">
			<div className="container mx-auto flex justify-between text-white text-xl font-bold items-center">
				<Link href="/">Logo</Link>
				<div className="space-x-4 text-white">
					{navbarItemsData.map((item) => (
						<Link key={item.id} href={item.path}>
							{item.title}
						</Link>
					))}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
