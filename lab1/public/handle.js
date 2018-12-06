//import React from 'react';
var publicFunc = function(name){
  alert('public function: '+name);
}
var MComp = React.createClass({
  callPublicFunc: function(){
    publicFunc(this.props.name);
  },
  render: function(){
    return(
      <div><button onClick={this.callPublicFunc}>call public function from MComp</button>This is {this.props.name} React component <b>{this.props.children}</b> <MComp1>Children of MComp1</MComp1></div>
    );
  }
});
var MComp1 = React.createClass({
  getText: function(){
    alert(this.props.children);
  },
  render: function(){
    return(
      <i><button onClick={()=>{publicFunc(this.props.children)}}>arrow function</button>Another component<button onClick={this.getText}>Click me</button><button onClick={publicFunc}>call public function</button></i>
    );
  }
});
ReactDOM.render(
  <div><MComp/><MComp>Children</MComp><MComp name='Lee'>sdfadsfads</MComp><MComp1>Children of Another MComp1</MComp1></div>
  , document.getElementById('root'));
