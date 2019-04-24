import React from 'react';

class Calci extends React.Component{
            constructor(props){
                super(props);
                this.state={
                    input:'',
                    current:'',
                    result:''
                }
                this.divide=this.divide.bind(this);
                this.clear=this.clear.bind(this);
                this.multiplication=this.multiplication.bind(this);
                this.plus=this.plus.bind(this);
                this.minus=this.minus.bind(this);
                this.mod=this.mod.bind(this);
                this.one=this.one.bind(this);
                this.two=this.two.bind(this);
                this.three=this.three.bind(this);
                this.four=this.four.bind(this);
                this.five=this.five.bind(this);
                this.six=this.seven.bind(this);
                this.eight=this.eight.bind(this);
                this.nine=this.nine.bind(this);
                this.zero=this.zero.bind(this);
                this.dot=this.dot.bind(this);
                this.evaluate=this.evaluate.bind(this);
            }
              clear() {
                  this.setState({
                      input:'',
                      current:"",
                      result:""
                  });
              }
              evaluate(){
                // console.log(this.state.input);
                  // eslint-disable-next-line no-eval
                  var result;
                  if(this.state.input!==''){
                      try{
                        result=eval(this.state.input);
                      }
                      catch{
                           this.setState({
                               result: "Math Error"
                           });
                      }
                  }
                   if (result === undefined)
                       this.setState({
                           answer: "Math Error"
                       });
             else{

              this.setState({
                  result:result
              });
            }
            //   console.log(this.state.input);
            }
            divide(){
                if(this.state.current!=="/"&&this.state.current!=="x"&&this.state.current!=="-"&&this.state.current!=="+" && this.state.current!=="%")
                {
                this.setState({
                    input:this.state.input + "/",
                    current:"/"
                });
            }
            }
            multiplication() {
                 if (this.state.current !== "/" && this.state.current !== "x" && this.state.current !== "-" && this.state.current !== "+" && this.state.current!=="%")
                 { 
                 this.setState({
                      input: this.state.input + "*",
                      current:'x'
                  });
                }
              }
            minus() {
                 if (this.state.current !== "/" && this.state.current !== "x" && this.state.current !== "-" && this.state.current !== "+" && this.state.current!=="%")
                {
                 this.setState({
                    input: this.state.input + "-",
                    current:"-"
                    });
                }
                }
            plus() {
                 if (this.state.current !== "/" && this.state.current !== "x" && this.state.current !== "-" && this.state.current !== "+" && this.state.current!=="%")
                 {
                this.setState({
                    input: this.state.input + "+",
                    current:"plus"
                    });
                }
                  }
            dot() {
                if(this.state.current!=="."){
                this.setState({
                    input: this.state.input + ".",
                    current:"."
                    });
                }
                }
            one() {
                this.setState({
                    input: this.state.input + "1",
                    current:"1"
                        });
                }
            two() {
                this.setState({
                    input: this.state.input + "2",
                    current:"2"
                    });
                }
            three() {
                this.setState({
                        input: this.state.input + "3",
                        current:"3"
                        });
                }
            four() {
                this.setState({
                    input: this.state.input + "4",
                    current:"4"
                        });
                }
            five() {
                this.setState({
                    input: this.state.input + "5",
                    current:"5"
                        });
                }
            six() {
                this.setState({
                    input: this.state.input + "6",
                    current:"6"
                    });
                }
            seven() {
                this.setState({
                    input: this.state.input + "7",
                    current:"7"
                        });
                }
            eight() {
                this.setState({
                    input: this.state.input + "8",
                    current:"8"
                        });
                }
            nine() {
                this.setState({
                    input: this.state.input + "9",
                    current:"9"
                        });
                }
            zero() {
                this.setState({
                    input: this.state.input + "0",
                    current:"0"
                        });
                }
            mod() {
                    if (this.state.current !== "/" && this.state.current !== "x" && this.state.current !== "-" && this.state.current !== "+" && this.state.current!=="%")
                    {
                this.setState({
                    input: this.state.input + "%",
                    current:"%"
                    });
                }
                }
    render(){
        return (
            <div className="main">
            <div>
                <p className="input">{this.state.input}</p>
                <p className="result">={this.state.result}</p>
            </div>
            <ul className="number">
            <li onClick={this.clear} className="ac">AC</li>
            <li onClick={this.divide} className="divide">/</li>
            <li onClick={this.multiplication} className="multi">x</li>
            <li onClick={this.one} className="one">1</li>
            <li onClick={this.two} className="two">2</li>
            <li onClick={this.three} className="three">3</li>
            <li onClick={this.minus} className="minus">-</li>
            <li onClick={this.four} className="four">4</li> 
            <li onClick={this.five} className="five">5</li>
            <li onClick={this.six} className="six">6</li>
            <li onClick={this.plus} className="plus">+</li>
            <li onClick={this.seven} className="seven">7</li>
            <li onClick={this.eight} className="eight">8</li>
            <li onClick={this.nine} className="nine">9</li>
            <li onClick={this.mod} className="quotient">%</li>
            <li onClick={this.dot} className="dot">.</li>
            <li onClick={this.zero} className="zero">0</li>
            <li onClick={this.evaluate} className="equal">=</li>
            </ul>
            </div>
        )
    }
}

export default Calci;