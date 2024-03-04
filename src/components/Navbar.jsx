import logo from '../assets/react.svg'

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/contacto'>Contacto</a>
        </li>
        <li>
          <a href='/nosotros'>Nosotros</a>
        </li>
      </ul>
      <img src={logo} alt=' Logo react' />
    </nav>
  )
}
