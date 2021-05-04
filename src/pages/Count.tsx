import { observer } from 'mobx-react'

import countStore from '../../store/Count'

const CountPage: React.FC = observer(() => {
  return (
    <div >
      <div>
        <h1>Count</h1>
        <div>number: {countStore.number}</div>
        <button onClick={() => countStore.increase()}>plus</button>
        <button onClick={() => countStore.decrease()}>minus</button>
      </div>
    </div>
  )
})

export default CountPage
