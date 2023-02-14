import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDtqt4VAF5f3fzIh2yj0M6Gr-xBiPuyRQM",
  authDomain: "add-link-react.firebaseapp.com",
  projectId: "add-link-react",
  storageBucket: "add-link-react.appspot.com",
  messagingSenderId: "929613421859",
  appId: "1:929613421859:web:c9bbc019b8eb8352b94096"
};
const ap = initializeApp(firebaseConfig);

// Initialize Firebase
export default ap;