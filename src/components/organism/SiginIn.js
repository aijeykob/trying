import  React,{Component} from 'react';



class SiginIn extends Component  {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Отправленное имя: ' + this.state.value);
        event.preventDefault();
    }

    sendUser(){
        console.log(this.state.value)
    }
    render(){

    return(
    <form onSubmit={this.handleSubmit}>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1"></label>
            <input type="text" className="form-control" value={this.state.value} onChange={this.handleChange} id="exampleInputEmail1" aria-describedby="emailHelp"
                   placeholder="Username"></input>

        </div>
        <div className="form-group">
            <label htmlFor="exampleInputPassword1"></label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
        </div>
        <div className="form-group form-check">
        </div>
        <button onClick={this.sendUser} type="submit" className="btn btn-primary">Sigin in</button>
    </form>)
}}

export  default  SiginIn;