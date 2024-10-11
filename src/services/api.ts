export const fetchInfo = async () => {
    const response = await fetch('https://api.le-systeme-solaire.net/rest.php/bodies?rowData=false');
    
    if (!response.ok) throw new Error('Error conectando con la data/error fectch a la data');
    
    return await response.json();
  };
  