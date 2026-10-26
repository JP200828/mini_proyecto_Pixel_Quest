import GameHeader from  './components/GameHeader';
import PlayerCard from './components/PlayerCard';
import PowerUpCard from './components/PowerUpCard';

function App() {
  return (
    <main style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}> 
      {/* Aqui usas tus componentes */}
      <GameHeader/>

      
{/* Contenedor de jugadores */}
<div
  style={{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '20px',
    marginBottom: '40px'
  }}
>
  <PlayerCard
    nombre="🧙 Maga Pixel"
    nivel={1}
    vidas="❤️ ❤️ ❤️"
  />

  <PlayerCard
    nombre="🧙 Mago de oz"
    nivel={2}
    vidas="❤️ ❤️ ❤️"
  />

  <PlayerCard
    nombre="🏹 Carlitos"
    nivel={5}
    vidas="❤️ ❤️"
  />

  <PlayerCard
    nombre="🛡️ Duvan"
    nivel={100}
    vidas="❤️ ❤️ ❤️"
  />
</div>

{/* Contenedor independiente para las descripciones */}
<div
  style={{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '30px',
    margin: '40px auto',
    maxWidth: '1100px'
  }}
>
  <PowerUpCard
    nombre="Maga Pixel: Mago de Luz"
    descripcion="Un poderoso hechicero que domina la magia sagrada para iluminar la oscuridad, sanar a sus aliados y lanzar rayos de energía celestial contra sus enemigos."
    simbolo="✨"
  />
   <PowerUpCard
    nombre="Mago de oz: Mago oscuro"
    descripcion="Un hechicero que domina las artes prohibidas y controla las sombras para maldecir a sus enemigos. Su magia oscura es tan poderosa como peligrosa."
    simbolo="🔮"
  />
   <PowerUpCard
    nombre="Carlitos: Arquero Élfico"
    descripcion="Un poderoso hechicero que domina la magia sagrada para iluminar la oscuridad, sanar a sus aliados y lanzar rayos de energía celestial contra sus enemigos."
    simbolo="🏹"
  />
   <PowerUpCard
    nombre="Duvan: Caballero de Acero"
    descripcion="Un experto tirador capaz de acertar en el blanco desde grandes distancias. Su agilidad y precisión lo convierten en un enemigo letal antes de que el combate comience."
    simbolo="🛡️⚔️"
  />
</div>

    </main>
  );
}

export default App;

