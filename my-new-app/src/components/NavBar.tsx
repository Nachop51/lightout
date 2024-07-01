const NavBar = () => {
  return (
    <nav className='[grid-area:header] flex p-1.5 justify-between border-b border-b-[var(--border)]'>
      <div className='flex gap-2 items-center'>
        <svg className='fill-current' height='1.4rem' width='1.4rem' version='1.1' id='Layer_1' viewBox='0 0 490.452 490.452'><path d='M245.226,0L43.836,126.814v236.823l201.39,126.814l201.39-126.814V126.814L245.226,0z M403.465,135.095l-158.239,99.643  L86.987,135.095l158.239-99.643L403.465,135.095z M73.836,162.267l156.39,98.477v184.81l-156.39-98.478V162.267z M260.226,445.555  v-184.81l156.39-98.478v184.81L260.226,445.555z' /></svg>
        <h1 className='text-lg uppercase'>Lightout</h1>
      </div>
    </nav>
  )
}

export default NavBar
