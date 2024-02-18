import { useState } from 'react'

export default function HomePage() {
  const [url, setUrl] = useState('')

  function submitHandler(e) {
    e.preventDefault();
  }

  return (
    <div className='max-w-[1440px] m-auto min-h-screen'>
    <main className='h-[calc(100vh_-_72px)] flex justify-center items-stretch flex-col'>
      <div className="flex justify-center">
        <form id='qr-form' onSubmit={submitHandler} className='border-white p-2 flex w-full max-w-2xl border-2 rounded-2xl focus-within:border-primary'>
          <input type="url" value={url} onChange={(e) => setUrl(e.value)} placeholder='Enter an url' className='bg-transparent outline-none flex-1 px-2 py-4 border-none' />
          <button type="submit" className='bg-primary px-8 rounded-lg transition-transform hover:scale-95'>QR code</button>
        </form>
      </div>
    </main>
  </div>
  )
}
