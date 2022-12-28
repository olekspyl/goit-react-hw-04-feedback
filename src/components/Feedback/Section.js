import React from "react";
import { Component } from "react";

class Section extends Component {
    render() {
        return (
            <section>
            <h1>{this.props.title}</h1>
                {this.props.children}
                </section>
        )
    }
}

export default Section;


