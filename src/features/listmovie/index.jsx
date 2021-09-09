import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import { getListMoviesRequest } from "../../store/movie/movieSlice";
import FilterMovie from "./components/FilterMovie";
import Movie from "./components/Movie";
import "./style.scss";

function ListMovie(props) {
  const listData = useSelector((state) => state);
  const listMovie = listData.movies.list;
  let numPage = 2;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListMoviesRequest({ page: 1 }));
  }, [dispatch]);

  useEffect(() => {
    const listItem = document.querySelector("#list-movie");
    // list has auto height
    window.addEventListener("scroll", () => {
      if (
        window.scrollY + window.innerHeight ===
        listItem.clientHeight + listItem.offsetTop
      ) {
        dispatch(
          getListMoviesRequest({
            page: numPage++,
          })
        );
      }
    });
  }, [dispatch, numPage]);

  return (
    <React.Fragment>
      <section id="list-movie">
        <Container className="themed-container container" fluid={true}>
          <Row>
            <Col className="title">
              <h2> Popular Movies</h2>
            </Col>
          </Row>
          <Row className="content">
            <Col xs="3" className="filter">
              <FilterMovie />
            </Col>
            <Col xs="9" className="list-movies">
              {listMovie &&
                listMovie.map((listItem, index) => (
                  <Movie key={index} listItem={listItem} index={index} />
                ))}
              {/* <Button loading='lazy' className='load-more'>Load More</Button> */}
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
}

export default ListMovie;
