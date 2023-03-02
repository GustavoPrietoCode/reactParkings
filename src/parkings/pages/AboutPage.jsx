
export const AboutPage = () => {
  return (
    <>
      <div className='bodyPage bodyAboutPage'>

        <div className="wrapAbout">
          <div className="blockOne">
            <img src="src/img/Gus.png" alt="" width="150" />
            <div>
              Hola, soy <a href="https://www.linkedin.com/in/gustavoprietogarcia/" target='_blank'>Gustavo Prieto</a>. 
              Desarrollador web desde el 2022... <br />
              Te voy a contar dos cosas que suelen pasar desapercibidas en mi currículo, <br/>
              y me cambiaron la vida.
            </div>
          </div>
          <div className="blockTwo">
            <div>
            Realicé dos viajes <a href="https://www.youtube.com/channel/UCkY7P_Bx5ZfpT-2qEAFJahg" target='_blank'>mochileros</a> de ocho y diez meses cada uno.
            </div>
            <img src="src/img/muralla-china-web.png" alt="" width="150" />
          </div>
          <div className="blockThree">
            <img src="src/img/libros.png" alt="" width="150" />
            <div>
            Me he autopublicado cuatro libros en la plataforma de <a href="https://www.amazon.es/Gustavo-Prieto-Garc%C3%ADa/e/B00XWFFGZY/ref=aufs_dp_fta_dsk" target='_blank'>Amazon</a>. <br />
            Dos de viajes y dos de ficción.
            </div>
          </div>
        </div>
  
      </div>

    </>
  )
}
