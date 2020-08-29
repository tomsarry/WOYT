import * as React from "react";

export interface NoteProps {
  value: string;
}

const Note: React.SFC<NoteProps> = ({ value }) => {
  return (
    <div className="note">
      <span className="">Note :</span> {value}
    </div>
  );
};

export default Note;
