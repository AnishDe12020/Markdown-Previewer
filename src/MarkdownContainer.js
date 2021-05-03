import React, {Component} from "react"

import MarkdownComponent from "./MarkdownComponent"

class Markdown extends Component {

    constructor(props) {
      super(props)
      this.state = {
        markdown: ""
      }
      this.updateMarkdown = this.updateMarkdown.bind(this)
    }
  
    updateMarkdown(markdown) {
      this.setState({ markdown })
    }
  
    render() {

        return (
            <MarkdownComponent 
            updateMarkdown={this.updateMarkdown} 
            markdown={this.state.markdown}
            />
        )
        
      }
  }

export default Markdown