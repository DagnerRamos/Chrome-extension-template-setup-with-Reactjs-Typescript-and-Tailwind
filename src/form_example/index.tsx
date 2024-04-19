import React from "react";
import ReactDOM from 'react-dom/client';
import '../assets/tailwind.css'
import FormExampleApp from "./form_example";


const appContainer = document.createElement('div')
document.body.appendChild(appContainer)
if (!appContainer) {
    throw new Error("Can not find AppContainer");
}
ReactDOM.createRoot(appContainer).render(
    <React.StrictMode>
        <FormExampleApp/>
    </React.StrictMode>
);
