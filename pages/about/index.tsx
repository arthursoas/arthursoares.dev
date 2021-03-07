import React, { ReactNode } from 'react';
import Parent from '../../components/parent';

class About extends React.Component {
  constructor(props: any) {
    super(props);
  }

	render(): ReactNode {
		return (
			<Parent>
				<h1 className="text-4xl font-thin">Sobre este site</h1>
				<div className="mt-3 border-t border-gray-500"></div>
			</Parent>
		)
	}
}

export default About;