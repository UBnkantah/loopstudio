import '../App.css'
import Navbar from './Navbar'

const HeroSection = () => {
  return (
    <div className='herosection-container'>
        <Navbar />
        <div className='row container justify-content-center align-items-center'>
            <div className='col-md-5'>
                <div className='border border-white p-3 rounded'>
                    <h2 className='text-white'>Immersive experiences that deliver</h2>
                </div>
            </div>
            <div className='col-md-5'></div>
        </div>
    </div>
  )
}

export default HeroSection