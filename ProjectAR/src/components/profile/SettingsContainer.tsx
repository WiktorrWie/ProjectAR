import { IonButton } from '@ionic/react';
import './SettingsContainer.css';

interface SettingsProps{
  name: string;
}

const SettingsContainer: React.FC<SettingsProps> = ({ name }) => {
  return (
		<div className='settingsContainer'>
			<h1>{name}</h1>
			<h3>To do</h3>
			<ul>
				<li>Update password?</li>

				<li>Toggle Dark mode</li>
				<IonButton>On</IonButton>

				<IonButton>Off</IonButton>
				<li>Customize Theme?</li>
				<li>Set privacy?</li>
				<li>See posts / AR based on city only</li>
				<IonButton>On</IonButton>

				<IonButton>Off</IonButton>
			</ul>
		</div>
	);
};

export default SettingsContainer;
