


export function getInitThemeMode() {
  if (typeof window === 'undefined') {
    return 'light'
  }

  const colorLocal = window.localStorage.getItem(
    'color-mode',
  )
  const hasPersistedPreference = typeof colorLocal === 'string'
  if (hasPersistedPreference) {
    return colorLocal
  }
  const mql = window.matchMedia('(prefers-color-scheme: dark)')
    return mql.matches ? 'dark' : 'light'
}
