import { styles } from '../styles/App.styles'

const AccelerometerDisplay = ({ acceleration }) => {
    return (
        <div className={styles.dataContainer}>
            <h2 className={styles.dataTitle}>Accelerometer Data:</h2>
            <div className={styles.dataValues}>
                <p>X: {acceleration.x.toFixed(2)}</p>
                <p>Y: {acceleration.y.toFixed(2)}</p>
                <p>Z: {acceleration.z.toFixed(2)}</p>
            </div>
        </div>
    )
}

export default AccelerometerDisplay 