import { initializeApp } from 'firebase/app';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

const firebaseConfig = {
  storageBucket: 'ray7ackson-94561.appspot.com',
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export const getFileLink = async (
  path: string
): Promise<string | undefined> => {
  try {
    return await getDownloadURL(ref(storage, path));
  } catch (e) {
    console.error(e);
  }
};
