import { useData } from '../../hooks/useData';
import Card from '../card/card';
import './homepage.css'

const HomePage = () => {
  const { data, cargando, error } = useData();

  if (cargando) return <p>Cargando...</p>;
  if (error) return <p>Error{error}</p>;

  return (
    <div>
      <h1>Celestial Bodies</h1>
      <h3>By DMI Students</h3>
      
      <div className="cards">
      {data?.map((body) => (
        <Card key={body.id} Body={body} />
      ))}
      </div>
    </div>
  );
};

export default HomePage;
