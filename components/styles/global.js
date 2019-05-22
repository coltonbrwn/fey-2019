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
@font-face {
  font-family: Wingdings;
  src: url("/static/fonts/Wingdings.ttf") format("truetype");
}

html {
  font-size: 28px;
}
body {
  margin: 0;
  font-family: Monday, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;;
}
h1, h2, h3, h4, p {
  line-height: 1.25em;
  font-weight: normal;
  margin: 0 0 0.6rem;
}
h1 {
  font-size: 2.4rem;
}
h2 {
  font-size: 2rem;
}
h3 {
  font-size: 1.6rem;
  font-weight: bold;
}
h4 {
  font-size: 1.25rem;
  font-weight: bold;
}
p {
  font-size: 1rem;
  margin-top: 0;
  margin-bottom: 1em;
}



#main {
  padding-top: 9rem;
}
.wing {
  font-family: Wingdings;
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
.uppercase {
  text-transform: uppercase;
}
.lorg {
  font-size: 3.6rem;
}

.container {
  display: flex;
  width: 100%;
}

.fey-window {
  width: 100%;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
}
.fey-window .fw-pseudo {
  padding-top: 100%;
}
.fey-window--ornamental {
  background: inherit;
}
.fey-window .fw-inner {
  padding: 14%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
}
.fey-window--ornamental:before,
.fey-window--ornamental:after,
.fey-window--ornamental .fw-pseudo:before,
.fey-window--ornamental .fw-pseudo:after {
  content: '';
  width: 8%;
  height: 8%;
  background: #FFF;
  position: absolute;
}
.fey-window--ornamental:before {
  top: 0;
  left: 0;
  border-bottom-right-radius: 100%;
}
.fey-window--ornamental:after {
  top: 0;
  right: 0;
  border-bottom-left-radius: 100%;
}
.fey-window--ornamental .fw-pseudo:before {
  bottom: 0;
  left: 0;
  border-top-right-radius: 100%;
}
.fey-window--ornamental .fw-pseudo:after {
  bottom: 0;
  right: 0;
  border-top-left-radius: 100%;
}

.fey-window--oval {
  border-radius: 50%;
}

.fey-window--half-oval {
  border-bottom-right-radius: 50%;
  border-bottom-left-radius: 50%;
}

`
