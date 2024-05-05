import { createClient } from "@supabase/supabase-js";

const DATABASE_URL = import.meta.env.VITE_DATABASE_URL;
const PUBLIC_TOKEN = import.meta.env.VITE_DATABASE_KEY;

export const supabase = createClient(DATABASE_URL, PUBLIC_TOKEN);
