import inspectifyLogo from './images/Inspectify 1.png'

function Header(){
  return(
  <div className="Header">
    <img className="logo" src={inspectifyLogo} alt="inspectifyLogo"/>
  </div>
  )
}

export default Header;
