import * as React from "react";
import { Admin, fetchUtils, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import { Dashboard } from "./pages/Dashboard";
import { backendUrl } from "./api/api";
import authProvider from "./providers/authProvider";
import { LoginScreen } from "./pages/LoginScreen";
import { Theme } from "./theme/Theme";
import { MyDocuments } from "./pages/MyDocuments";



const fetchJson = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    // add your own headers here
    
    const { token } = JSON.parse(localStorage.getItem('x-token'));
    options.headers.set('x-token', `${token}`);
    return fetchUtils.fetchJson(url, options);
}
const dataProvider = simpleRestProvider(backendUrl,fetchJson);

const App = () => {
    return(
        <Admin dataProvider={dataProvider} authProvider={authProvider} loginPage={LoginScreen} theme={Theme} dashboard={Dashboard}>
            <Resource name="Docs" list={MyDocuments} />
        </Admin>
    )
}

export default App;