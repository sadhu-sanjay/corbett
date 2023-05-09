// Initialize Cloud Firestore and get a reference to the service
import { getFirestore } from "firebase/firestore";
import { app } from "./firebaseapp";

export const db = getFirestore(app);
