import imgQuiz from "../img/quiz.svg"
import logoReact from "../img/react.svg"
import "../styles/Welcome.css"
import "../global/effects/scaleUpCenter.css"

const Welcome = () => {
    return (
        <div id="welcome">
            <h1>Quiz sobre <span className="welcomeTitleReact">React</span></h1>
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