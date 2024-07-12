import React from 'react'

const Input = React.forwardRef<HTMLInputElement, React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>>((props, ref) => {
  return (
    <input ref={ref} type='text' className='!w-full pl-1 py-0.5 text-sm font-light bg-transparent border transition-colors border-[var(--border)] hover:bg-[var(--border)] outline-none focus:bg-transparent' {...props} />
  )
})

export default Input
