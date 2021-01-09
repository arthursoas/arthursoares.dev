import React, { Component, ReactNode } from 'react';

class Footer extends Component {
  constructor(props: any) {
		super(props);
  }

  render(): ReactNode {
    return (
      <div className="bottom-0 flex items-center justify-center border-t border-gray-500 px-4 mt-3">
        <p className="text-gray-500 my-2 text-center">
          Copyright © 2021 - {new Date().getFullYear()} Arthur Soares.
          Todos os Direitos Reservados.
        </p>
      </div>
    );
  };
};

export default Footer;