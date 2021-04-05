import './footer.css'
import { NavLink } from 'react-router-dom'
const Footer = () => {

  return (
    <div className='footer footer-area'>
      <div className='footer'><NavLink to='https://github.com/Drewthurm21/soloProject1/wiki'>Checkout the Wiki!</NavLink></div>
    </div>
  )
}

export default Footer;