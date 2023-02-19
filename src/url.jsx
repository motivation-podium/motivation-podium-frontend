let baseDev = "https://motivationpodiumbackend.onrender.com"
let baseDeployment = "https://motivationpodiumbackend.onrender.com"

  baseDev = "https://motiation-podium-backend-6m860c78p-motivation-podium.vercel.app"
  baseDeployment = "https://motiation-podium-backend-6m860c78p-motivation-podium.vercel.app"

//  baseDev = "https://white-farmer-wuyur.ineuron.app:4000"
//  baseDeployment = "https://white-farmer-wuyur.ineuron.app:4000"
// baseDev = "https://motivationpodiumbackend.onrender.com"
// baseDeployment = "https://motivationpodiumbackend.onrender.com"
let APIUrlDev = {
   UrlSignInUser: baseDev+"/signin",
   UrlSignUpUser: baseDev+"/signup",
   adminAuth: baseDev+"/admin/auth",

   adminFecthPreBlog: baseDev+"/upload/fetchpreblog",
   fetchFinalBlog: baseDev+"/final/blog",
   uploadPreBlog: baseDev+"/upload/preblog",
   uploadFinalBlog: baseDev+"/upload/final/blog",
   updatePreBlog: baseDev+"/update/preblog",
   
   uploadPreEvent:baseDev+"/upload/preevent",
   fetchFinalEvent: baseDev+"/final/event",
   fetchPreEvent:baseDev+"/fetch/fetchpreEvents",
   uploadFinalEvent: baseDev+"/upload/final/event",
   updatePreEvent: baseDev+"/update/preevent",
}
let APIUrlDeployment = {
   UrlSignInUser: baseDeployment+"/signin"
}
if(APIUrlDeployment){
   console.log("working")
}
let APIUrl = APIUrlDev; 
export default APIUrl ;
