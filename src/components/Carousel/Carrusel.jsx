import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carrusel.css'



export const Carrusel = () => {
  const settings = {
    dots: true, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 1,
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 3000, 
  };

  return (
    <Slider {...settings}>
      <div className="carousel-container">
        <img src="https://imagenes.compragamer.com/productos/compragamer_Imganen_general_37357_Placa_de_Video_ASUS_GeForce_GTX_1650_4GB_GDDR6_Phoenix_EVO_OC_e21bd89c-grn.jpg" alt="Slide placa" className="carousel-image" />
      </div>
      <div className="carousel-container">
        <img src="https://imagenes.compragamer.com/productos/compragamer_Imganen_general_16749_Procesador_AMD_RYZEN_5_3600_4.2GHz_Turbo_AM4_Wraith_Stealth_Cooler_f8ab4915-grn.jpg" alt="Slide procesador" className="carousel-image" />
      </div>
      <div className="carousel-container">
        <img src="https://imagenes.compragamer.com/productos/compragamer_Imganen_general_21972_Mother_ASUS_TUF_B450M-PLUS_II_AM4_f445a9d2-grn.jpg" alt="Slide motherboard" className="carousel-image" />
      </div>
      <div className="carousel-container">
        <img src="https://imagenes.compragamer.com/productos/compragamer_Imganen_general_19484_Monitor_Gamer_LG_27__27GL650F_144hz_IPS_FHD_GSync_FreeSync_1e30b9f9-grn.jpg" alt="Slide monitor" className="carousel-image" />
      </div>
      <div className="carousel-container">
        <img src="https://imagenes.compragamer.com/productos/compragamer_Imganen_general_33000_Memoria_Kingston_DDR4_8GB_3200MHz_Fury_Beast_CL16_946d0a56-grn.jpg" alt="Slide RAM" className="carousel-image" />
      </div>
    </Slider>
  );
};