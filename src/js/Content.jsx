import React from 'react';
import ReactDom from 'react-dom';

class Content extends React.Component{
    render()
    {
        //this.props.user[0].firstname="nav";
        var users=this.props.user;
        
        return <div className="grid-item-middle">
        <div className="nav-left">
                <ul>
                 
                {users.map(x1 => {
                    var x="#".concat("",x1.short);
                    return <a href={x} className="side"><li>{x1.short}</li></a>
                    
                })}
                </ul>

        </div>
        <div className="nav-right">
                {users.map(x1 => {
                    
                    return <div id={x1.short} className="heightdiv" >
                    <br></br>
                <p><h2>Firstname</h2><input type="text" name="firstname"  value={x1.firstname} className="text-box1"></input></p>
                
                <p><h2>Lastname</h2><input type="text" name="Lastname" value={x1.lastname} className="text-box1"></input></p>
                <p><button type="button" onClick={this.update.bind(this)}>submit </button></p>
                
                </div>
                    
                })}
                    
        </div>
        
        </div>;
    }
    update(x)
    {
        console.log(x);
    }
}
module.exports=Content;