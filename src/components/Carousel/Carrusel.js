import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Carrusel.css";

const Carrusel = () => {
  return (
    <div className="Carrusel">
      <p>NOVEDADES</p>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://scontent.faep4-3.fna.fbcdn.net/v/t39.30808-6/239937561_10158621360832549_5797956567647463560_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=a26aad&_nc_eui2=AeFrv3o42v7KtAtjhkhV7-6-G0DIF8-mXEsbQMgXz6ZcSzREXTo02dO9ANq3ff08ZFCgV3xm7ZA57KAcK3r0ZNVg&_nc_ohc=FdPnyLFy9eYAX-RpUPJ&_nc_ht=scontent.faep4-3.fna&oh=ef24ec92d52095dde1592aaf37b1976d&oe=61A1F3A1"
            alt="First slide"
            
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.lumingo.com/medias/0100007461-000000000004641694-0-c1200Wx1200H?context=bWFzdGVyfGltYWdlc3w0MzIxOHxpbWFnZS9qcGVnfGltYWdlcy9oZGMvaDBjLzkzNjUzOTI3MTk5MDIuanBnfGE1MTc0YTEwY2I0NzM3MjZjZDRjODdhOTZkNjUyODU1MjAwMTJkNTY5MjJiMWM1Mzk0NDZkNzRmYzQ2ZDNhZGQ"
            alt="Second slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://d2r9epyceweg5n.cloudfront.net/stores/001/445/446/products/961-f80b58c4045bf939bc16080093214421-1024-1024.jpg"
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carrusel;
