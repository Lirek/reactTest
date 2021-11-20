import * as React from "react";
import { Admin, fetchUtils, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import { Dashboard } from "./pages/Dashboard";
import { backendUrl } from "./api/api";
import authProvider from "./providers/authProvider";
import { LoginScreen } from "./pages/LoginScreen";
import { Theme } from "./theme/Theme";
import { MyDocuments } from "./pages/MyDocuments";
import { Users } from "./pages/Users";
import { Configuration } from "./pages/Configuration";
import { Map } from "./pages/Map";
import { Tables } from "./pages/Tables";



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
            <Resource name="Users" list={Users} />
            <Resource name="facturas" list={MyDocuments} />
            <Resource name="Map" list={Map} />
            <Resource name="Tables" list={Tables} />
            <Resource name="Config" list={Configuration} />
        </Admin>
    )
}

export default App;