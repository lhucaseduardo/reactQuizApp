import imgQuiz from "../img/quiz.svg"
import "../styles/Welcome.css"
import "../global/effects/scaleUpCenter.css"

const Welcome = () => {
    return (
        <div id="welcome">
            <h2>Seja bem-vindo</h2>
            <p className="text">Clique no botão abaixo para começar:</p>
            <button><p className="botao">Iniciar</p></button>
            <img className="scale-up-center" src={imgQuiz} alt="inicio do Quiz" />
        </div>
    )
}

export default Welcome