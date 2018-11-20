//import React from 'react';
var MComp = React.createClass({
  render: function(){
    return(
      <div>This is {this.props.name} React component <b>{this.props.children}</b> <MComp1/></div>
    );
  }
});
var MComp1 = React.createClass({
  render: function(){
    return(
      <i>Another component</i>
    );
  }
});
ReactDOM.render(
  <div><MComp/><MComp>Children</MComp><MComp name='Lee'>sdfadsfads</MComp></div>
  , document.getElementById('root'));
