import { LightoutResponse } from '../../types'

interface ViewResponseProps {
  response: LightoutResponse | null
}

const ViewResponse = ({ response }: ViewResponseProps) => {
  if (response == null) {
    return (
      <div className='p-4 rounded-lg'>
        <h2 className='text-xl'>No response yet</h2>
      </div>
    )
  }

  return (
    <div>
      <div>
        {response.status} {response.statusText}
      </div>
      {
        Object.entries(response.headers).map(([key, value]) => (
          <div key={key}>
            {key}: {value}
          </div>
        ))
      }
      <div>
        {response.body}
      </div>
    </div>
  )
}

export default ViewResponse
