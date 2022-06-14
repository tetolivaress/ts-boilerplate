import { createPortal } from 'react-dom'

interface Props {
  children: JSX.Element | JSX.Element[]
  open: boolean
}

const Loading = ({ children, open }: Props) => {
  if (!open) return null
  const loadingDiv = document.getElementById('loading') as HTMLElement

  return createPortal(<div>{children}</div>, loadingDiv)
}

export default Loading
