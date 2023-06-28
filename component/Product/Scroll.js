import React from 'react'
import Nav from "./Navbar";
import Section from "./Section";

export default function Scroll() {
    return (
        <div>
            <Nav />
            <Section
                title="Section 1"
                subtitle="kdsfhjsdbfgdsgsjdghd gd khjdfk hjifgb jfjhh jfg hjfioh jih"
                dark={true}
                id="section1"
            />
            <Section
                title="Section 2"
                subtitle="2222222222222222 kdsfhjsdbfgdsgsjdghd gd khjdfk hjifgb jfjhh jfg hjfioh jih"
                dark={false}
                id="section2"
            />
            <Section
                title="Section 3"
                subtitle="33333333333 vnkdsfhjsdbfgdsgsjdg kdsfhjsdbfgdsgsjdghd gd khjdfk hjifgb jfjhh jfg hjfioh jihhd gd khjdfk hjifgb jfjhh jfg hjfioh jih"
                dark={true}
                id="section3"
            />
            <Section
                title="Section 4"
                subtitle="44444444444444 kdsfhjsdbfgdsgsjdghd gd khjdfk hjifgb jfjhh jfg hjfioh jih"
                dark={false}
                id="section4"
            />
            <Section
                title="Section 5"
                subtitle="5555555dsadf kdsfhjsdbfgdsgsjdghd gd khjdfk hjifgb j"
                dark={true}
                id="section5"
            />
        </div>
    )
}
