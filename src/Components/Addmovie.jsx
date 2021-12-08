import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";
import { Card, CardImg } from "reactstrap";

import AddImg from "../assets/icons/add.png";
import Modal from "../Components/Modal";

const Addmovie = ({ handleAdd }) => {
  const [show, setShow] = useState(false);

  const toggleShow = () => setShow(!show);

  return (
    <div
      className="row"
      style={{
        width: "120px",
        height: "120px",
        borderRadius: "70px",
        borderColor: "red",
      }}
    >
      <Card onClick={() => setShow(true)}>
        <CardImg
          top
          width="100"
          style={{ height: "110px", width: "110px", border: "none" }}
          src={AddImg}
          alt="Card image cap"
        />
      </Card>
      {show && (
        <Modal isOpen={show} toggle={toggleShow} handleAdd={handleAdd} />
      )}
    </div>
  );
};

Addmovie.propTypes = {
  handleAdd: PropTypes.func.isRequired,
};

export default Addmovie;
