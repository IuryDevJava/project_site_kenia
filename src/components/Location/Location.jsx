import React from "react";
import "./Location.css";

const Location = () => {
  return (
    <section className="section_maps">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3 className="h3_title_maps">
              <span className="material-symbols-outlined icon_location">location_on</span>
              Localização
            </h3>
            <p className="text_p_maps">
              Um espaço que une conforto, privacidade e elegância, pensado para
              acolher você com toda a exclusividade que merece.
            </p>
          </div>
        </div>

        <div className="row row_maps_wrapper">
          <div className="col-12">
            <div className="map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.494680930346!2d-43.18182121426808!3d-22.932002025702367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f871c37f323%3A0x3e1ce8664f203ee2!2sR.%20Alm.%20Tamandar%C3%A9%2C%2066%20-%20Flamengo%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2022210-060!5e0!3m2!1spt-BR!2sbr!4v1760395606161!5m2!1spt-BR!2sbr"
                width="100%"
                height="600"
                // style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
