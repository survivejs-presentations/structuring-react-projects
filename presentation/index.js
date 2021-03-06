// Import React
import React from "react";
import mapValues from "lodash/mapValues";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  Link,
  List,
  ListItem,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Table,
  TableRow,
  TableHeaderItem,
  TableItem,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("./custom.css");

const slideTransition = ["slide"];
const images = mapValues({
  cssHtmlJS: require("../images/css-html-js.png"),
  components: require("../images/components.jpg"),
  tracer: require("../images/tracer.jpg"),
  facade: require("../images/facade.jpg"),
  folders: require("../images/folders.jpg"),
  fractal: require("../images/fractal.jpg"),
  palm: require("../images/palm.jpg"),
  prototype: require("../images/prototype.jpg"),
  scaffolding: require("../images/scaffolding.jpg"),
  mud: require("../images/mud.jpg"),
  lasagna: require("../images/lasagna.jpg"),
  ravioli: require("../images/ravioli.jpg"),
  spaghetti: require("../images/spaghetti.jpg"),
  storybook: require("../images/storybook.gif"),
  purse: require("../images/purse.jpg"),
  swiss: require("../images/swiss.jpg"),
  view: require("../images/view.jpg"),
  survivejs: require("../images/survivejs.png"),
  atomicDesign: require("../images/atomic-design.mp4")
}, v => v.replace('/', ''));

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "black",
  tertiary: "#09b5c4",
  quartenary: "rgba(255, 219, 169, 0.43)"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={slideTransition} transitionDuration={500}>
          <Slide transition={slideTransition} bgColor="secondary">
            <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
              Structuring React Projects
            </Heading>
          </Slide>

          <Slide transition={slideTransition} bgColor="secondary">
            <Heading size={2} textColor="tertiary">
              Early Stage Techniques
            </Heading>
          </Slide>

          <Slide transition={slideTransition} bgImage={images.palm} bgDarken={0.45}>
            <Heading size={2} textColor="tertiary">
              Pretotyping
            </Heading>
            <Layout>
              <Text>
                <Link href="https://mediainspiratorium.com/1990-2016/">mediaInspiratorium</Link>
              </Text>
            </Layout>
          </Slide>

          <Slide transition={slideTransition} bgColor="black">
            <BlockQuote>
              <Quote>"Should we build it at all?" or "If we build it, will people buy it and use it?" - Alberto Savoia</Quote>
            </BlockQuote>
          </Slide>

          <Slide transition={slideTransition} bgImage={images.prototype} bgDarken={0.45}>
            <Heading size={2} textColor="tertiary">
              Prototyping
            </Heading>
            <Layout>
              <Text>
                <Link href="https://pixabay.com/en/concept-car-forward-prototype-737341/">moerschy</Link>
              </Text>
            </Layout>
          </Slide>

          <Slide transition={slideTransition} bgColor="black">
            <BlockQuote>
              <Quote>... most prototypes are built to answer questions such as, "Can we build it?" or "Will it work as expected?" - Alberto Savoia</Quote>
            </BlockQuote>
          </Slide>

          <Slide transition={slideTransition} bgImage={images.tracer} bgDarken={0.45}>
            <Heading size={2} textColor="tertiary">
              Tracer Bullets
            </Heading>
            <Layout>
              <Text>
                <Link href="https://pixabay.com/en/submachine-gun-rifle-62902/">WikiImages</Link>
              </Text>
            </Layout>
          </Slide>

          <Slide transition={slideTransition} bgColor="black">
            <BlockQuote>
              <Quote>Tracer bullets are an easy way for machine gunners to see where their bullets are going, and adjust the trajectory to make the bullets go where you want them to go - <Link href="http://wiki.c2.com/?TracerBullets">C2</Link></Quote>
            </BlockQuote>
          </Slide>

          <Slide transition={slideTransition} bgColor="black">
            <BlockQuote>
              <Quote>There are two ways to write error-free programs; only the third one works - Alan Perlis</Quote>
            </BlockQuote>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1}>
              Recap
            </Heading>
            <List>
              <Appear><ListItem><b>Pretotype</b> before going technical</ListItem></Appear>
              <Appear><ListItem><b>Prototype</b> to see if we can build it</ListItem></Appear>
              <Appear><ListItem>Shoot <b>tracer bullets</b> through the architecture to get a better idea</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition} bgColor="secondary">
            <Heading size={2} textColor="tertiary">
              Architectures Styles
            </Heading>
          </Slide>

          <Slide transition={slideTransition} bgImage={images.mud} bgDarken={0.45}>
            <Heading size={1} caps textColor="primary">
              Big Ball of Mud
            </Heading>
            <Layout>
              <Text>
                <Link href="https://pixabay.com/en/soldiers-army-basic-training-mud-885905/">skeeze</Link>
              </Text>
            </Layout>
          </Slide>

          <Slide transition={slideTransition} bgColor="black">
            <BlockQuote>
              <Quote>A haphazardly structured, sprawling, sloppy, duct-tape and bailing wire, spaghetti code jungle - <Link href="http://www.laputan.org/mud/">Brian Foote and Joseph Yoder</Link></Quote>
            </BlockQuote>
          </Slide>

          <Slide transition={slideTransition} bgImage={images.spaghetti} bgDarken={0.45}>
            <Heading size={1} caps textColor="primary">
              Spaghetti Code
            </Heading>
            <Layout>
              <Text>
                <Link href="https://pixabay.com/en/clams-spaghetti-tomatoes-olive-oil-706125/">pixel1</Link>
              </Text>
            </Layout>
          </Slide>

          <Slide transition={slideTransition} bgColor="black">
            <BlockQuote>
              <Quote>The object-oriented version of spaghetti code is, of course, lasagna code. (Too many layers). - Roberto Waltman</Quote>
            </BlockQuote>
          </Slide>

          <Slide transition={slideTransition} bgImage={images.lasagna} bgDarken={0.45}>
            <Heading size={1} caps textColor="primary">
              Lasagna Code
            </Heading>
            <Layout>
              <Text>
                <Link href="https://pixabay.com/en/lasagna-food-pasta-restaurant-499544/">DianaRadulescu</Link>
              </Text>
            </Layout>
          </Slide>

          <Slide transition={slideTransition} bgImage={images.ravioli} bgDarken={0.45}>
            <Heading size={1} caps textColor="primary">
              Ravioli Code
            </Heading>
            <Layout>
              <Text>
                <Link href="https://pixabay.com/en/meatball-ravioli-italian-food-964959/">ecomflips</Link>
              </Text>
            </Layout>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1}>
              Recap
            </Heading>
            <List>
              <Appear><ListItem>Easiest pattern - <b>big ball of mud</b> (ad hoc architecture)</ListItem></Appear>
              <Appear><ListItem>Spaghetti code - follow the code to find the truth, easy to end up with a mess</ListItem></Appear>
              <Appear><ListItem>Lasagna code - endless amount of layers, can work</ListItem></Appear>
              <Appear><ListItem>Ravioli code - tight encapsulation, does this scale?</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition} bgColor="black">
            <BlockQuote>
              <Quote>Organizations which design systems ... are constrained to produce designs which are copies of the communication structures of these organizations - M. Conway</Quote>
            </BlockQuote>
          </Slide>

          <Slide transition={slideTransition} bgColor="secondary">
            <Heading size={2} textColor="tertiary">
              React Architectures
            </Heading>
          </Slide>

          <Slide transition={slideTransition}>
            <Image src={images.cssHtmlJS} margin="0px auto 40px" height="524px"/>
          </Slide>

          <Slide transition={slideTransition} bgImage={images.facade} bgDarken={0.45}>
            <Heading size={1} caps textColor="primary">
              All in One
            </Heading>
            <Layout>
              <Text>
                <Link href="https://pixabay.com/en/swiss-army-knife-knife-swiss-knife-364232/">flag</Link>
              </Text>
            </Layout>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading caps fit size={1}>
              Single File
            </Heading>
            <CodePane>
          {`├── index.jsx`}
            </CodePane>
          </Slide>

          <Slide transition={slideTransition} bgImage={images.folders} bgDarken={0.45}>
            <Heading size={1} caps textColor="primary">
              Splitting Up
            </Heading>
            <Layout>
              <Text>
                <Link href="https://pixabay.com/en/folder-federal-folder-file-archive-626332/">422737</Link>
              </Text>
            </Layout>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading caps fit size={1}>
              Directory per Concept
            </Heading>
            <CodePane>
          {`├── actions
│   └── NoteActions.js
├── components
│   ├── App.jsx
│   ├── Note.jsx
│   └── Notes.jsx
├── constants
│   └── itemTypes.js
├── index.jsx
├── libs
│   ├── alt.js
│   ├── persist.js
│   └── storage.js
├── main.css
└── stores
    └── NoteStore.js`}
            </CodePane>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1} caps>
              Components
            </Heading>
            <img src={images.storybook} height="524px" alt="Storybook" />
            <Text>
              <Link href="https://getstorybook.io/">Storybook</Link>
            </Text>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading caps fit size={1}>
              Directory per Component
            </Heading>
            <CodePane>
          {`├── actions
│   └── NoteActions.js
├── components
│   ├── App
│   │   ├── App.jsx
│   │   ├── app.css
│   │   ├── app_test.jsx
│   │   └── index.js
...
│   └── index.js
├── constants
│   └── itemTypes.js
├── index.jsx
├── libs
...
├── main.css
└── stores
    └── NoteStore.js`}
            </CodePane>
          </Slide>

          <Slide transition={slideTransition} bgImage={images.view} bgDarken={0.45}>
            <Heading size={1} caps textColor="primary">
              Views
            </Heading>
            <Layout>
              <Text>
                <Link href="https://pixabay.com/en/man-view-from-the-roof-618344/">547877</Link>
              </Text>
            </Layout>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading caps fit size={1}>
              Directory per View
            </Heading>
            <CodePane>
          {`├── components
│   ├── Note
│   │   ├── Note.jsx
│   │   ├── index.js
│   │   ├── note.css
│   │   └── note_test.jsx
│   ├── Routes
│   │   ├── Routes.jsx
│   │   ├── index.js
│   │   └── routes_test.jsx
│   └── index.js
...
├── index.jsx
├── main.css
└── views - Composed of components
    ├── Home
    │   ├── Home.jsx
    │   ├── home.css
    │   ├── home_test.jsx
    │   └── index.js
    ├── Register
    │   ├── Register.jsx
    │   ├── index.js
    │   ├── register.css
    │   └── register_test.jsx
    └── index.js`}
            </CodePane>
          </Slide>

          <Slide transition={slideTransition} bgImage={images.view} bgDarken={0.45}>
            <Link href="https://github.com/gajus/create-index">
              <Heading size={1} caps textColor="primary">
                gajus/create-index
              </Heading>
            </Link>
          </Slide>

          <Slide transition={slideTransition} bgImage={images.fractal} bgDarken={0.45}>
            <Heading size={1} caps textColor="primary">
              Fractals
            </Heading>
            <Layout>
              <Text>
                <Link href="https://pixabay.com/en/abstract-fractal-sphere-eye-1414331/">MartaNemcova</Link>
              </Text>
            </Layout>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading caps fit size={1}>
              Directory per Feature
            </Heading>
            <CodePane>
          {`├── components
...
├── features - Composed of components
│   ├── Login
│   │   ├── Login.jsx
│   │   ├── index.js
│   │   ├── login.css
│   │   └── login_test.jsx
...
├── index.jsx
├── main.css
└── views - Composed of features and components
    ├── Home
    │   ├── Home.jsx
    │   ├── home.css
    │   ├── home_test.jsx
    │   └── index.js
    ├── Register
    │   ├── Register.jsx
    │   ├── index.js
    │   ├── register.css
    │   └── register_test.jsx
    └── index.js`}
            </CodePane>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1} caps>
              Atomic Design
            </Heading>
            <video autoPlay loop margin="40px auto" height="524px">
              <source src={images.atomicDesign} />
            </video>
            <Text>
              <Link href="http://patternlab.io/">Pattern Lab</Link>
            </Text>
          </Slide>

          <Slide transition={slideTransition}>
            <Link href="https://arc.js.org/">
              <Heading caps fit size={1}>
                Atomic React
              </Heading>
            </Link>
            <CodePane>
          {`├── App.js
├── atoms
│   ├── Badge
│   │   ├── index.js
│   │   └── index.test.js
│   ├── Button
│   │   ├── index.js
│   │   └── index.test.js
...
│   ├── TableRow
│   │   ├── index.js
│   │   └── index.test.js
│   └── index.js
├── globals.js
├── index.js
├── molecules
│   ├── Blockquote
│   │   ├── index.js
│   │   └── index.test.js
...
│   ├── Table
│   │   ├── index.js
│   │   └── index.test.js
│   └── index.js
├── organisms
│   ├── FeatureList
│   │   ├── index.js
│   │   └── index.test.js
...
│   ├── Hero
│   │   ├── index.js
│   │   └── index.test.js
│   └── index.js
├── pages
│   ├── HomePage
│   │   ├── index.js
│   │   └── index.test.js
│   ├── SamplePage
│   │   ├── index.js
│   │   └── index.test.js
│   └── index.js
└── templates
    ├── PageTemplate
    │   ├── index.js
    │   └── index.test.js
    └── index.js`}
            </CodePane>
          </Slide>

          <Slide transition={slideTransition} bgImage={images.facade} bgDarken={0.45}>
            <Heading size={1} caps textColor="primary">
              Facade
            </Heading>
            <Layout>
              <Text>
                <Link href="https://pixabay.com/en/facade-window-home-building-117288/">Hans</Link>
              </Text>
            </Layout>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading caps fit size={1}>
              Separating State from Components
            </Heading>
            <CodePane>
          {`├── components
│   ├── App.js
│   ├── App.test.js
│   ├── Note.js
│   └── Notes.js
├── constants
│   └── itemTypes.js
├── index.js
├── main.css
└── state
    ├── Provider.js
    ├── actions.js
    ├── alt
    │   ├── Provider.js
    │   ├── actions
    │   │   ├── LaneActions.js
    │   │   ├── NoteActions.js
    │   │   └── index.js
    │   ├── alt.js
    │   ├── connect.js
    │   ├── init.js
    │   ├── persist.js
    │   └── stores
    │       ├── LaneStore.js
    │       └── NoteStore.js
    ├── connect.js
    ├── env.js
    ├── index.js
    ├── init.js
    ├── redux
    │   ├── Provider.js
    │   ├── actions
    │   │   ├── LaneActions.js
    │   │   ├── NoteActions.js
    │   │   └── index.js
    │   ├── connect.js
    │   ├── init.js
    │   ├── reducers
    │   │   ├── index.js
    │   │   ├── lanes.js
    │   │   └── notes.js
    │   └── store
    │       ├── index.js
    │       ├── store.dev.js
    │       └── store.prod.js
    └── storage.js`}
            </CodePane>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1}>
              Recap
            </Heading>
            <List>
              <Appear><ListItem>Good structure works with you, bad structure against you</ListItem></Appear>
              <Appear><ListItem>Different structures for different stages</ListItem></Appear>
              <Appear><ListItem>Evolve as you go, {`don't`} be afraid to abstract</ListItem></Appear>
              <Appear><ListItem>Big applications are fractal (smaller applications inside bigger ones)</ListItem></Appear>
              <Appear><ListItem>As component hierarchy evolves, {`you'll`} end up with different levels of abstraction (abstract top, concrete bottom, lasagna anyone?)</ListItem></Appear>
              <Appear><ListItem>Remember Conway, avoid dogma</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition}>
            <Link href="http://www.survivejs.com/">
              <Heading size={1}>
                SurviveJS
              </Heading>
            </Link>
            <Image src={images.survivejs} margin="0px auto 40px" height="524px"/>
          </Slide>

          <Slide transition={slideTransition} bgColor="tertiary">
            <Heading size={1} caps fit textColor="primary">
              Made in Finland by
            </Heading>
            <Link href="https://twitter.com/bebraw">
              <Heading caps fit size={2} textColor="secondary">
                Juho Vepsäläinen
              </Heading>
            </Link>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
