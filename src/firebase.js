import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyABI4nLBS2_5c008cfQgf3uAElQkiySgX8",
    authDomain: "caprest-fcdf0.firebaseapp.com",
    projectId: "caprest-fcdf0",
    storageBucket: "caprest-fcdf0.appspot.com",
    messagingSenderId: "683318889921",
    appId: "1:683318889921:web:051105b1ea307dae2bf340"
  };

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const generateUserDocument = async (user, additionalData) => {
if (!user) return;
const userRef = firestore.doc(`users/${user.uid}`);
const snapshot = await userRef.get();
if (!snapshot.exists) {
    const { email, photoURL, displayName, phoneNumber } = user;
    try {
    await userRef.set({
        email,
        displayName,
        phoneNumber,
        ...additionalData
    });
    } catch (error) {
    console.error("Error creating user document", error);
    }
}
return getUserDocument(user.uid);
};

const getUserDocument = async uid => {
    if (!uid) return null;
    try {
        const userDocument = await firestore.doc(`users/${uid}`).get();
        return {
        uid,
        ...userDocument.data()
        };
        } catch (error) {
        console.error("Error fetching user", error);
    }
};