import React from 'react';
import ReactDom from 'react-dom';
const person={
    short:"",
    firstname:"",
    lastname:""

}
class Content extends React.Component{
    render()
    {
        //this.props.user[0].firstname="nav";
       
        return <div id="rerender">
         <div className="grid-item-middle" >
        <div className="nav-left">
                <ul>
                 
                {this.props.user.map(x1 => {
                    
                    
                    return <a  className="side" onClick={() =>{this.update(x1)}}><li>{x1.short}</li></a>
                    
                })}
                </ul>

        </div>
        <div className="nav-right" >
                
         <div className="heightdiv" >
                    <br></br>
                <p><h2>Firstname</h2><input type="text" name="firstname"  value={person.firstname} className="text-box1"></input></p>
                
                <p><h2>Lastname</h2><input type="text" name="Lastname" value={person.lastname} className="text-box1"></input></p>
                <p><button type="button" onClick={this.update.bind(this)}>submit </button></p>
                
                </div>
                    
                
                    
        </div>
        </div>
        </div>;
    }
    update(x)
    {
        person.short=x.short;
        person.firstname=x.firstname;
        person.lastname=x.lastname;
        ReactDOM.render(<Content user={this.props.user}/>,document.getElementById('rerender'));
    }
}
module.exports=Content;