import { Box, colors } from '@mui/material';
import styles from './VolumeRatioChart.module.css';

const VolumeRatioChart = ({ volume = 0 }) => {
    const maxHeight = 238;
    const levelHeight = (volume / 100) * maxHeight;

    let levelColor;
    if (volume <= 33) {
        levelColor = 'red';
    } else if (volume <= 66) {
        levelColor = 'orange';
    } else {
        levelColor = 'green';
    }

    return (
        <>
            {/* {Array.from({ length: 20 }, (_, index) => (
                <Box
                    key={index}
                    sx={(theme) => ({
                        background: colors.blue[500],
                        height: 10,
                        mb: 0.5,
                        // mb: (index + 1) % 2 === 0 && 0.5,
                    })}
                />
            ))} */}
            {/* <div className={`${styles.volumRatioChartWrapper}`}>
                <div className={`${styles.indicatorWrapper}`}>
                    <div className={`${styles.stepsPlaceholderWrapper}`} />
                    {Array.from({ length: 20 }, (_, index) => (
                        <Fragment key={index}>
                            <div className={`${styles.indicatorStep}`}/>
                            {index + 1 < 20 && (
                                <div className={`${styles.stepSpacer}`} />
                            )}
                        </Fragment>
                    ))}
                </div>
            </div> */}
            <div className={`${styles.volumeChartContainer}`}>
                <div className={`${styles.chartIndicatorWrapper}`}>
                    {Array.from({ length: 20 }, (_, index) => (
                        <div
                            className={`${styles.chartIndicator}`}
                            key={index}
                        />
                    ))}
                    <div
                        className={`${styles.chartColorBackground}`}
                        style={{
                            '--level-height': `${levelHeight}px`,
                            '--level-color': levelColor,
                        }}
                    />
                </div>
            </div>
        </>
    );
};

export default VolumeRatioChart;
