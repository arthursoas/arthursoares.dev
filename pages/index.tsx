import React, { ReactNode } from 'react';
import Parent from '../components/parent';

class Home extends React.Component {
	constructor(props: any) {
		super(props);
	}

	render(): ReactNode {
		return (
			<Parent>
				<h1>Arthur Soares (.dev)</h1>
			</Parent>
		)
	}
}

export default Home;