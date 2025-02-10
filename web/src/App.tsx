import React from 'react'
import { debugData } from './utils/debugData';
debugData([
  {
    action: "setVisible",
    data: true,
  },
]);

const App:React.FC = () => {
  return (
    <div className='text-red-800'>App</div>
  )
}

export default App