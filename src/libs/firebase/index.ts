import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import firebaseOptions from "@env/firebaseOptions.json";

export const firebaseApp = initializeApp(firebaseOptions);
export const firebaseAuth = getAuth(firebaseApp);
