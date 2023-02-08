import imgQuiz from "../img/quiz.svg"
import logoReact from "../img/react.svg"
import logo from "../img/logo.svg"
// import favicon from "../img/favicon.svg"
import "../styles/Welcome.css"
import "../global/effects/scaleUpCenter.css"

const Welcome = () => {
    return (
        <div id="welcome">
            <img className="logo" src={logo} alt="" />
            <h1><span className="welcomeTitleReact">React</span>Quiz</h1>
            <div className="square">
                <h2>Seja bem-vindo</h2>
                <p className="text">Clique no botão abaixo para começar:</p>
                <button><p className="botao">Iniciar</p></button>
            </div>
            <img className="img scale-up-center" src={imgQuiz} alt="inicio do Quiz" />
            <img className="img2 scale-up-center" src={logoReact} alt="inicio do Quiz" />
        </div>
    )
}

export default Welcome