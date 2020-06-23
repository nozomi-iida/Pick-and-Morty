import React, { useEffect, Fragment, Suspense, useContext, lazy } from 'react';
import { IEpisodeProps } from './interfaces';
import { Store } from './Store';
import { fetchDataAction, toggleFavAction } from './Actions';

const EpisodeList = lazy<any>(() => import('./EpisodesList'));

export default () => {
  const {state, dispatch} = useContext(Store);

  useEffect(() => {
    state.episodes.length === 0 && fetchDataAction(dispatch);
  });

  const props: IEpisodeProps = {
    episodes: state.episodes,
    store: {state, dispatch},
    toggleFavAction,
    favourites: state.favourites
  } 

  return (
    <Fragment>
      <Suspense fallback={<div>loading...</div>}>
        <section className="episode-layout">
          <EpisodeList {...props} />
        </section>
      </Suspense>
    </Fragment>
  )
}