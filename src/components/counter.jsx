import React, {Component} from 'react';
class Counter extends Component {
    // state = {
    //     value: this.props.counter.value,
    //     tags: ['tag1', 'tag2', 'tag3']
    // };
    styles = {
        fontSize: 25,
        fontWeight: 'bold'
    }
    renderTags(){
        if(this.state.tags.length === 0) return <p>There are no tags!</p>
    }


    // handleIncrement = product => {
    //     // console.log(product);
    //     this.setState({value: this.state.value+1});
    // }
    render() { 
        console.log(this.props);
        
        return (
            <div>
                {/* {this.props.children} */}
                <span style = {this.styles} className={ this.getBadgeClasses() }>{this.formatCount()}</span>
                <button onClick = {()=> this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
                {/* Render list of items in react */}
                {/* In javaScript, can apply logical and between non-boolean variables. */}
                {/* {this.state.tags.length === 0 && "Please create a new tag!"}
                <ul>
                    {this.state.tags.map(tag => <li key={tag}>{tag}</li> )}
                </ul> */}
                <button onClick = {() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
        )
    }



    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        // classes += (this.state.value === 0) ? "warning" : "primary";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        // const {value: tmp} = this.state;
        const {value: tmp} = this.props.counter;
        return tmp === 0 ? <span>Zero</span>: tmp;
    }
}    
 
export default Counter;