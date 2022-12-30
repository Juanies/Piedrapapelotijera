import { useState } from 'react'
import './piedra.css'
import './animacion.css'
import piedra from './assets/piedra.png'
import tijera from './assets/tijera.png'
import papel from './assets/papel.png'
import confe from './assets/confetti-10.gif'

function App() {
  let [TuNumero, setTuNumero] = useState(0);
  let [img, setImg] = useState('');
  let [resultado, setResultado] = useState('');
  let [vibracion, SetVibracion] = useState('');
  const messageWin = 'Has ganado✨';
  const messageLose = 'Has perdido💀';

  function setImgBOT(NumberRandom) {
    if(NumberRandom == 1){
      setImg(piedra)
    }else if(NumberRandom == 2){
      setImg(tijera)
    } else if(NumberRandom == 3){
      setImg(papel)
    }
  }

  function setSelect(num) {
    const NumberRandom = Math.floor(Math.random() * (4 - 1) + 1);
    setTuNumero(num)
    setImgBOT(NumberRandom)
    
    if(TuNumero == NumberRandom){
      setResultado("Empate❤️")
    }else if(TuNumero == 2 && NumberRandom == 3 ){
      setResultado(messageWin)
    }else if(TuNumero == 3 && NumberRandom == 1 ){
      setResultado(messageWin)
    }else if(TuNumero == 1 && NumberRandom == 2 ){
      setResultado(messageWin)
    }else{
      setResultado(messageLose)
    }
  }


  return (
    <div className="juego">
      <div className="titulos">
        <h1>Piedra papel o tijera</h1>
        <h2>¿Qué eliges?</h2>
      </div>
      <section className='elegir'>
        <button onClick={() => {setSelect(1)}} className='piedra boton'>
          <img className='imagenpiedrapapelopiedra' src={piedra} alt="" />
        </button>
        <button onClick={() => {setSelect(3)}} className='papel boton'>
          <img className='imagenpiedrapapelopiedra' src={papel} alt="" />
        </button>
        <button onClick={() => {setSelect(2)}} className='tijera boton'>
         <img className='imagenpiedrapapelopiedra' src={tijera} alt="" />
        </button>
      </section>

      
      {
        TuNumero !== 0
        ?
        <section className='resultados'>
          <h3 className='resultado'>Resultado = {resultado}</h3>
          <img className='imagenpiedrapapelopiedra' src={img} alt="" />
        </section>
        :
        ''
      }

      
      {
        resultado === messageWin
        ?
          <img className='confe' src={confe} alt="" />
        :''
      }

    </div>
  )
}
export default App