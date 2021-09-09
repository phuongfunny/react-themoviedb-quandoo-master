import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "../components/NotFound/index";
import HomePage from "../features/homepage/index";
import MovieDetail from "../features/movie-detail";
import Restaurants from "../features/quandoo/components/Restaurants";
import DefaultRoute from "./DefaultRoute";

// Lazy load - Code splitting
const ListMovie = React.lazy(() => import("../features/listmovie/index"));
function Routes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <DefaultRoute layout="movie" exact path="/">
          <HomePage />
        </DefaultRoute>
        <DefaultRoute layout="movie" exact path="/movies">
          <ListMovie />
        </DefaultRoute>
        <DefaultRoute layout="movie" exact path="/movie/:id">
          <MovieDetail />
        </DefaultRoute>
        <DefaultRoute layout="quandoo" exact path="/quandoo">
          <Restaurants />
        </DefaultRoute>
        <Route path="*" component={NotFound} />
      </Switch>
    </Suspense>
  );
}

export default Routes;
