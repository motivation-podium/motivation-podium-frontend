import "./EventsUpload.css"
import axios from "axios";
import APIUrl from "../../url";
import React , {useState} from "react";
import { useNavigate } from "react-router-dom";

function EventsUpload() {
  let navigate = useNavigate()
  let [imageUrl, setimageUrl] = useState("");
  let [title, setTitle] = useState("");
  let [summary, setsummary] = useState("");

  // handle submit
  function handlePost() {
    console.log(imageUrl, title, summary);
    if(imageUrl&&title&&summary&&title){
      axios.post(APIUrl.uploadPreEvent, {
        ImageUrl:imageUrl,
        EventTitle:title,
        EventSummary:summary,
      }).then(
        (res)=>{
          console.log(res.data);
          alert("Form Submitted")
          navigate("/")
        }
      );
    }else{
      alert("Fill title , summary ,  imageURL")
    }
  }
  return (
    <div className="page-event-upload">
      <p>Genral Details :- </p>
      <hr />
      <div>
        <input
          className="event-upload-input"
          type="text"
          placeholder="Reference image url"
          value={imageUrl}
          onChange={(e) => {
            setimageUrl(e.currentTarget.value);
          }}
        />
      </div>
      <div>
        <input
          className="event-upload-input"
          type="text"
          placeholder="Enter Event Title"
          value={title}
          onChange={(e) => {
            setTitle(e.currentTarget.value);
          }}
        />
      </div>
      <div>
        <input
          className="event-upload-input"
          type="text"
          placeholder="Short Summary of Event"
          value={summary}
          onChange={(e) => {
            setsummary(e.currentTarget.value);
          }}
        />
      </div>
      <button className="mp-btn" onClick={handlePost}>
        Submit
      </button>
    </div>
  );
}

export default EventsUpload;
