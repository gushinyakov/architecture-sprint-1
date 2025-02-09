import React, { lazy } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const ComponentIsNotAvailable = ({ name }) => {
    return <div>
        Component {name} is not available
    </div>
}

const TaskTestControl = lazy(() => import('tasks/TaskTestControl')
    .catch(() => ({
        default: () => <ComponentIsNotAvailable name="mf_tasks" />,
    }))
)

const UserTestControl = lazy(() => import('users/UserTestControl')
    .catch(() => ({
        default: () => <ComponentIsNotAvailable name="mf_users" />,
    }))
)

const App = () => (
    <div className="container">
        <TaskTestControl name="prop from host" />
        <UserTestControl />
        <div>Name: host</div>
        <div>Framework: react</div>
        <div>Language: JavaScript</div>
        <div>CSS: Empty CSS</div>
    </div>
);
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)