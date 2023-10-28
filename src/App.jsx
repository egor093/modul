import { useState } from 'react'
import './App.scss'

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
    <button onClick={() => setOpen(true)}>Открыть</button>

    {open && (
      <div className='modul'>
        <button onClick={()=>setOpen(false)}>Закрыть</button>
      </div>
    )}
    </>
  )
}

export default App
