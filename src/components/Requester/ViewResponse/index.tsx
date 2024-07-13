import { LightoutResponse } from '../../../types.d'
import StatusSpan from '../../ui/StatusSpan'
import { Tabs, TabsContent, TabsPanel, TabsPanelButton } from '../../ui/Tabs'
import Headers from './Headers'

interface ViewResponseProps {
  response: LightoutResponse | null
}

const ViewResponse = ({ response }: ViewResponseProps) => {
  if (response == null) {
    return (
      <section className='p-4 rounded-lg'>
        <h2 className='text-xl'>No response yet</h2>
      </section>
    )
  }

  return (
    <section className='[grid-area:receiver] max-w-full'>
      <div className='flex gap-2 font-normal text-sm overflow-hidden'>
        <StatusSpan status={response.status} />
        <span className='text-green-300'>
          {response.timeTaken.toFixed(2)}ms
        </span>
        {response.statusText}
      </div>

      <Tabs defaultTab='headers' className='max-w-full'>
        <TabsPanel className='tabs-default'>
          <TabsPanelButton value='body'>
            Body
          </TabsPanelButton>
          <TabsPanelButton value='headers'>
            Headers
          </TabsPanelButton>
          <TabsPanelButton value='cookies'>
            Cookies
          </TabsPanelButton>
        </TabsPanel>

        <TabsContent value='body' className='tabs-body-default overflow-auto'>
          <h2 className='text-xl'>Body</h2>
          <pre className='break-all whitespace-pre-wrap'>
            <code>
              {response.body}
            </code>
          </pre>
        </TabsContent>
        <TabsContent value='headers'>
          <Headers headers={response.headers} />
        </TabsContent>
        <TabsContent value='cookies'>
          {response.cookies.map(cookie => (
            <div key={cookie.name} className='flex gap-2'>
              <span>{cookie.name}</span>
              <span>{cookie.value}</span>
            </div>
          ))}
        </TabsContent>
      </Tabs>
    </section>
  )
}

export default ViewResponse
