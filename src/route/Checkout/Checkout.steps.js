
import React, { Component } from 'react';
import './Checkout.extension.style.scss'

class Steps extends Component {
    state = { 
        stage: 2
       } 
    
       stepMap = [1,2,3,4]
       handleNext=()=> {
         this.setState({stage: this.state.stage + 1})
       }
       
       handlePrev=()=> {
         this.setState({stage: this.state.stage - 1})
       }
       
       handleStyles=(i)=>{
         const {stage} = this.state;
         return (stage > i) ? 'step active complete ' : (stage<i)? 'step ' : 'step active  ';
       }
       handleProress = () =>{
        const {stage} = this.state
        
        return ((stage -1) / (this.props.steps.length-1)) * 100 ;
       }
    
        render() {
          const {stage} = this.state;
          const {steps} = this.props;
    
    
        return (
              <>
        <div className='Checkout__steps'>
          <div id="progress">
        <div 
        style={{width: `${this.handleProress()}%`}} 
        id="progress-bar"></div>
        <div id="progress-num">
          {steps.map((s,i) => <div className='container'> <span key={s} className={this.handleStyles(i+1)}>
            {stage <= i+1 ? i+1 : '✓'}
          </span>
          <span className='Checkout-step'>{s}</span>
          </div> )}
    
        </div>
      </div>
        </div>
      <button  onClick={this.handlePrev} className="btn" disabled={stage === 1}>Prev</button>
      <button onClick={this.handleNext} className="btn">Next</button>
      </>);
      }
    }
 
export default Steps;