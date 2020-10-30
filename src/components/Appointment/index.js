import React from "react";

import "./styles.scss";

import Status from "./Status";
import Form from "./Form";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import useVisualMode from "hooks/useVisualMode.js";


export default function Appointment(props) {

  console.log("props in appointment", props);
  // console.log("student in appointment", props.interview)
  // console.log("interviewer in appointment", props.interview.interviewer)

  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    console.log("clicked save")
    transition(SAVING)
    props.bookInterview(props.id, interview)
    .then(() => {
      console.log("promise from axios")
      transition(SHOW)});
    
  }

  return (
    <>
      <Header time={props.time} id={props.id} />
      <article className="appointment"></article>
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}

      {mode === CREATE &&
        <Form
          interviewers={props.interviewers}
          onSave={save}
          onCancel={() => { return back(EMPTY); }}
          id={props.id}
        />
      }
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
        />
      )}
      {mode === SAVING && <Status message= "Saving" />}
    </>
  );

};

