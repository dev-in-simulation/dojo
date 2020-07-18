import React, { useState, useCallback } from "react";

function useInputfield() {
  const [value, setValue] = useState("");

  const handleValue = useCallback((e) => {
    if (e && e.target) {
      setValue(e.target.value);
    }
  }, []);

  return [value, handleValue];
}

function ContactForm() {
  const [name, handleName] = useInputfield();
  const [email, handleEmail] = useInputfield();
  const [subject, handleSubject] = useInputfield();
  const [msg, handleMsg] = useInputfield();

  return (
    <form className="form">
      <fieldset>
        <legend>Get In Touch</legend>

        <label className="label" for="name">
          Name
        </label>
        <input
          className="inputfield"
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleName}
          autoComplete={false}
          spellCheck={false}
          autoFocus
          required
        />

        <label className="label" for="email">
          Email
        </label>
        <input
          className="inputfield"
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmail}
          autoComplete={false}
          spellCheck={false}
          required
        />

        <label className="label" for="msg-subject">
          Subject
        </label>
        <input
          className="inputfield"
          type="text"
          id="msg-subject"
          name="msg-subject"
          value={subject}
          onChange={handleSubject}
          autoComplete={false}
          spellCheck={false}
          required
        />

        <label className="label" for="msg-body">
          Message
        </label>
        <textarea
          className="textarea"
          id="msg-body"
          name="msg-body"
          value={msg}
          onChange={handleMsg}
          autoComplete={false}
          spellCheck={false}
          rows={4}
          required
        ></textarea>

        <input className="form-submit" type="submit" />
      </fieldset>
    </form>
  );
}

export default ContactForm;
