import css from 'styled-jsx/css'

export default css`

@font-face {
  font-family: Monday;
  src: url("/static/fonts/Monday-Light.otf") format("opentype");
}
@font-face {
  font-family: Monday;
  font-style: italic;
  src: url("/static/fonts/Monday-LightItalic.otf") format("opentype");
}

#main {
  padding-top: 7rem;
}
.h-100 {
  height: 100%;
}
.flex {
  display: flex;
}
.flex--column {
  flex-direction: column;
}
.flex-1 {
  flex: 1;
}
.pad {
  padding: 1rem;
}
.border-left {
  border-left: 1px solid #888;
}
.border-right {
  border-right: 1px solid #888;
}
.border-top {
  border-top: 1px solid #888;
}
.border-bottom {
  border-bottom: 1px solid #888;
}
.italic {
  font-style: italic;
}

body {
  margin: 0;
  font-family: Monday, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
}
p {
  margin-top: 0;
}


`
