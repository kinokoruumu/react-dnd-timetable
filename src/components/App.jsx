import React from "react"
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { store } from '../store/configureStore'
import TimeTablePage from "./TimeTablePage";

const App = () => (
    <Provider store={store}>
			<MuiThemeProvider>
				<TimeTablePage/>
			</MuiThemeProvider>
    </Provider>
)

export default App
