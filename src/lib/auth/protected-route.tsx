import { useEffect } from 'react'
import { useNavigate } from '@tanstack/react-router'
import { useAuth } from './context'

export function useProtectedRoute() {
  const { user, loading } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!loading && !user) {
      navigate({ to: '/login' })
    }
  }, [user, loading, navigate])

  return { user, loading }
}
