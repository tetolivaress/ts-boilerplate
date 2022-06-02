export const createLoadingContainer = () => {
  const portalRoot = document.createElement('div')
  portalRoot.setAttribute('id', 'loading')
  document.body.appendChild(portalRoot)
}