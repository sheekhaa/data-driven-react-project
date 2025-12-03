import globalImg from '../imgs/global.png'
function Header() {
  return (
    <header>
      <img src={globalImg} alt="global"/>
      <h1>my travel journal</h1>
    </header>
  )
}
export default Header