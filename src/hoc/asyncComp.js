import React, {Component} from 'react';

const asyncComp = (importComp) => {
	return class extends Component {
		state = {
			component: null
		}

		componentDidMount () {
			importComp().then(componentArg => {
				this.setState({component: componentArg.default});
			});
		}

		render () {
			const RenderedComponent = this.state.component;
			return RenderedComponent ? <RenderedComponent {...this.props} /> : null;
		}
	}
}

export default asyncComp;
