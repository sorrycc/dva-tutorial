import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCm9ablmomM4Y34LJYjzd92G9nzpkLnvKQ",
  authDomain: "dva-workshop.firebaseapp.com",
  databaseURL: "https://dva-workshop.firebaseio.com",
  storageBucket: "dva-workshop.appspot.com",
};
firebase.initializeApp(config);
const database = firebase.database();

export async function fetchPosts() {
  const snapshot = await database.ref('/posts').orderByKey().once('value');
  return snapshot.val();
}

export async function fetchPost(key) {
  const snapshot = await database.ref(`/posts/${key}`).once('value');
  return snapshot.val();
}


