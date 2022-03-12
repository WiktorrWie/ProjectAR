import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { person, map, camera, settings, addCircle } from 'ionicons/icons';
import ARTab from './pages/ARTab';
import Profile from './pages/Profile';
import Map from './pages/Map';
import AddPost from './pages/AddPost';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
        <Route exact path='/artab'>
						<ARTab />
					</Route>
					<Route path='/profile'>
						<Profile />
					</Route>
					<Route exact path='/'>
						<Redirect to='/artab' />
          </Route>
          <Route path='/AddPost'>
						<AddPost />
					</Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="artab" href="/artab">
            <IonIcon icon={camera} />
            <IonLabel>AR camera</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Map" href="/Map">
            <IonIcon icon={map} />
            <IonLabel>Map</IonLabel>
          </IonTabButton>
          <IonTabButton tab="addPost" href="/AddPost">
            <IonIcon class='addCircle' icon={addCircle} />
          </IonTabButton>
          <IonTabButton tab="profile" href='/profile/posts'>
            <IonIcon icon={person} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
          <IonTabButton tab="settings" href='/profile/settings'>
            <IonIcon icon={settings} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
