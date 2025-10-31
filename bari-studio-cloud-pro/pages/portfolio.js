import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default function Portfolio(){ return (<div><Head><title>Portfolio - Bari Studio</title></Head><Navbar /><main className='container section'><h1>Portfolio</h1><div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:16,marginTop:16}}>{[1,2,3,4,5,6].map(i=>(<div key={i} className='card'><h4>Project {i}</h4><p>Mockup project</p></div>))}</div></main><Footer /></div>) }