import React, { Fragment, useContext } from 'react';
import {Link} from '@reach/router';
import { Store } from './Store';

export default (props: any):JSX.Element => {
  const {state } = useContext(Store);

  return(
    <Fragment>
      <header className="header">
        <div>
          <h1>Pick and Morty</h1>
          <p>Pick your favorite episode!!!</p>
        </div>
        <div>
          <Link to= '/'>Home</Link>
          <Link to='/faves'>Fvourite(s): {state.favourites.length}</Link>
        </div>
      </header>
      { props.children }
    </Fragment>
  )
}