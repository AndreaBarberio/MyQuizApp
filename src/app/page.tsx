'use client';
import Layout from './layout';
import HomePage from './pages';
// @react/client

export default function Home() {
	return (
		<Layout>
			<main className="flex min-h-screen flex-col items-center justify-between p-24">
				<HomePage></HomePage>
			</main>
		</Layout>
	);
}
