import les from './index.less'

const BaseLab = ({
  title,
  className,
  children,
}) => {
  return (
    <div className={`${les.container} ${className || ''}`}>
      <div className={les.title}>{title}</div>
      <div>{children}</div>
    </div>
  )
}

export default BaseLab
