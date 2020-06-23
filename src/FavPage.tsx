import React, { useContext, Suspense, lazy } from 'react';
import { Store } from './Store'; 
import { toggleFavAction } from './Actions';
import { IEpisodeProps } from './interfaces';

const EpisodeList = lazy<any>(() => import('./EpisodesList'));

export default (): JSX.Element => {
  const {state, dispatch} = useContext(Store);

  const props:IEpisodeProps = {
    episodes: state.favourites,
    store: {state, dispatch},
    toggleFavAction,
    favourites: state.favourites
  }; 

  return (
    <Suspense fallback={<div>loading...</div>}>
      <div className="episode-layout">
        <EpisodeList {...props} />
      </div>
    </Suspense>

  )
}