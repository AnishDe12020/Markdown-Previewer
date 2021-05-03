import Badge from "react-bootstrap/Badge"
let marked = require("marked")

function MarkdownComponent(props) {

    var inputStyle = {
        width: "400px",
        height: "50vh",
        marginLeft: "auto",
        marginRight: "auto",
        padding:"10px"
    }

    var outputStyle = {
        width: "400px",
        height: "50vh",
        backgroundColor: "#DCDCDC",
        marginLeft: "auto",
        marginRight: "auto",
        padding:"10px"
    }

    return (
        <div className="App">
        <div className="container">
          <div className="row mt-4">
            <div className="col text-center">
              <h1>
                <Badge className="text-align-center" variant="light">
                  Markdown Preview
                </Badge>
              </h1>
            </div>
          </div>
  
          <div className="row mt-4">
            <div className="col-md-6">
              <div className="col text-center">
                <h4>
                  <Badge className="text-align-center" variants="secondary">
                    Input
                  </Badge>
                </h4>
              </div>
              <div className="mark-input" style={inputStyle}>
                    <textarea
                      className="input"
                      style={inputStyle}
                      value={props.markdown}
                      onChange={(e) => {
                        props.updateMarkdown(e.target.value)
                      }}
                    >
                      {console.log(props.markdown)}
                    </textarea>
              </div>
            </div>
  
            <div className="col-md-6">
              <div className="col text-center">
                <h4>
                  <Badge className="text-align-center" variants="secondary">
                    Preview
                  </Badge>
                </h4>
              </div>
              <div 
                style={outputStyle}
                dangerouslySetInnerHTML={{
                  __html: marked(props.markdown)
                }}
              >
              </div>  
            </div>
          </div>
  
        </div>
      </div>
      )
}

export default MarkdownComponent