import { useRequests } from '../../stores/requests'
import { LightoutRequest } from '../../types.d'
import UrlInput from './UrlInput'

const Sender = () => {
  const currentReq = useRequests(s => s.selectedRequest) as LightoutRequest

  return (
    <section>
      <UrlInput request={currentReq} />
    </section>
  )
}

export default Sender
