import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
	apiKey: "AIzaSyDhuaRLty5xTClpRRjRl0UlIKSn24oTP2M",
	authDomain: "navigator-69bef.firebaseapp.com",
	projectId: "navigator-69bef",
	storageBucket: "navigator-69bef.appspot.com",
	messagingSenderId: "12387217809",
	appId: "1:12387217809:web:acfcd81f93056ade656a30"
};

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export { auth }