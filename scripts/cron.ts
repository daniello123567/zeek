import { createClient } from "@supabase/supabase-js";
const supabase = createClient("https://senhkgbpskpdrbaljzng.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNlbmhrZ2Jwc2twZHJiYWxqem5nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg0Mzk5NDksImV4cCI6MjA2NDAxNTk0OX0.Jf5jCvNv_x6oqB7MUzfAbD9Vm_WEhHdfTH4EhhRal7I")
const getDataSha = async ()=>{
  const {data,error} = await supabase.from('cron_table').select('*');
  console.log(data,error)
}
if(require.main===module){
  getDataSha()
}
