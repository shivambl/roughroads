import { useState } from 'react'
import { styles } from './styles/App.styles'
import PermissionRequest from './components/PermissionRequest'
import AccelerometerDisplay from './components/AccelerometerDisplay'

const App = () => {
    const [permission, setPermission] = useState('prompt')
    const [acceleration, setAcceleration] = useState({ x: 0, y: 0, z: 0 })

    const renderContent = () => {
        switch (permission) {
            case 'prompt':
                return (
                    <PermissionRequest 
                        onPermissionChange={setPermission}
                        onAccelerationChange={setAcceleration}
                    />
                )
            case 'granted':
                return <AccelerometerDisplay acceleration={acceleration} />
            case 'denied':
                return <p className={styles.errorText}>
                    Accelerometer access was denied. Please enable it in your browser settings.
                </p>
            case 'not-supported':
                return <p className={styles.errorText}>
                    Sorry, your device doesn't support the Accelerometer API.
                </p>
            default:
                return null
        }
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                Accelerometer Demo
            </h1>
            {renderContent()}
        </div>
    )
}

export default App
