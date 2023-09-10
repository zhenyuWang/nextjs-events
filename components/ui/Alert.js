import classes from './Alert.module.css'

export default function Alert({ bgColor, children }) {
  return (
    <div
      className={classes.container}
      style={{
        backgroundColor: bgColor || 'rgb(249, 19, 207)',
      }}>
      {children}
    </div>
  )
}
