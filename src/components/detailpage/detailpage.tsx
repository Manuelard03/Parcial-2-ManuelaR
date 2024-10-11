import { useParams } from 'react-router-dom';
import { useData } from '../../hooks/useData';

const DetailPage = () => {
  const { id } = useParams();
  const { data, cargando, error } = useData();

  if (cargando) return <p>Cargando...</p>;
  if (error) return <p>Error{error}</p>;

  const Body = data?.find((body) => body.id === id);
  if (!Body) return <p>Cuerpo celestial no encontrado</p>;

  return (
    <div>
      <h1>{Body.name}</h1>
      <p>Density: {Body.density || 'N/A'}</p>
      <p>Gravity: {Body.gravity || 'N/A'}</p>
      <p>Mass: {Body.mass ? `${Body.mass.massValue} ${Body.mass.massExponent}` : 'N/A'}</p>
      <p>Diameter: {Body.meanRadius ? Body.meanRadius * 2 : 'N/A'}</p>
    </div>
  );
};

export default DetailPage;
