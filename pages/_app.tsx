import Layout from '@/layout';
import store from '@/redux/store';
import '@/styles/globals.css';
import { NextComponentType, NextPageContext } from 'next/types';
import { Provider } from 'react-redux';

export default function App({
	Component,
	pageProps,
}: NextComponentType<NextPageContext, any, any> | any) {
	return (
		<Layout>
			<Provider store={store}>
				<Component {...pageProps} />
			</Provider>
		</Layout>
	);
}
