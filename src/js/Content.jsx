import React from 'react';
import ReactDom from 'react-dom';

class Content extends React.Component{
    constructor(props){
        super(props);
        this.state={
            short:"",
            firstname:"",
            lastname:""
        }
    }
    render()
    {
       // this.props.user[0].short="BNN";
        
        return <div id="rerender">
         <div className="grid-item-middle" >
        <div className="nav-left">
                <ul>
                 
                {this.props.user.map(x1 => {

                    return <a  className="side" onClick={() =>{this.fill(x1)}}><li>{x1.short}</li></a>
                    
                })}
                </ul>

        </div>
        <div className="nav-right" >
                
         <div className="heightdiv" >
                    <br></br>
                <p><h2>Firstname</h2><input type="text" name="firstname"  value={this.state.firstname} className="text-box1"></input></p>
                
                <p><h2>Lastname</h2><input type="text" name="Lastname" value={this.state.lastname} className="text-box1"></input></p>
                <p><button type="button" onClick={this.update.bind(this)}>submit </button></p>
                
                </div>
                    
                
                    
        </div>
        </div>
        </div>;
    }
    fill(x)
    {
        
        this.setState({
            
            short:x.short,
            firstname:x.firstname,
            lastname:x.lastname
        });
        
        
    }
    update()
    {

    }
}
module.exports=Content;