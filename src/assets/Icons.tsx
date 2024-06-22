import { SVGProps } from 'react'

export const CrossIcon = () => (<svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 15 15'><path fill='currentColor' d='M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27' /></svg>)

export const PlusIcon = () => (<svg xmlns='http://www.w3.org/2000/svg' width='1.5rem' height='1.5rem' viewBox='0 0 24 24'><path fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 5v14m-7-7h14' /></svg>)

export function ArrowIcon (props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24' {...props}><path fill='currentColor' d='M16.175 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.175l-4.9-4.9q-.3-.3-.288-.7t.313-.7q.3-.275.7-.288t.7.288l6.6 6.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-6.6 6.6q-.275.275-.687.275T11.3 19.3q-.3-.3-.3-.712t.3-.713z' /></svg>
  )
}

export function DownArrowIcon (props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} className='-rotate-90' xmlns='http://www.w3.org/2000/svg' width='0.75rem' height='0.75rem' viewBox='0 0 24 24'><path fill='currentColor' d='m8.82 12l7.715 7.716q.22.22.218.528t-.224.529q-.221.221-.529.221t-.529-.221L7.83 13.136q-.243-.242-.354-.54q-.112-.298-.112-.596t.112-.596t.354-.54l7.64-7.644q.221-.221.532-.218q.31.003.531.224t.222.529t-.222.528z' /></svg>
  )
}
