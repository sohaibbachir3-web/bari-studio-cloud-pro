import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default function Admin(){ if(typeof window !== 'undefined'){ const params=new URLSearchParams(window.location.search); if(params.get('key')!=='baristudio2025'){ return (<div style={{padding:40}}><h2>Unauthorized</h2><p className='admin-note'>You need a valid admin key to view this page.</p></div>) } }
 return (<div><Head><title>Admin - Bari Studio</title></Head><Navbar /><main className='container section'><h1>Admin Dashboard</h1><p>Requests and Projects will appear here (connected to Notion in production).</p></main><Footer /></div>) }