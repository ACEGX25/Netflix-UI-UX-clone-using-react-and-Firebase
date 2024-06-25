
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD0lZ0uN4Yn2YB2j61m0UakvfCyz8dMRRI",
  authDomain: "netflix-clone-d87f4.firebaseapp.com",
  projectId: "netflix-clone-d87f4",
  storageBucket: "netflix-clone-d87f4.appspot.com",
  messagingSenderId: "580172515413",
  appId: "1:580172515413:web:e5b74ba2cd35943f7dacdc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const db = getFirestore(app);

const signup = async (name , email , password)=>{
    try{
         const resp = await createUserWithEmailAndPassword(auth, email, password);
         const user = resp.user;
         await addDoc(collection(db,"user"),{
            uid: user.uid,
            name,
            authProvider:"local",
            email,
         })
    }catch{
        console.log(error);
        alert(error);
    }
}

const login = async (email, password)=>{
    try {
        await signInWithEmailAndPassword(auth,email,password);
    } catch (error) {
        console.log(error);
        alert(error);
    }
}

const logout =  ()=>{
    signOut(auth);
}

export{auth, db, login,signup,logout};