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
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="#" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
 <div class="card-header">Header</div>
  <div class="card-body text-primary">
    <h5 class="card-title">Primary card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
            </li>
          </ul>
        </div>
      </div>      
    </div>    
  );
}

export default Context;
