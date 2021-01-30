import React, { ReactNode } from 'react';
import Parent from '../../components/parent';

class About extends React.Component {
  constructor(props: any) {
    super(props);
  }

	render(): ReactNode {
		return (
			<Parent>
				<h1>About</h1>
			</Parent>
		)
	}
}

export default About;