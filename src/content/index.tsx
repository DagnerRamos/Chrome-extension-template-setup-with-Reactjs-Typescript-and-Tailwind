import React from 'react';
import ReactDOM from 'react-dom/client';
import ContentApp from './content';
import '../assets/tailwind.css';
 const pageBody = document.body.innerHTML;
const appContainer = document.createElement('div')
//We should inyect our root where is needed
document.body.insertBefore(appContainer, document.body.firstChild);
if (!appContainer) {
    throw new Error("Can not find AppContainer");
}
appContainer.innerHTML = pageBody;
ReactDOM.createRoot(appContainer).render(
    <React.StrictMode>
        <ContentApp></ContentApp>
    </React.StrictMode>
)
