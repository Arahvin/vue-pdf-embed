export function addPrintStyles(iframe, sizeX, sizeY) {
  const style = iframe.contentWindow.document.createElement('style')
  style.textContent = `
    @page { margin: 0; size: ${sizeX}pt ${sizeY}pt; }
    body { margin: 0; }
    canvas { page-break-after: always; page-break-before: avoid; page-break-inside: avoid; }
  `
  iframe.contentWindow.document.head.appendChild(style)
}

export function createPrintIframe(container) {
  return new Promise((resolve) => {
    const iframe = document.createElement('iframe')
    iframe.width = 0
    iframe.height = 0
    iframe.style.position = 'absolute'
    iframe.style.top = 0
    iframe.style.left = 0
    iframe.style.border = 'none'
    iframe.style.overflow = 'hidden'
    iframe.onload = () => resolve(iframe)
    container.appendChild(iframe)
  })
}

export function emptyElement(el) {
  while (el.firstChild) {
    el.removeChild(el.firstChild)
  }
}
