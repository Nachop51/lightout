import './Tabs.css'
import React, { DetailedHTMLProps, HTMLAttributes } from 'react'

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
type ButtonProps = DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

/* --------------------------------- Context --------------------------------- */

interface TabsContextType {
  selectedTab?: string
  setSelectedTab: (value: string) => void
}

function createTabsContext (defaultContext: TabsContextType) {
  const TabsContext = React.createContext<TabsContextType>(defaultContext)

  function Provider (props: TabsContextType & { children: React.ReactNode }) {
    const { children, ...rest } = props

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const value = React.useMemo(() => rest, Object.values(rest))

    return (
      <TabsContext.Provider value={value}>
        {children}
      </TabsContext.Provider>
    )
  }

  function useContext () {
    return React.useContext(TabsContext)
  }

  return [Provider, useContext] as const
}

const [TabsProvider, useTabsContext] = createTabsContext({ selectedTab: '', setSelectedTab: () => {} })

interface TabsProps extends DivProps {
  defaultTab?: string
  onValueChange?: (value: string) => void
}

/* --------------------------------- Tabs --------------------------------- */

type TabsElement = React.ElementRef<'div'>

export const Tabs = React.forwardRef<TabsElement, TabsProps>(({ defaultTab, onValueChange, ...props }, ref) => {
  const [selectedTab, setSelectedTab] = React.useState(defaultTab)

  const handleTabChange = (value: string) => {
    setSelectedTab(value)
    onValueChange?.(value)
  }

  return (
    <TabsProvider
      selectedTab={selectedTab}
      setSelectedTab={handleTabChange}
    >
      <div ref={ref} {...props} />
    </TabsProvider>
  )
})

/* --------------------------------- TabsPanel --------------------------------- */

type TabsPanelElement = React.ElementRef<'div'>
interface TabsPanelProps extends DivProps {}

export const TabsPanel = React.forwardRef<TabsPanelElement, TabsPanelProps>((props, ref) => {
  return (
    <div
      className=''
      ref={ref}
      {...props}
    />
  )
})

/* --------------------------------- TabsPanelButton --------------------------------- */

type TabsPanelButtonElement = React.ElementRef<'button'>
interface TabsPanelButtonProps extends ButtonProps {
  value: string
}

export const TabsPanelButton = React.forwardRef<TabsPanelButtonElement, TabsPanelButtonProps>(({ value, children }, ref) => {
  const context = useTabsContext()

  return (
    <button
      ref={ref}
      value={value}
      data-active={context.selectedTab === value}
      onClick={() => context.setSelectedTab(value)}
    >{children}
    </button>
  )
})

/* --------------------------------- TabsContent --------------------------------- */

type TabsContentElement = React.ElementRef<'div'>
interface TabsContentProps extends DivProps {
  value: string
}

export const TabsContent = React.forwardRef<TabsContentElement, TabsContentProps>(({ children, value, ...props }, ref) => {
  const context = useTabsContext()
  const selected = value === context.selectedTab

  return (
    <div ref={ref} hidden={!selected} {...props}>
      {children}
    </div>
  )
})
