import { projectURL, anonKey } from '../../apiKeyMC'
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(projectURL, anonKey)
