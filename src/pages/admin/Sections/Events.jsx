import React from "react";
import axios from "axios";
import APIUrl from "../../../url";
import "./log.css";
import { useState } from "react";
import { useEffect } from "react";


function Events() {
    let [eventArray, setEventArray] = useState([]);
    // fetching all events details
    useEffect(() => {
        axios
          .get(APIUrl.fetchPreEvent)
          .then(function(response) {
            let data = response.data;
            setEventArray(data.reverse());
            console.log(response.data);
          })
          .catch(function(error) {
            console.log(error);
          });
      }, []);

    // handling submit
    function handleFinalSubmit(_id, _status, event) {
        console.log("updating status by put");
        console.log("updating post at finalDb");
        console.log(_id, _status);
        console.log(event.Status);

        // alert("done status will be updated on next refresh");
        if (event.Status === true) {
          alert("already present");
          return;
        }
        else {
          axios
            .put(APIUrl.updatePreEvent, { id: _id, status: _status })
            .then((res) => {
              console.log(res);
              if (res.data.success) {
                console.log(event);
                axios
                  .post(APIUrl.uploadFinalEvent, {
                    EventKey: event.EventKey,
                    ImageUrl: event.ImageUrl,
                    EventTitle: event.EventTitle,
                    EventSummary: event.EventSummary
                  })
                  .then((res) => {
                    if (res.data) {
                      alert("done");
                    } else {
                      alert("some problem occuour at backend");
                    }
                  });
              } else {
                alert("some problem occuour at backend");
              }
            });
        }
      }

    //   creatting a card component 
      function EventCard(props) {
        return (
          <div className="card">
            <div>
              <b>Event Title--:-- </b>
              {props.item.EventTitle}
            </div>
            <div>
              <b>Event Id--:-- </b>
              {props.item._id}
            </div>
            <div>
              <b>Status--:--</b>
              {props.item.Status && "Accepted"}
              {!props.item.Status && "notAccepted"}
            </div>
            <details>
              <summary>Description</summary>
              <div>
                <div>
                  <b>URL--:--</b>
                  {props.item.ImageUrl}
                </div>
                <div>
                  <b>Summary--:--</b>
                  {props.item.EventSummary}
                </div>
              </div>
            </details>
            <div className="btn-container">
              <button
                className="mp-btn-m"
                onClick={() => {
                  handleFinalSubmit(props.item._id, true, props.item);
                }}
              >
                Accept
              </button>
            </div>
          </div>
        );
      }
  return (
    <div>
      {eventArray.map((item, index) => {
        return <EventCard item={item} key={index} />;
      })}
    </div>
  )
}

export default Events