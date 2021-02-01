import React from 'react';
import { render } from 'react-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index.js';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state={
         term:''
        };
       // this.onInputChange=this.onInputChange.bind(this);
        //this.onInputChange=this.onInputChange.bind(this);
        //this.onFormSubmit=this.onFormSubmit.bind(this);
    }
onInputChange(term){
    /*this.setState({
      term:event
    });*/
    this.setState({term});
    //console.log(term);
    //console.log(this.state.term);
}

onFormSubmit(event){
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({
      term:''
    }
    );
}
render(){
    return(
       <form  onSubmit={(event)=>this.onFormSubmit(event)} className="input-group">
        <input className="form-control"
        placeholder="find weather forecast of your city"
        value={this.state.term}
        onChange={(event)=>this.onInputChange(event.target.value)}/>
        <span className="input-group-btn">
            <button className="btn btn-secondary" type="submit"> Submit</button>
        </span>
       </form>
    );
}

}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWeather},dispatch);
}
export default connect(null, mapDispatchToProps)(SearchBar);