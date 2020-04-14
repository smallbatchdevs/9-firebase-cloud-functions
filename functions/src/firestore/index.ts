import * as functions from 'firebase-functions';

export const onFirestoreWrite = functions.firestore
                                         .document(`exampleCollection/{documentUid}`)
                                         .onCreate(async (event: any) => {
                                           console.log(`event.data() `, event.data());
                                         });
