import React,{useMemo} from 'react'
import { CssBaseline,ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { useSelector } from 'react-redux'
import { themeSettings } from 'themes'
import { BrowserRouter as Router,Routes,Route,Navigate } from 'react-router-dom'
import Dashboard from 'scenes/dashboard'
import Layout from 'scenes/layout'

function App() {
  const mode = useSelector((state) => state.global.mode)
  const theme = useMemo(() => createTheme(themeSettings(mode)),[mode])
  return (
    <div className="app">
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <Routes>
            <Route element={<Layout/>}>
              <Route path="/" element={<Navigate to="/dashboard"/>} replace/>
              <Route path="/dashboard" element={<Dashboard/>}/>
            </Route>
          </Routes>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
