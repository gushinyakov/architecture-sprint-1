/**
 * Компонент для обрачивания диначески загружаемых компонент
 * 
 */
export default class SafeComponet extends React.Component {

    constructor(props) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true }
    }

    componentDidCatch(error, info) {
        console.error(error, info.componentStack)
    }

    render() {
        if (this.state.hasError) {
            return <div>Ошибка при инициализации компонента</div>
        }

        return this.props.children
    }
} 