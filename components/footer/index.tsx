import React, { Component, ReactNode } from 'react';

class Footer extends Component {
  constructor(props: any) {
		super(props);
  }

  render(): ReactNode {
    return (
      <div className="bottom-0 h-10 flex items-center justify-center border-t border-gray-400">
        <p className="text-gray-400">
          Copyright © 2021 - {new Date().getFullYear()} Arthur Soares.
          Todos os Direitos Reservados
        </p>
      </div>
    );
  };
};

export default Footer;