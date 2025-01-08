import supabase from '@/services/supabase'

export function getGroups() {
  return supabase.from('groups').select('*')
}
