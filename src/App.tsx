import React, { Fragment, useContext } from 'react';
import { Store } from './Store';

export default ():JSX.Element => {
  const store = useContext(Store);
  return(
    <Fragment>
      {console.log(store)};
      <h1>Pick and Morty</h1>
      <p>Pick your favorite episode!!!</p>
    </Fragment>
  )
}