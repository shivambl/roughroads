import { styles } from '../styles/App.styles'

const PermissionRequest = ({ onPermissionChange, onAccelerationChange }) => {
  const handlePermissionRequest = async () => {
    try {
      const result = await navigator.permissions.query({ name: 'accelerometer' })
      onPermissionChange(result.state)
      
      if (result.state === 'granted') {
        const sensor = new Accelerometer({ frequency: 60 })
        
        sensor.addEventListener('reading', () => {
          onAccelerationChange({
            x: sensor.x,
            y: sensor.y,
            z: sensor.z
          })
        })
        
        sensor.start()
      }
    } catch (error) {
      console.error('Accelerometer not supported:', error)
      onPermissionChange('not-supported')
    }
  }

  return (
    <button 
      onClick={handlePermissionRequest}
      className={styles.button}
    >
      Request Accelerometer Access
    </button>
  )
}

export default PermissionRequest 