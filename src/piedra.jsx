import { useState } from 'react'
import './piedra.css'
import piedra from './assets/piedra.png'
import tijera from './assets/tijera.png'
import papel from './assets/papel.png'
import confe from './assets/confetti-10.gif'

function App() {
 let [TuNumero, setCount] = useState(0);
 let NumberRandom = Math.floor(Math.random() * (4 - 1) + 1);
 let resultado = false
 let img = "hola"

 if(TuNumero == NumberRandom){
  resultado = "Empate❤️"
 }else if(TuNumero == 2 && NumberRandom == 3 ){
  resultado = "Has ganado✨"
}else if(TuNumero == 3 && NumberRandom == 1 ){
  resultado = "Has ganado✨"
 }else if(TuNumero == 1 && NumberRandom == 2 ){
  resultado = "Has ganado✨"
}else{
  resultado = "Has perdido💀"
 }


 if(NumberRandom == 1){
  img = piedra
 }else if(NumberRandom == 2){
  img = tijera
 } else if(NumberRandom == 3){
  img = papel
 }

 



 //1 --->Piedra
 //2 --->Tijera
 //3 ---> Papel
 //el 2 gana al 3
 //el 3 gana al 1
 //el 1 gana al 2
  return (
    <div className="juego">
      <div className="titulos">
        <h1>Piedra papel o tijera</h1>
        <h2>¿Qué eliges?</h2>
      </div>
      <section className='elegir'>
        <button onClick={() => {setCount(1)}} className='piedra boton'>
          <img className='imagenpiedrapapelopiedra' src={piedra} alt="" />
        </button>
        <button onClick={() => {setCount(3)}} className='papel boton'>
          <img className='imagenpiedrapapelopiedra' src={papel} alt="" />
        </button>
        <button onClick={() => {setCount(2)}} className='tijera boton'>
         <img className='imagenpiedrapapelopiedra' src={tijera} alt="" />
        </button>
      </section>
      { TuNumero !== 0?
      <section className='resultados'>
        <h3 className='resultado'>Resultado = {resultado}</h3>
        <img className='imagenpiedrapapelopiedra' src={img} alt="" />
      </section>
    :''
}

    </div>
  )
}

export default App
