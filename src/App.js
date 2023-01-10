import React from 'react';
import "./styles.css";
import ReactMarkdown from "react-markdown";
export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      getInput: '# Welcome to my React Markdown Previewer! \n## This is a sub-heading... \n### And heres some other cool stuff:'
    }
  }
  changeHandler = (e) => {
    this.setState({ getInput: e.target.value });
  }
  render() {
    return (
      <div className="Body">
        <div id="backgroundImage">
          <div id="headerStyle"><h1 id="header">Markdown Previewer</h1></div>
          <div className="EditorArea">
            <div className="Tooltip" style={{ width: "80%", height: "2rem", margin: "auto", background: "rgba(255, 255, 255, 8%)", maxWidth: "600px", textAlign: "center", paddingTop: "1rem", color: "white", fontWeight: "bolder", fontSize: "1.1rem" }}>
              Editor
            </div>
            <textarea id="editor" onChange={this.changeHandler} value={this.state.getInput}></textarea>
          </div>
          <div className="PreviewArea" style={{ paddingTop: "2rem" }}>
            <div className="Tooltip" style={{ width: "81.5%", height: "2rem", margin: "0 auto", background: "rgba(255, 255, 255, 8%)", maxWidth: "800px", textAlign: "center", paddingTop: "1rem", color: "white", fontWeight: "bolder", fontSize: "1.1rem" }}>
              Preview
            </div>
            <ReactMarkdown children={this.state.getInput} className="markdown__preview" id="preview" />
          </div>
        </div>
      </div>
    );
  }
}
