import '../App.css';
import {Component} from 'react';

class calc extends Component{
    constructor() {
        super();
        this.state = {
          expression:'',
          displayValue:'0',
        };
    }
    
    handleButtonClick = (value) =>{
      this.setState((prevState) => ({
        expression: prevState.expression + value,
      }));
    };

    handleBackspace = () => {
      const { expression } = this.state;
      const {displayValue} = this.state;
  
      this.setState({
        expression: expression.slice(0, -1),
        displayValue: displayValue,
      });
    };

    handleCalculate = () => {
        const displayValue = eval(this.state.expression);
        this.setState({
          displayValue : displayValue,
        });}

    render(){
        const {displayValue} = this.state;
        const {expression} = this.state;

    return (
        <div className='body'>
        <center>
          <div className='container-fluid'>
            <div className='col-3' id='calc'>
              <div className='row flex-column'>
                <div className='col' id='display'>
                  <br></br>
                  <br></br>
                  <p className='expression'>{expression}</p>
                  <p className='display'>{displayValue}</p>
                  <br></br>
                  <br></br>
                </div>
                <div className='col' id='buttons'>
                  <div className='row'>
                    <button type="button" className="btn btn-dark col" onClick={() => this.handleButtonClick('7')}>7</button>
                    <button type="button" className="btn btn-dark col" onClick={() => this.handleButtonClick('8')}>8</button>
                    <button type="button" className="btn btn-dark col" onClick={() => this.handleButtonClick('9')}>9</button>
                    <button type="button" className="btn btn-dark col" onClick={this.handleBackspace}>←</button>
                  </div>
                  <div className='row'>
                    <button type="button" className="btn btn-dark col" onClick={() => this.handleButtonClick('4')}>4</button>
                    <button type="button" className="btn btn-dark col" onClick={() => this.handleButtonClick('5')}>5</button>
                    <button type="button" className="btn btn-dark col" onClick={() => this.handleButtonClick('6')}>6</button>
                    <button type="button" className="btn btn-dark col" onClick={() => this.handleButtonClick('/')}>/</button>
                  </div>
                  <div className='row'>
                    <button type="button" className="btn btn-dark col" onClick={() => this.handleButtonClick('1')}>1</button>
                    <button type="button" className="btn btn-dark col" onClick={() => this.handleButtonClick('2')}>2</button>
                    <button type="button" className="btn btn-dark col" onClick={() => this.handleButtonClick('3')}>3</button>
                    <button type="button" className="btn btn-dark col" onClick={() => this.handleButtonClick('*')}>x</button>
                  </div>
                  <div className='row'>
                    <button type="button" className="btn btn-dark col" id='lastfirst'onClick={() => this.handleButtonClick('0')}>0</button>
                    <button type="button" className="btn btn-dark col" onClick={() => this.handleButtonClick('.')}>.</button>
                    <button type="button" className="btn btn-dark col" onClick={this.handleCalculate}>=</button>
                    <button type="button" className="btn btn-dark col" id='lastlast'onClick={() => this.handleButtonClick('+')}>+</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </center>
      </div>
    );
    }
}

export default calc;