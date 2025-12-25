import { Link, useParams } from 'react-router-dom';
import { characters } from './data';


function CharacterDetails() {
 const { id } = useParams();
 const character = characters.find(c => c.id === parseInt(id));

 if(!character) {
    return(
        <div>
            <h1>דמות לא נמצאה</h1>
            <p>הדמות שחיפשת לא קיימת</p>
            <Link to="/characters">חזרה לרשימת הדמויות </Link>
        </div>
    )
 }

 const textColor= character.side === 'Dark' ? 'red' : 'blue';

  return (
    <div>
        <h1 style={{color: textColor}}>{character.name}</h1>
        <p>תפקיד: {character.role}</p>
        <p>צד:<span style={{color: textColor}}>{character.side}</span></p>
        <Link to="/characters">חזרה לרשימת הדמויות </Link>
    </div>
  )
}
export default CharacterDetails