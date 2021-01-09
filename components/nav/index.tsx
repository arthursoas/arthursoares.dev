import Link from 'next/link';
import React, { Component, ReactNode } from 'react';
import { NavState } from './navState';

class Nav extends Component<any, NavState> {
  currentPath: string;
  basePath: string;
  aboutPath: string;

  constructor(props: any) {
    super(props);

    this.state = {
      basePath: '/',
      aboutPath: '/about'
    };
  }

  componentDidMount() {
    this.setState({
      currentPath: window.location.pathname,
      ...this.state
    });
  }

  render(): ReactNode {
    return (
      <div id="nav" className="h-10 flex items-center justify-start px-4 mb-3 bg-gray-300">
        <Link href={this.state.basePath}>
          <a className={`mr-4 ${this.state.basePath === this.state.currentPath ? "font-medium" : ""}`}>
            Home
          </a>
        </Link>
        <Link href={this.state.aboutPath}>
          <a className={`mr-4 ${this.state.aboutPath === this.state.currentPath ? "font-medium" : ""}`}>
            Sobre
          </a>
        </Link>
      </div>
    );
  };
};

export default Nav;