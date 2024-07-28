import VolumeIndicator from './components/VolumeIndicator';
import VolumeRatioChart from './components/VolumeRatioChart';

const App = () => {
    return (
        <>
            {/* <div>App</div> */}
            <VolumeRatioChart volume={90}/>
            {/* <VolumeIndicator volume={50.5} /> */}
        </>
    );
};

export default App;
