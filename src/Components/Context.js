import React from "react";
import { AiFillHome, AiFillDashboard, AiOutlineLogin } from "react-icons/ai";
import { RiSearchFill, RiLoginCircleFill } from "react-icons/ri";
import { BiCameraMovie, BiCard } from "react-icons/bi";
import { Card, Button } from "react-bootstrap";




function Context() {
  return (
    <div class="container">
      <div class="row">
        <div class="d-flex col flex-column p-3 text-white netflix-black sidebar-style vh-100 ">
          <a
            href="/"
            class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
          >
            <span class="fs-4">Ana Sayfa Orta Üst</span>
          </a>
          <hr />
          <ul class="nav nav-pills flex-column mb-auto">
            <li class="nav-item">
              <a
                href="#"
                class="nav-link text-white active  "
                aria-selected="true"
              >
                <AiFillHome className="bi" />
                Ana Sayfa Orta
              </a>
            </li>
            <li>
              <a
                href="#"
                class="nav-link text-white "
                data-toggle="pill"
                role="tab"
                aria-controls="v-pills-settings"
                aria-selected="true"
              >
                <AiFillDashboard className="bi" />
                Kesfet
              </a>
            </li>
            <li>
              <a href="#" class="nav-link text-white">
                <RiSearchFill className="bi" />
                Ara
              </a>
            </li>
            <li>
              <a href="#" class="nav-link text-white">
                <RiLoginCircleFill className="bi" />
                Giris Yap
              </a>
            </li>
            <li>
              <a href="#" class="nav-link text-white">
                <BiCameraMovie className="bi" />
                Ne izlesem?
              </a>
            </li>
            
            <li>
            <Card bg="secondary" border="primary" text="dark" style={{ width: 'auto' }}>
    <Card.Header>Header1</Card.Header>
    <Card.Body>
      <Card.Title>Primary Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.1
      </Card.Text>
    </Card.Body>
  </Card>
  <br />

  <Card bg="success" border="secondary" text="dark" style={{ width: '30rem' }}>
    <Card.Header>Header2</Card.Header>
    <Card.Body>
      <Card.Title>Secondary Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.2
      </Card.Text>
    </Card.Body>
  </Card>
  <br />

  <Card bg="danger" border="success" text="dark" style={{ width: '30rem' }}>
    <Card.Header>Header3</Card.Header>
    <Card.Body>
      <Card.Title>Success Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.3
      </Card.Text>
    </Card.Body>
  </Card>
  <br />

  <Card border="danger" text="dark" style={{ width: '30rem' }}>
    <Card.Header>Header4</Card.Header>
    <Card.Body>
      <Card.Title>Danger Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content. 4
      </Card.Text>
    </Card.Body>
  </Card>
  <br />

  <Card border="warning" text="dark" style={{ width: '30rem' }}>
    <Card.Header>Header5</Card.Header>
    <Card.Body>
      <Card.Title>Warning Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.5
      </Card.Text>
    </Card.Body>
  </Card>
  <br />

  <Card border="info" text="dark" style={{ width: '30rem' }}>
    <Card.Header>Header6</Card.Header>
    <Card.Body>
      <Card.Title>Info Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.6
      </Card.Text>
    </Card.Body>
  </Card>
  <br />

  <Card border="light" text="dark" style={{ width: '30rem' }}>
    <Card.Header>Header7</Card.Header>
    <Card.Body>
      <Card.Title>Dark Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.7
      </Card.Text>
    </Card.Body>
  </Card>
  <br />

  <Card bg="light-blue" border="dark" text="dark" style={{ width: '30rem' }}>
    <Card.Header>Header8</Card.Header>
    <Card.Body>
      <Card.Title>Light Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.8
      </Card.Text>
    </Card.Body>
  </Card>
  <br />
            </li>
          </ul>
        </div>
      </div>      
    </div>    
  );
}

export default Context;
