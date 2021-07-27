import React, { Component } from 'react'

export default class about extends Component {
	
		componentDidMount() {
			document.title = this.props.title;
		}

    render() {
        return (
					<div>
						<h1>This is about page</h1>
					</div>
        )
    }
}
