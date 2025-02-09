import ReactDOM from "react-dom/client";

const App = () => (
    <div className="container">
        <div>Name: shared_ui</div>
        <div>Framework: react-19</div>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);