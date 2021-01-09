import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Parent from '../components/parent';

class Home extends React.Component {
	constructor(props: any) {
		super(props);
	}

	render(): ReactNode {
		return (
			<Parent>
				<h1 className="centered">Arthur Soares (.dev)</h1>
			</Parent>
		)
	}
}

export default Home;