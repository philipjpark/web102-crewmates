import { createClient } from '@supabase/supabase-js'

const URL = 'https://xlmiryivehlehilrhhey.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhsbWlyeWl2ZWhsZWhpbHJoaGV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODEwODEyNTYsImV4cCI6MTk5NjY1NzI1Nn0.RamdIMfDFG6AZPHD1HtzrkLPnC2C-mH7IMBarVG7MxM';

export const supabase = createClient(URL, API_KEY);



