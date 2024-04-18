import React from "react";
import ReactDOM from 'react-dom/client';
import '../assets/tailwind.css'
import FormTestApp from "./form_test";


const appContainer = document.createElement('div')
document.body.appendChild(appContainer)
if (!appContainer) {
    throw new Error("Can not find AppContainer");
}
ReactDOM.createRoot(appContainer).render(
    <React.StrictMode>
        <FormTestApp/>
    </React.StrictMode>
);
