/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-undef */
import React, { Component } from "react";
import Navbar from "./Navbar";

export default class SamplePage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1>I am the sample page!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, modi.</p>
        <JumboTron />
        <ContactForm />
        <FooterSection />
      </div>
    );
  }
}
