import { LightoutResponse } from '../../types'
import { Tabs, TabsContent, TabsPanel, TabsPanelButton } from '../ui/Tabs'

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
    <section className='[grid-area:receiver]'>
      <div>
        {response.status} {response.statusText}
      </div>
      <Tabs defaultTab='headers'>
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

        <TabsContent value='body' className='tabs-body-default'>
          <h2 className='text-xl'>Body</h2>
          <pre className='whitespace-break-spaces'>{response.body}</pre>
        </TabsContent>
        <TabsContent value='headers'>
          <h2 className='text-xl'>Response headers</h2>
          <pre className='whitespace-break-spaces'>{JSON.stringify(response.headers, null, 2)}</pre>
        </TabsContent>
        <TabsContent value='cookies'>
          <h2 className='text-xl'>Response cookies</h2>
          <pre className='whitespace-break-spaces'>{JSON.stringify(response.cookies, null, 2)}</pre>
        </TabsContent>
      </Tabs>
    </section>
  )
}

export default ViewResponse
