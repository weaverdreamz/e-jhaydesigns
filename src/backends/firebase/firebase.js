import {initializeApp} from "firebase/app";
import {getAuth, signInWithPopup, signInWithRedirect, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider} from "firebase/auth";
import {doc, getDoc, setDoc, getFirestore, query, writeBatch, collection, getDocs} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDCY6QOqU-HMAFIzjhsT5cMK348u-lqET0",
  authDomain: "dandj-designs.firebaseapp.com",
  projectId: "dandj-designs",
  storageBucket: "dandj-designs.appspot.com",
  messagingSenderId: "740805543675",
  appId: "1:740805543675:web:1c66504e7cb43af614525e",
  measurementId: "G-KLDXDL8SBY"
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt:"select_account"
});

export const auth = getAuth();

export const signInWithGooglePopup = ()=>signInWithPopup(auth, provider);

const database = getFirestore();

export const createUserDocument = async(Authu, moreInfo={})=>{

  if(!Authu) return;
  
  const docRef = doc(database, "users", Authu.uid);
  const userSnapshot = await getDoc(docRef);

  if(!userSnapshot.exists()){

    const {displayName, email} = Authu;
    const createdAt = new Date();

    try{
          await setDoc(docRef,{
            displayName,
            email,
            createdAt,
            ...moreInfo
          });

    }
    catch(error){
      console.log('Problem creatin user', error.message)
    }
  }
  return docRef;

}

export const createAuthUserWithEmail = async(email, password)=>{
  if(!email||!password) return;

 return await createUserWithEmailAndPassword(auth, email, password);

}

export const allowUserToAccess = async(email, password)=>{
  if(!email||!password) return;

  return await signInWithEmailAndPassword(auth, email, password);
}

export const Signout = async()=> await signOut(auth);

export const whenAuthStateChange = (callback)=>onAuthStateChanged(auth, callback);

export const uploadCategories = async(categoriesKey, uploadObj)=>{

  const collectionRef = collection(database, categoriesKey);
  const batch = writeBatch(database);

  uploadObj.forEach((obj)=>{

  const docRef = doc(collectionRef, obj.title.toLowerCase());
  batch.set(docRef, obj);
  })
  await batch.commit()

}

export const getCategories = async()=>{
  const collectionRef = collection(database, "categories");
  const q = query(collectionRef);
  const categoryMap = await getDocs(q);

  return categoryMap.docs.map((docSnapshot)=> docSnapshot.data());

}