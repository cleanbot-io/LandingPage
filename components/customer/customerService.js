import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase/firebase";

/**
 * Persist a new customer inquiry in Firestore.
 * Enriches the record with createdAt and sourcePage.
 */
export async function createCustomerInquiry(formData) {
  const payload = {
    ...formData,
    createdAt: serverTimestamp(),
    sourcePage: "cleaners",
  };
  const docRef = await addDoc(collection(db, "customerInquiries"), payload);
  return docRef.id;
}
