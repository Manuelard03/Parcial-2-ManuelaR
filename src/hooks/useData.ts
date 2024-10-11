import { useState, useEffect } from 'react';

import { fetchInfo } from '../services/api';
import { types } from '../types/types';

export const useData = () => {
  const [data, setData] = useState <types[] | null> (null);
  const [cargando, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect  (() => {
    const getData = async () => {
      try {
        const result = await fetchInfo();
        setData(result.bodies);

      } catch (err: any) {
        setError(err.message);

      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  return { data, cargando, error };
};
