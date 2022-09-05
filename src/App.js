import React, { Fragment } from 'react'
import Button from 'react-bootstrap/Button';
import { BrowserRouter } from 'react-router-dom';
import AppRoute from './route/AppRoute';

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <AppRoute/>
      </BrowserRouter>
    </Fragment>
  )
}

export default App