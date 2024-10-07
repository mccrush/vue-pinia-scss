import { projectURL, anonKey } from '../../apiKey'
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(projectURL, anonKey)