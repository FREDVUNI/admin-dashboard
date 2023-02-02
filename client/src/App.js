import React,{useMemo} from 'react'
import { CssBaseline,ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { useSelector } from 'react-redux'
import { themeSettings } from 'themes'
import { BrowserRouter as Router,Routes,Route,Navigate } from 'react-router-dom'
import Layout from 'scenes/layout'
import Dashboard from 'scenes/dashboard'
import Products from 'scenes/products'
import Customers from 'scenes/customers'
import Transactions from 'scenes/transactions'

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
              <Route path="/products" element={<Products/>}/>
              <Route path="/customers" element={<Customers/>}/>
              <Route path="/transactions" element={<Transactions/>}/>
            </Route>
          </Routes>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
