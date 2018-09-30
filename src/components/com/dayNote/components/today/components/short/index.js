import les from './index.less'

const Short = () => {
  const list = [
    {
      id: 's01',
      label: '天气',
      value: '晴',
    },
    {
      id: 's02',
      label: '内容',
      value: '上班',
    },
    {
      id: 's03',
      label: '起床',
      value: '7:00',
    },
    {
      id: 's04',
      label: '睡觉',
      value: '23:45',
    },
  ]

  const mapShort = (ary) => {
    return ary.map(d => {
      return (
        <li
          key={d.id}
          className={les.item}
        >
          <div className={les.label}>{d.label}</div>
          <div className={les.value}>{d.value}</div>
        </li>
      )
    })
  }

  return (
    <ul className={les.list}>{mapShort(list)}</ul>
  )
}

export default Short
