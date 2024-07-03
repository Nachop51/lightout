import React from 'react'
import { ArrowIcon } from '../../../assets/Icons'
import { useRequests } from '../../../stores/requests'
import { LightoutRequest, Method } from '../../../types.d'
import { methods, methodsColors } from '../../../constants'
import Dropdown from '../../ui/Dropdown'
import { useHistory } from '../../../stores/history'

interface UrlInputProps {
  request: LightoutRequest
}

const HandleSend = ({ request }: UrlInputProps) => {
  const updateRequest = useRequests(s => s.updateRequest)
  const performRequest = useRequests(s => s.performRequest)
  const pushToHistory = useHistory(s => s.pushToHistory)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateRequest({ ...request, host: e.target.value })
  }

  const handleDropdownChange = (method: Method) => () => {
    updateRequest({ ...request, method })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const resp = await performRequest(request)

    pushToHistory(request.id, resp)
  }

  return (
    <section>
      <form className='flex' onSubmit={handleSubmit}>
        <Dropdown className={`rounded-l !border-r-0 ${methodsColors[request.method].textColor} min-w-[122px]`} value={request.method}>
          {
              methods.map((method, i) => (
                <React.Fragment key={method}>
                  {i === methods.length - 3 && <Dropdown.Divider />}
                  <Dropdown.Item
                    className={methodsColors[method].textColor}
                    active={request.method === method}
                    onClick={handleDropdownChange(method)}
                  >
                    {method}
                  </Dropdown.Item>
                </React.Fragment>
              ))
            }

          <Dropdown.Divider />
          <Dropdown.Description>Select desired method</Dropdown.Description>
        </Dropdown>

        <div className='flex items-center border-y border-[var(--border)]'>
          <span className='border-l h-1/2 border-[var(--border)]' />
        </div>
        <input
          type='text'
          className='flex-1 rounded-r border border-[var(--border)] border-l-0 pl-4 text-sm font-light bg-transparent outline -outline-offset-1 outline-4 outline-transparent transition-all focus:outline-violet-400'
          value={request.host}
          onChange={handleInputChange}
          placeholder='https://api.nachop.xyz/shorten?url=https://nachop.xyz'
        />
        <button className='ml-1.5 px-4 uppercase flex items-center rounded bg-white text-black hover:bg-violet-300 transition-colors' type='submit'>
          <span className='mr-1'>Send</span> <ArrowIcon />
        </button>
      </form>
    </section>
  )
}

export default HandleSend
