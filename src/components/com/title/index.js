import les from './index.less'

const Title = ({
  label,
}) => {
  return (
    <div className={les.title}>
      {label}
    </div>
  )
}

export default Title
