import ReactDOM from "react-dom/client";
import { BrowserRouter, Route } from "react-router-dom";

const App = () => {

    return (
        <BrowserRouter>
            <Route>
                <div className="container">
                    <div>Name: auth-mf</div>
                    <div>Framework: react-19</div>
                </div>
            </Route>

        </BrowserRouter>

    );
}

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);