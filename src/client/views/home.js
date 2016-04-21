import Layout from 'components/layout'

module.exports = class extends React.Component {
	static contextTypes = {
		dao: React.PropTypes.func
	}

	componentDidMount() {
		const {dao} = this.context
		dao('page').set({title: 'Home'})
	}

	render() {
		return (
			<Layout>Home</Layout>
		)
	}
}