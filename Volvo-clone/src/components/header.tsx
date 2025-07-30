

function Header() {
  return (
    <div style={{backgroundColor: '#fafafa'}} className="w-full">
      <nav className="grid grid-cols-3 px-10 font-bold">
        <div className="flex items-center">
          <a href="#"  className="py-5 tracking-[1rem] font-extrabold"><span>VOLVO</span></a>
        </div>

        <div className="flex items-center justify-center">
          <ul className="flex gap-4">
            <li className="nav-item"><a href="#">Naše Vozidlá</a></li>
            <li className="nav-item"><a href="#">Obchod</a></li>
            <li className="nav-item"><a href="#">Vlastníctvo</a></li>
            <li className="nav-item"><a href="#">O nás</a></li>
          </ul>
        </div>

        <div className="flex items-center justify-end font-normal">
          <ul className="flex gap-4">
            <li className="gap-4 nav-item"> <a href="#"> <i className="fa-solid fa-user text-lg"></i> <span className="px-1">Prihlásiť sa</span></a> </li>
            <li className="nav-item h-10 w-10 rounded-full"> <a href="#"><i className="fa-solid fa-magnifying-glass text-lg"></i></a></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header