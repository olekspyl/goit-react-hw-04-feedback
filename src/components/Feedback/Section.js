import React from "react";
import {SectionStyle} from "../App.styled"

export default function Section({title, children}) {
  return (
            <section>
            <SectionStyle>{title}</SectionStyle>
                {children}
            </section>
        )
};



