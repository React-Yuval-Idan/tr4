import { characters } from './data'
import { Link } from 'react-router-dom'

function Characters() {
  return (
    <div>
        <h1>דמויות מלחמת הכוכבים</h1>
        <ul>
            {characters.map(character =>(
                <li key={character.id}>
                   <Link to={`/characters/${character.id}`}>
                   {character.name}
                   </Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Characters