export default class SafeComponet extends React.Component {

    constructor(props) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true }
    }

    componentDidCatch() {

    }

    render() {
        if (this.state.hasError) {
            return <div>Something went wrong with loading mf.</div>
        }

        return this.props.children
    }
} 