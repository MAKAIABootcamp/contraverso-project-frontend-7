import { useEffect, useState } from 'react';
import { db } from '../../../Firebase/firebaseConfig';
import { collection, getDocs } from "firebase/firestore"; 

export const useFactChecking = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "recomienda"));
      const data = querySnapshot.docs.map(doc => ({ id: doc.id,...doc.data() }));
      setData(data);
    };

    fetchData();
  }, []);

  return data; 
};

export const mediosCO = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "recomiendaMediosCO"));
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setData(data);
    };

    fetchData();
  }, []);

  return data;
};

export const mediosND = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "recomiendaMediosND"));
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setData(data);
    };

    fetchData();
  }, []);

  return data;
};