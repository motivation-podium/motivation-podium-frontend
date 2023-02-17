let baseDev = "https://motivationpodiumbackend.onrender.com"
let baseDeployment = "https://motivationpodiumbackend.onrender.com"
// let baseDev = "https://white-farmer-wuyur.ineuron.app:4000"
// let baseDeployment = "https://white-farmer-wuyur.ineuron.app:4000"

// baseDev = "https://motivationpodiumbackend.onrender.com"
// baseDeployment = "https://motivationpodiumbackend.onrender.com"


let APIUrlDev = {
   UrlSignInUser: baseDev+"/signin",
   UrlSignUpUser: baseDev+"/signup",
   adminFecthPreBlog: baseDev+"/upload/fetchpreblog",
   fetchFinalBlog: baseDev+"/final/blog",
   uploadPreBlog: baseDev+"/upload/preblog",
   uploadFinalBlog: baseDev+"/upload/final/blog",
   updatePreBlog: baseDev+"/update/preblog",
}
let APIUrlDeployment = {
   UrlSignInUser: baseDeployment+"/signin"
}
if(APIUrlDeployment){
   console.log("working")
}
let APIUrl = APIUrlDev; 
export default APIUrl ;
