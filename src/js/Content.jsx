import React from 'react';
import ReactDom from 'react-dom';

class Content extends React.Component{
    constructor(props){
        super(props);
        this.state={
            short:"",
            firstname:"",
            lastname:"",
            index:0
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
                <p><h2>Firstname</h2><input type="text" name="firstname" onChange={(event)=>this.changefirstname(event)} value={this.state.firstname} className="text-box1" id="firstname"></input></p>
                
                <p><h2>Lastname</h2><input type="text" name="Lastname" onChange={(event)=>this.changelasttname(event)} value={this.state.lastname} className="text-box1" id="lastname" ></input></p>
                <p><button type="button" onClick={this.update.bind(this)}>Update </button></p>
                
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
            lastname:x.lastname,
            index:x.index
        });
    }
    update()
    {
        var firstnameValue=document.getElementById('firstname').value;
        var lastnameValue=document.getElementById('lastname').value;
        var indexvalue=this.state.index;
        this.props.user[indexvalue].firstname=firstnameValue;
        this.props.user[indexvalue].lastname=lastnameValue;
        this.props.user[indexvalue].short=(firstnameValue.substring(0,1)).concat("",lastnameValue.substring(0,1));
        ReactDOM.render(<Content user={this.props.user} />,document.getElementById('rerender'));
        //alert(firstnameValue);
        //alert(lastnameValue);
        
    }
    changefirstname(event)
    {
        this.setState({
            firstname:event.target.value
        });
    }
    changelasttname(event)
    {
        this.setState({
            lastname:event.target.value
        })
    }
}
module.exports=Content;