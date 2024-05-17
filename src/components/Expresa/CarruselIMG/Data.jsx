import { useEffect, useState } from 'react';
import { db } from '../../../Firebase/firebaseConfig';
import { collection, getDocs } from "firebase/firestore";

export const useExpImg = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const querySnapshot = await getDocs(collection(db, "expresaImagenes"));
      const imageData = querySnapshot.docs.map(doc => ({
        id: doc.id,
       ...doc.data(),
      }));
      setImages(imageData);
    };

    fetchImages();
  }, []);

  return images;
};
