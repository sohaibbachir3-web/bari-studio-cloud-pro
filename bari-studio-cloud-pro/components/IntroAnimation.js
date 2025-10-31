import {useEffect, useState} from 'react'
export default function IntroAnimation(){ 
  const [show,setShow] = useState(true)
  useEffect(()=>{ const seen = typeof window !== 'undefined' && window.localStorage.getItem('bari_intro_shown'); if(seen){ setShow(false); return } 
    const t = setTimeout(()=>{ if(typeof window !== 'undefined') window.localStorage.setItem('bari_intro_shown','1'); setShow(false) },1500); return ()=>clearTimeout(t) },[])
  if(!show) return null
  return (
    <div className="intro-wrapper">
      <div style={{textAlign:'center'}} dangerouslySetInnerHTML={{__html:`<svg xmlns="http://www.w3.org/2000/svg" width="360" height="80" viewBox="0 0 360 80"><defs><linearGradient id="g" x1="0" x2="1"><stop offset="0%" stop-color="#D4AF37"/><stop offset="100%" stop-color="#FFA94D"/></linearGradient></defs><rect width="360" height="80" rx="8" fill="transparent"/><g transform="translate(12,8)"><path d="M18 0 L6 30 H14 L8 48 L30 14 H20 L26 0 Z" fill="url(#g)"/></g><text x="72" y="52" font-family="Poppins, sans-serif" font-weight="700" font-size="34" fill="url(#g)">Bari Studio</text></svg>`}} />
    </div>
  )
}
