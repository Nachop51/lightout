import './Dropdown.css'
import React, { useState } from 'react'
import { DownArrowIcon } from '../../../assets/Icons'

interface DropdownProps {
  children: React.ReactNode
  className?: string
  value?: string
}

export const Dropdown = ({
  children,
  className,
  value = 'Dropdown'
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation()

    setIsOpen(!isOpen)
  }

  return (
    <div role='button' tabIndex={0} onClick={handleClick} className={'dropdown-button-container ' + className ?? ''} aria-expanded={isOpen}>
      <div className='dropdown-button-content'>
        <span>{value}</span>
        <DownArrowIcon />
      </div>
      {isOpen && (
        <div className='dropdown-body'>
          <ul>
            {children}
          </ul>
        </div>
      )}
    </div>
  )
}

const DropdownItem = ({ className = '', children, active, onClick }: DropdownProps & { active?: boolean; onClick: () => void}) => {
  return (
    <li onClick={onClick} className={'dropdown-item ' + className} data-active={active}>{children}</li>
  )
}

const DropdownDivider = () => {
  return (
    <li className='dropdown-divider' />
  )
}

const DropdownDescription = ({ children }: DropdownProps) => {
  return (
    <li className='dropdown-description'>{children}</li>
  )
}

Dropdown.Item = DropdownItem
Dropdown.Divider = DropdownDivider
Dropdown.Description = DropdownDescription

export default Dropdown
