import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { 
  getAuth, 
  GoogleAuthProvider, 
  Auth,
  browserLocalPersistence,
  setPersistence 
} from 'firebase/auth';
import { 
  initializeFirestore, 
  persistentLocalCache, 
  persistentMultipleTabManager, 
  getFirestore, 
  Firestore 
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Validação segura para evitar crash da aplicação caso as credenciais não estejam configuradas
export const isFirebaseConfigured = Boolean(
  firebaseConfig.apiKey &&
  firebaseConfig.apiKey !== 'sua_api_key_aqui' &&
  firebaseConfig.projectId &&
  firebaseConfig.projectId !== 'seu_projeto_id'
);

let app: FirebaseApp | null = null;
let auth: Auth | null = null;
let db: Firestore | null = null;
let googleProvider: GoogleAuthProvider | null = null;

if (isFirebaseConfigured) {
  try {
    app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
    auth = getAuth(app);
    
    // Configura persistência local da sessão
    if (typeof window !== 'undefined') {
      setPersistence(auth, browserLocalPersistence).catch(() => {
        // Fallback silencioso caso modo anônimo restrinja persistência
      });
    }

    googleProvider = new GoogleAuthProvider();
    googleProvider.setCustomParameters({ prompt: 'select_account' });

    // Inicializa Firestore com persistência em cache local (IndexedDB) para funcionamento offline
    try {
      if (typeof window !== 'undefined' && typeof indexedDB !== 'undefined') {
        db = initializeFirestore(app, {
          localCache: persistentLocalCache({
            tabManager: persistentMultipleTabManager()
          })
        });
      } else {
        db = getFirestore(app);
      }
    } catch {
      // Fallback para getFirestore caso a inicialização com cache já tenha sido feita ou ocorra erro de contexto
      db = getFirestore(app);
    }
  } catch (error) {
    console.error('Erro ao inicializar Firebase no Word Pocket:', error);
  }
}

export { app, auth, db, googleProvider };
