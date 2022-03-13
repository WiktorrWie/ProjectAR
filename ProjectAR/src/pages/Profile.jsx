import { IonPage, IonHeader, IonContent, IonLabel, IonRouterOutlet, IonTabs, IonTitle, IonToolbar, IonTabBar, IonTabButton, useIonViewWillEnter, IonRefresherContent, IonList, IonRefresher} from '@ionic/react';
import { Route } from 'react-router';
import SettingsContainer from './SettingsContainer';
import PostsContainer from '../components/profile/PostsContainer';
import './Profile.css';
import { postsRef, getPostRef, db } from "../firebase-config";
import { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";

/*
function App(){
	const [posts, setPosts] = useState([]);
	const postsCollectionRef = collection(db, "posts");
	
	useEffect(() => {
		const getUsers = async () => {
		const data = await getDocs(postsCollectionRef);
		setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		};
		getPosts();
	}, [])
}
*/

export default function PostsPage() {
    const [posts, setPosts] = useState([]);

    async function loadPosts() {
        //const url = "https://project-ar-9bac5-default-rtdb.firebaseio.com/posts.json";
        const url = "https://race-rest-default-rtdb.firebaseio.com/posts.json";
        const response = await fetch(url);
        const data = await response.json();
        const postsArray = Object.keys(data).map(key => ({ id: key, ...data[key] })); // from object to array
        setPosts(postsArray.reverse());
    }
    async function refresh(e) {
        await loadPosts();
        setTimeout(() => {
            e.detail.complete();
        }, 1000);
    }
    useIonViewWillEnter(() => {
        loadPosts();
    });


    return (
        <IonPage className="posts-page">
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Posts</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonRefresher slot="fixed" onIonRefresh={refresh}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>

                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Posts</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonList>
                    {posts.map(post => (
                        <PostsContainer post={post} key={post.id} />
                    ))}
                </IonList>
            </IonContent>
        </IonPage>
    );
}

/*
const Profile: React.FC = () => {
  return (
    
		<IonTabs>
			<IonHeader>Profile</IonHeader>
			<IonTabBar>
				
      </IonTabBar>


			<IonRouterOutlet>
				<Route path='/profile/settings' component={SettingsContainer} exact />
				<Route path='/profile/posts' component={PostsContainer} exact />
			</IonRouterOutlet>
    </IonTabs>
    
	);
};

export default Profile;

*/
