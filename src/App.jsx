//Se importa el archivo css para darle estilos a los componentes.
import "./App.css";

//Componente que contiene al nav
export function Option() {
  return (
    <>
      <header>
        <div></div>

        <div id="divMenu">
          <nav id="menu">
            <a href="#">CONTACTO</a>
            <a href="#">SOBRE NOSOTROS</a>

            <hr />
          </nav>
        </div>
      </header>
    </>
  );
}

//Componente que recibe los datos ingresados por el usuario(formulario).
export function Receiver() {
  return (
    <>
      <div className="main">
        <div>
          <h1 id="tituloInicio">INICIAR SESION</h1>
        </div>
        <div className="Inf">
          <p>CORREO ELECTRONICO</p>
          <div className="contInf">
            <input type="email" placeholder="@email" class="inputS" />
          </div>
          <p>CONTRASEÑA</p>
          <div className="contInf">
            <input type="password" placeholder="*********" className="inputS" />
          </div>
          <p>¿HAZ OLVIDADO TU CONTRASEÑA?</p>
          <a href="#">Haz click aquí</a>
        </div>
      </div>
    </>
  );
}

//Componente que contiene los accesos para iniciar sesion o crear una cuenta
export function Action() {
  return (
    <>
      <div className="mainAct">
        <a href="#">
          <button className="btnsInicio">INICIAR SESION</button>
        </a>
        <p id="pPregunta">¿No tienes una cuenta?</p>
        <a href="#">
          <button className="btnsInicio">CREAR CUENTA</button>
        </a>
      </div>
    </>
  );
}
