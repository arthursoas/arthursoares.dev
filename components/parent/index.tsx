import Head from 'next/head';
import Nav from '../nav';
import Footer from '../footer';
import BlipChatWidget from './blipChatWidget';
import React, { Component, ReactNode } from 'react';
import { ParentProps } from './parentProps';

class Parent extends Component<ParentProps, any> {
  constructor(props: ParentProps) {
    super(props);
  }

  render(): ReactNode {
    return (
      <div id="home" className="min-h-screen flex flex-col">
        <BlipChatWidget />
				<Head>
					<title>{this.props.title || "Arthur Soares"}</title>
					<meta name="yandex-verification" content="2df1c6057b357520" />
          <link rel="icon" href="/favicon.ico" />
				</Head>
        <Nav />
        <div className={`h-auto flex-grow px-4 ${this.props.className}`}>
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  };
};

export default Parent;