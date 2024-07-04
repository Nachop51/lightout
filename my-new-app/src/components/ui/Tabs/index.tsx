import { cn } from '../../../utils/index'
import './Tabs.css'
import React from 'react'

type DivProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
type ButtonProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

/* --------------------------------- Context --------------------------------- */

interface TabsContextType {
  selectedTab?: string
  setSelectedTab: (value: string) => void
}

function createTabsContext (defaultContext: TabsContextType) {
  const TabsContext = React.createContext<TabsContextType>(defaultContext)

  function Provider (props: TabsContextType & { children: React.ReactNode }) {
    const { children, ...rest } = props

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

/* --------------------------------- Tabs --------------------------------- */

type TabsElement = React.ElementRef<'div'>
interface TabsProps extends DivProps {
  defaultTab?: string
  onValueChange?: (value: string) => void
}

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

export const TabsPanel = React.forwardRef<TabsPanelElement, TabsPanelProps>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('tabs-panel', className)}
      {...props}
    />
  )
})

/* --------------------------------- TabsPanelButton --------------------------------- */

type TabsPanelButtonElement = React.ElementRef<'button'>
interface TabsPanelButtonProps extends ButtonProps {
  value: string
}

export const TabsPanelButton = React.forwardRef<TabsPanelButtonElement, TabsPanelButtonProps>(({ value, children, className, ...props }, ref) => {
  const context = useTabsContext()

  const classNames = cn('bg-transparent w-full py-1 px-2 text-sm text-[var(--text-inactive)] rounded transition-colors',
    className,
    {
      'bg-[var(--bg)]': context.selectedTab === value,
      'text-white': context.selectedTab === value
    }
  )

  return (
    <button
      ref={ref}
      value={value}
      className={cn(classNames)}
      data-active={context.selectedTab === value}
      onClick={() => context.setSelectedTab(value)}
      {...props}
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
