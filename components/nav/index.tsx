import Link from 'next/link';
import React, { Component, ReactNode } from 'react';

class Nav extends Component {
  constructor(props: any) {
		super(props);
  }

  render(): ReactNode {
    return (
      <div id="nav" className="h-10 flex items-center justify-start px-4 mb-3 bg-gray-400">
        <Link href="/">
          <a className="mr-4 font-medium">Home</a>
        </Link>
        <Link href="/about">
          <a className="mr-4 font-medium">Sobre</a>
        </Link>
      </div>
    );
  };
};

export default Nav;