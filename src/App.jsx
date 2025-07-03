import BackgroundImg from '../components/BackgroundImg';
import BackgroundPage from '../components/BackgroundPage';
import Card from '../components/Card'
import FooterLinks from '../components/FooterLinks';
import Navbar from '../components/Navbar';
import ListItems from '../components/NavbarItems'
import ListItemsSocial from '../components/social';
import "../src/styles/NavbarItems.css"
import "../src/styles/Navbar.css"
import './App.css';

function App() {

  return (
    <>
      <body>



        {/* <!-- ====================     NAVBAR     ==================== --> */}



        <header>

          <Navbar>
            <ListItems
              activo={"activo"}
              direccion1={""}
              clases={"[ fa-solid  fa-house ]"}
              IconText={"Inicio"}
            />

            <ListItems
              direccion1={""}
              clases={"[ fa-solid  fa-address-book ]"}
              IconText={"Contacto"} />

            <ListItems
              direccion1={""}
              clases={"[ fa-solid  fa-images ]"}
              IconText={"Galeria"}
            />

            <ListItems
              direccion1={""}
              clases={"[ fa-solid  fa-users ]"}
              IconText={"Nosotros"}
            />

            <ListItems
              direccion1={""}
              clases={"[ fa-solid  fa-handshake-angle ]"}
              IconText={"Como ayudar"}
            />

            <ListItems
              direccion1={""}
              clases={"[ fa-solid  fa-arrow-right-to-bracket ]"}
              IconText={"Iniciar sesión"}
            />
          </Navbar>

        </header>



        {/* <!-- ====================     PRIMERA PARTE / FONDO     ==================== --> */}



        <main>

          <BackgroundImg fondoImg={"fondo-img"} fondo__contenedor1={"fondo__contenedor1"}>
          <BackgroundPage fondo__titulo={"Centro de adopciones Nueva Esperanza"}  fondo__subtitulo={"Empezá adoptando hoy"}/>
          </BackgroundImg>

          {/* <BackgroundPage
            fondoImg={"fondo-img"}
            fondo__contenedor1={"fondo__contenedor1"}
            fondo__titulo={"Centro de refugios Nueva Esperanza"}
            fondo__subtitulo={"Empezá adoptando hoy"}
          /> */}



          {/* <!-- ====================     SEGUNDA PARTE / CARDS     ==================== --> */}



          <section>
            <div classNameName="cards-container">

              <Card
                CardImg="/assets/119338bc3eaee96a980665c7ecfc8863.jpg"
                
                alt="Perro Golden Retriever llamado Cachito"

                CardTitle="Cachito"

                CardText="Cachito es un cachorrito curioso que ve el mundo con ojos de asombro. Tiene una mirada que derrite corazones y solo quiere un hogar lleno de amor y caricias."

                href1="html/cachito.html"
              />

              <Card
                CardImg="/assets/dda3bc406ae4ee911199d7959bf8668d.jpg"

                alt="Perro chihuahua llamado Max"

                CardTitle="Max"

                CardText="Max es pura alegría. Siempre está listo para hacerte reír y acompañarte en todas. Ama los mimos, jugar y estar cerca tuyo. Si buscás a alguien que te reciba con una sonrisa todos los días, Max es tu compañero ideal."

                href1="html/max.html"
              />

              <Card
                CardImg="/assets/08a561deec01b2cebf0f4087d8c36863.jpg"

                alt="Gato fachero llamado Simón"

                CardTitle="Simón"

                CardText="Simón es un gato tranquilo y observador. Le encanta mirar la vida pasar desde el sillón más cómodo de la casa. Ideal para quienes buscan un compañero sereno con un corazón gigante. ¡Su ronroneo es pura paz!"

                href1="html/simon.html"
              />

              <Card
                CardImg="/assets/2e818b8c6c8f0ccc408faed2e682e0d1.jpg"

                alt="Perro mandarinero llamado Tito"

                CardTitle="Tito"

                CardText="Tito es un alma paciente y divertida. Tiene un talento especial para hacer equilibrio (¡sí, en serio!) y le encanta pasar tiempo cerca de quienes ama. Es un perrito noble que solo espera una segunda oportunidad."

                href1="html/tito.html"
              />

              <Card
                CardImg="/assets/33beb04156c4ba3608fbe78d5a3de771.jpg"

                alt="Perrita chiquita chambeadora llamada Luna"

                CardTitle="Luna"

                CardText="Luna es una pequeña exploradora que ama estar al aire libre. Es muy compañera y cuida todo lo que tiene cerca, desde plantas hasta personas. Si buscás a alguien dulce y protectora, Luna es tu perrita ideal."

                href1="html/luna.html"
              />

              <Card
                CardImg="/assets/4f430e5de795807f23af6f3548c21e68.jpg"

                alt="Perrito timido chiquito llamado Bruno"
                CardTitle="Bruno"

                CardText="Bruno es tímido al principio, pero una vez que confía, no se despega más. Tiene un carácter tranquilo y solo quiere un rincón cálido donde sentirse seguro. Si tenés paciencia y mucho amor para dar, Bruno es para vos."

                href1="html/bruno.html"
              />

              <Card
                CardImg="/assets/8481ffb726a454888a12f2391c121f6d.jpg"

                alt="Gatita muy linda llamada Nube"

                CardTitle="Nube"

                CardText="Nube es un gato sociable y muy curioso. Le encanta estar donde está la acción, ya sea en tu escritorio o en tus brazos. Ideal para quienes buscan un gato activo, simpático y lleno de personalidad."

                href1="html/nube.html"
              />

              <Card
                CardImg="/assets/ae63ef112656420dd9310f1e2c6e6379.jpg"

                alt="Gatico muy borracho llamado Whiskers"

                CardTitle="Whiskers"

                CardText="Whiskers es elegante, tranquilo y leal. Prefiere los espacios calmos y siempre está dispuesto a darte compañía en las tardes más largas. Es un gato maduro que busca un hogar con amor y paciencia."

                href1="html/whiskers.html"
              />

            </div>

            <div classNameName="centrar-link-masinfo">
              <a classNameName="centrar-link-masinfo__link" href="#">Ver más...</a>
            </div>

          </section>
        </main>



        {/* <!-- ====================     FOOTER     ==================== --> */}



        <footer classNameName="endpage">

          {/* <!--        Links        --> */}

          <ul classNameName="endpage__list">

            <FooterLinks />

            <FooterLinks />

            <FooterLinks />

            <FooterLinks />

            <FooterLinks />

            <FooterLinks />
          </ul>

          {/* <!--        Fin Links        --> */}

          <p classNameName="endpage__text1">Redes</p>

          {/* <!--        Redes        --> */}

          <ul classNameName="endpage__list  endpage__list--size">

            <ListItemsSocial
              direccion="//instagram.com"
              clases="fa-brands fa-instagram"
            />

            <ListItemsSocial
              direccion="//x.com"
              clases="fa-brands fa-x-twitter"
            />

            <ListItemsSocial
              direccion="//whatsapp.com"
              clases="fa-brands fa-whatsapp"
            />

            <ListItemsSocial
              direccion="//facebook.com"
              clases="fa-brands fa-facebook"
            />

            <ListItemsSocial
              direccion="//youtube.com"
              clases="fa-brands fa-youtube"
            />

            <ListItemsSocial
              direccion="//linkedin.com"
              clases="fa-brands fa-linkedin"
            />


          </ul>

          {/* <!--        Fin Redes        --> */}

          <hr className="linea-separadora" />

          <p className="endpage__text2">© 2025 Nueva Esperanza</p>

        </footer>

        <FooterLinks
          dire4="d"
          text="Inicio"
        />

        <FooterLinks
          dire4={""}
          text={""}
        />

        <FooterLinks
          direccion={"#"}
          text={"Inicio"}
        />

        <FooterLinks
          direccion={"#"}
          text={"Inicio"}
        />

        <FooterLinks
          direccion={"#"}
          text={"Inicio"}
        />

        <FooterLinks
          direccion={"#"}
          text={"Inicio"}
        />

      </body>
    </>
  )
}

export default App
