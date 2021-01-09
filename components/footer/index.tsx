import React, { Component, ReactNode } from 'react';

class Footer extends Component {
  constructor(props: any) {
		super(props);
  }

  render(): ReactNode {
    return (
      <div className="b--light-silver bt w-100 tc mt3">
        <p className="mb2 mt2 silver f6">
          Copyright © 2021 Arthur Soares. Todos os Direitos Reservados
        </p>
      </div>
    );
  };
};

export default Footer;