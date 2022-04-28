import React, { Component } from "react";
import "../App.css"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

class GenDescPage extends Component {
  constructor() {
    super();


    this.state = {
        title: "",
        description: ""
      };
  }


  handleTitle(event){
    let target = event.target;
    let value = target.value;

    this.setState({
      title: value
    });
  }

  async generateDescription(){
    var desc = await fetch(`http://127.0.0.1:5000/gendesc?title=${encodeURIComponent(this.state.title)}`, {
        method: "GET" 
    }).then(response => {
        if(response.ok){
            return response.json();
        }
    })

    this.setState({
        description: desc 
    })
  }

  render() {
    return (
        <div className="gendesc">
            <div className="gendescimg">
                <img className='gendesc-img' src={require("../assets/homeimage.png")}/>
            </div>

            <div className="gendescmain">
                <div className='salesgen-txt'>
                    SALESGEN
                </div>
                <div className="textfielddiv">
                    <div className="textfield">
                        <TextField
                        id="outlined-title-input"
                        label="Input Title"
                        type="title"
                        autoComplete=""
                        value={this.state.title}
                        onChange = {(event) => this.handleTitle(event)}
                        style={{width: 800}}
                        />
                    </div>
                </div>

                <div className="buttondiv">
                    <div className="genbut">
                        <Button variant="contained" color="success" onClick={() => this.generateDescription()}>
                            Generate
                        </Button>
                    </div>
                </div>

                <div className="textfielddiv">
                    <div className="textfield">
                        <TextField
                        disabled
                        id="outlined-desc-output"
                        label="Output Description"
                        type="title"
                        value={this.state.description}
                        autoComplete=""
                        style={{width: 800}}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default GenDescPage;
