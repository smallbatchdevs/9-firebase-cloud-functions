// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();

import { helloWorld } from './http';
import { onFirestoreWrite } from './firestore';
export { helloWorld, onFirestoreWrite };
