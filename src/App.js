import React, { Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/styles';
import { StyledEngineProvider } from '@mui/material';
import { lightTheme, darkTheme } from 'assets/style/theme';
import PublicRoute from './routes/PublicRoute/PublicRoute';
import PrivateRoute from './routes/PrivateRoute/PrivateRoute';
import { PublicRoutesList, PrivateRoutesList } from 'routes/Routes';
import MainTemplateContainer from 'shared/MainTemplateContainer';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import NoPageFound from 'modules/NoPageFound/NoPageFound';

function App() {
  const themeRedux = useSelector((state) => state.userData.theme);
  const selectedTheme = localStorage.getItem('selectedTheme') || 'default';
  const [theme, setTheme] = useState(selectedTheme);

  useEffect(() => {
    if (themeRedux) {
      setTheme(themeRedux);
    }
  }, [themeRedux]);

  return (
    <>
      <Suspense fallback={''}>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme === 'default' ? lightTheme : darkTheme}>
            <BrowserRouter>
              <Routes>
                {PublicRoutesList?.map(({ path, Component }, i) => {
                  return (
                    <Route
                      key={i}
                      path={path}
                      element={
                        <PublicRoute>
                          <Component />
                        </PublicRoute>
                      }
                    />
                  );
                })}

                {PrivateRoutesList?.map(({ path, component: Component }, i) => {
                  return (
                    <Route
                      key={i}
                      exact
                      path={path}
                      element={
                        <PrivateRoute>
                          <MainTemplateContainer>
                            <Component />
                          </MainTemplateContainer>
                        </PrivateRoute>
                      }
                    />
                  );
                })}
                <Route path="*" element={<NoPageFound />} />
              </Routes>
            </BrowserRouter>
            <ToastContainer />
          </ThemeProvider>
        </StyledEngineProvider>
      </Suspense>
    </>
  );
}

export default App;
