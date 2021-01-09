import Head from 'next/head';
import Footer from '../footer';
import React, { Component, ReactNode } from 'react';
import { ParentProps } from './parentProps';

class Parent extends Component<ParentProps, any> {
  constructor(props: ParentProps) {
    super(props);
  }

  render(): ReactNode {
    return (
      <div id="home" className="min-h-screen flex flex-col">
				<Head>
					<title>{this.props.title || "Arthur Soares"}</title>
					<meta name="yandex-verification" content="2df1c6057b357520" />
				</Head>
        <div className="h-auto flex-grow">
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  };
};

export default Parent;