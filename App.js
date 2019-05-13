import React, { Component } from 'react';
class App extends Component{
   constructor() {
		super();
		this.state = {
			shown: true,
		};
	}	
	
	toggle() {
		this.setState({
			shown: !this.state.shown
		});
	}
		
	render() {
		var shown = {
			display: this.state.shown ? "inline-block" : "none"
		};
		
		var hidden = {
			display: this.state.shown ? "none" : "inline-block"
		}
		
		return (
			<div>
            <h1>Display Overview</h1>
				<button class="btn display" style={ hidden } onClick={this.toggle.bind(this)}>Show Overview</button>
				<button class="btn" style={ shown } onClick={this.toggle.bind(this)}>Hide Overview</button>
            <div class="overview-desc" style={ shown }>Proin elit arcu, rutrum commodo, vehicula tempus, commodo a, risus. Curabitur nec arcu. Donec sollicitudin mi sit amet mauris. Nam elementum quam ullamcorper ante. Etiam aliquet massa et lorem. Mauris dapibus lacus auctor risus. Aenean tempor ullamcorper leo. Vivamus sed magna quis ligula eleifend adipiscing. Duis orci. Aliquam sodales tortor vitae ipsum. Aliquam nulla. Duis aliquam molestie erat. Ut et mauris vel pede varius sollicitudin. Sed ut dolor nec orci tincidunt interdum. Phasellus ipsum. Nunc tristique tempus lectus."</div>
			
			<div class="overview-desc" style={ hidden }></div>
			</div>
		)
	}
}
export default App;