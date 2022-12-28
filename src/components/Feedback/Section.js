import React from "react";
import { Component } from "react";
import {SectionStyle} from "../App.styled"

class Section extends Component {
    render() {
        return (
            <section>
            <SectionStyle>{this.props.title}</SectionStyle>
                {this.props.children}
                </section>
        )
    }
}

export default Section;


