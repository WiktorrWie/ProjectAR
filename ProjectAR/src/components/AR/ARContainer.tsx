import './SettingsContainer.css';

interface SettingsProps{
  name: string;
}

const SettingsContainer: React.FC<SettingsProps> = ({ name }) => {
  return (
		<div className='settingsContainer'>
      <h1>{name}</h1>
		</div>
	);
};

export default SettingsContainer;
