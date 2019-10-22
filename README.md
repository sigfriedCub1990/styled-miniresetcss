# styled-miniresetcss

[![npm downloads](https://img.shields.io/npm/dm/styled-minireset.css)](https://npm.im/styled-minireset.css) ![npm version](https://img.shields.io/npm/v/styled-minireset.css)
[![CircleCI](https://circleci.com/gh/sigfriedCub1990/styled-miniresetcss.svg?style=svg)](https://circleci.com/gh/sigfriedCub1990/styled-miniresetcss)

Jeremy Thomas's [minireset.css](https://github.com/jgthms/minireset.css) for [styled-components](https://github.com/styled-components/styled-components)

---

## Installation:

`npm i styled-minireset.css` (use the `-S` flag if you're on npm 4 or earlier).

## Usage:

### Styled Components 4.x

```jsx
import * as React from "react";
import { MiniReset } from "styled-minireset.css";
const App = () => (
  <React.Fragment>
    <Reset />
    <div>Hi, I'm an app!</div>
  </React.Fragment>
);
```

You can also use the default export or named export (lowercase) in your own
global style:

```jsx
import * as React from 'react'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-minireset.css'
const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
`
const App = () => (
  <React.Fragment>
    <GlobalStyle />
    <div>Hi, I'm an app!</div>
  </React.Fragment>
}
export default App
```
