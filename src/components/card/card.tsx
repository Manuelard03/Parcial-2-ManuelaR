import { useNavigate } from 'react-router-dom';
import { types } from '../../types/types';
import './card.css'

interface Props {
  Body: types;
}

const Card: React.FC<Props> = ({ Body }) => {

const navigate = useNavigate();

const handleClick = () => { navigate(`/detail/${Body.id}`);};

  return (
      <div className="card" onClick={handleClick}>
        <h2>{Body.name}</h2>
        <p>Density: {Body.density}</p>
        <p>Gravity: {Body.gravity || 'N/A'}</p>
        <p>Mass: {Body.mass ? `${Body.mass.massValue} ${Body.mass.massExponent}` : 'N/A'}</p>
      </div>
  );
};

export default Card;
