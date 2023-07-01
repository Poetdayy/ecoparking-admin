import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import routes from './routes';
import { DefaultLayout } from './layouts/index';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
      gray: '#F5F6F8'
    },
  },
});

function App() {

  return (
        <>
          <ThemeProvider theme={theme}>
              <BrowserRouter>
                <DefaultLayout>
                  <Routes>
                      {
                        routes.map((route, index) => {
                          return (
                            <Route
                              key={index}
                              path={route.path}
                              exact={route.exact}
                              element={route.component}
                            />
                          )
                        })
                      }
                  </Routes>
                </DefaultLayout>
              </BrowserRouter>
          </ThemeProvider>
        </>
  )
}

export default App;


