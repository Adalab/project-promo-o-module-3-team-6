import Design from "./Design";
import Fill from "./Fill";


const Form = (props) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  const handleCollapsables = (ev) => {
    const fieldsetId = ev.target.id;
    props.handleCollapsables(fieldsetId);
  }
  return (
    <form onSubmit={handleSubmit} className="dashboard js-reset" id="form">
      <fieldset className={`fieldset   ${props.collapsables.designCollapsable ? 'collapse' : 'rotateArrow'}`}>
        <legend
          onClick={handleCollapsables} id="designCollapsable"
          className="legend js_legendDesign"
          title="Pulsa para desplegar"
        >
          <div className="legend__iconTitle">
            <div>
              <i className="far fa-object-ungroup item--icon"></i>
            </div>
            <h2 className="legend__iconTitle--mainTitle">Diseña</h2>
          </div>
          <div>
            <i className="fas fa-chevron-down"></i>
          </div>
          {/*style="color: #54585a"*/}
        </legend>
        <Design data={props.data} handleInput={props.handleInput} />

      </fieldset>

      <fieldset className={`fieldset ${props.collapsables.fillCollapsable ? 'collapse' : 'rotateArrow'}`}>
        <legend
          onClick={handleCollapsables} id="fillCollapsable"
          className="legend js_legendFill"
          title="Pulsa para desplegar"
        >
          <div className="legend__iconTitle">
            <div>
              <i className="far fa-keyboard item--icon"></i>
            </div>
            <h2 className="legend__iconTitle--mainTitle">Rellena</h2>
          </div>
          <div>
            <i className="fas fa-chevron-down"></i>
          </div>
        </legend>
        {/* style="color: #54585a" */}

        <Fill data={props.data} handleInput={props.handleInput} />
      </fieldset>

      <fieldset className={`share fieldset ${props.collapsables.shareCollapsable ? 'collapse' : 'rotateArrow'}`}>
        <legend
          onClick={handleCollapsables}
          id="shareCollapsable"
          className="legend js_legendShare"
          title="Pulsa para desplegar"
        >
          <div className="legend__iconTitle">
            <div>
              <i className="fas fa-share-alt item--icon"></i>
            </div>
            <h2 className="legend__iconTitle--mainTitle">Comparte</h2>
          </div>
          <div>
            <i className="fas fa-chevron-down"></i>
          </div>
        </legend>
        {/* style="color: #54585a" */}
        <div className="share__container js_collapsible">
          <button className="share__create_btn--off js_shareBtn">
            <i className="far fa-address-card"></i>
            Crear tarjeta
          </button>

          <section className="share__result collapseShare">
            <p className="share__result--title">
              La tarjeta ha sido creada:
            </p>
            <a
              href=""
              className="share__result--link js_share_link"
              target="_blank"
            ></a>

            <a
              href="https://twitter.com/intent/tweet?text="
              className="share__result--btn js-twitter"
              target="_blank "
            >
              <i className="fab fa-twitter"></i>
              <p>Compartir en twitter</p>
            </a>
          </section>
        </div>
      </fieldset>
    </form>
  )
}
export default Form;