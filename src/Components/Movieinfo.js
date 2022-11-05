import React from "react";
import "./Movieinfo.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useSpring, animated } from "react-spring";
import Modal from "react-bootstrap/Modal";

const Movieinfo = ({
  title,
  overview,
  media_type,
  genre_ids,
  name,
  poster_path,
  vote_average,
  selectMovie,
}) => {
  const styles = useSpring({
    from: { opacity: "0.1" },
    to: { opacity: "1" },
    config: { duration: "1500" },
  });
  if (media_type === "tv") {
    title = name;
  }
  /*
  if (media_type === "tv") 
  if (media_type === "tv") {
    return (
      <div className="hero">
        <img src={"https://image.tmdb.org/t/p/w500" + poster_path}></img>
        <div>{vote_average}</div>
      </div>
    );
  }
  return (
    <div className="hero">
      <img src={"https://image.tmdb.org/t/p/w500" + poster_path}></img>
      <div>
        <h1>{vote_average}</h1>
      </div>
    </div>
  );

*/ const [
    modalShow,
    setModalShow,
  ] = React.useState(false);
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Modal.Title
            style={{
              fontSize: "2rem",
            }}
            id="contained-modal-title-vcenter"
          >
            {title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            display: "flex",
            gap: "20px",
            backgroundColor: "#dee5ec",
            flexDirection: "row",
          }}
        >
          <Card.Img
            variant="top"
            style={{ width: "20rem" }}
            src={"https://image.tmdb.org/t/p/w500" + poster_path}
          />

          <div
            class="plan-container"
            style={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <p>{overview}</p>
            <div>
              <span>
                {genre_ids.includes(10765) && (
                  <span style={{ fontSize: "15px" }}>Sci-Fi & Fantasy, </span>
                )}
              </span>
              <span>
                {genre_ids.includes(10759) && (
                  <span style={{ fontSize: "15px" }}>Action & Adventure</span>
                )}
              </span>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  return (
    <div className="reacte">
      <MyVerticallyCenteredModal // modal which is hidden
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <animated.div className="hehe" style={styles}>
        {" "}
        <Card
          className="card m-2 h-100"
          style={{ width: "18rem" }}
          onClick={() => selectMovie(title)}
        >
          <Card.Img
            variant="top"
            src={"https://image.tmdb.org/t/p/w500" + poster_path}
          />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <br></br>
            <Card.Text>
              <h4>
                Genre:
                <span>
                  {genre_ids.includes(10765) && (
                    <span style={{ fontSize: "15px" }}>Sci-Fi & Fantasy </span>
                  )}
                </span>
                <span>
                  {genre_ids.includes(10759) && (
                    <span style={{ fontSize: "15px" }}>Action & Adventure</span>
                  )}
                </span>
              </h4>
              <h4>
                User rating :
                <div
                  id="rating"
                  style={{ borderRadius: "50%", textAlign: "center" }}
                >
                  {(Math.round(vote_average * 10) / 10).toFixed(1)}
                </div>
              </h4>
              <Button variant="primary" onClick={() => setModalShow(true)}>
                {/*show modal*/}
                More info {console.log("KONECNE")}
              </Button>
            </Card.Text>
          </Card.Body>
        </Card>
      </animated.div>
    </div>
  );
};

export default Movieinfo;
