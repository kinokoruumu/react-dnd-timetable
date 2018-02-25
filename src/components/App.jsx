import React from "react"
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { store } from '../store/configureStore'
import TimeTablePage from "./pages/TimeTablePage";

import { createMuiTheme } from 'material-ui/styles'
import teal from 'material-ui/colors/teal'
import red from 'material-ui/colors/red'
import amber from 'material-ui/colors/amber'

const theme = createMuiTheme({
	palette: {
		primary: teal,
		secondary: amber,
		error: red
	},
	zIndex: {
		tabs: 100
	},
	header: {
		height: 64
	}
})

const App = () => (
    <Provider store={store}>
			<MuiThemeProvider theme={theme}>
				<TimeTablePage/>
			</MuiThemeProvider>
    </Provider>
)

export default App
