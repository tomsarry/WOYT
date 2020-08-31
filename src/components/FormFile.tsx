import * as React from "react";

export interface FormFileProps {
  callback: (file: File) => void;
}

export interface FormFileState {}

class FormFile extends React.Component<FormFileProps, FormFileState> {
  refInput: any;
  state: { file: File | null };
  constructor(props: any) {
    super(props);
    this.refInput = React.createRef();
    this.state = { file: null };
  }

  handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const file = this.refInput.current.files[0];

    if (!file) {
      // TODO display banner danger add file
      return;
    }
    this.props.callback(file);
  };

  handleChange = (files: FileList | null) => {
    if (!files) {
      return;
    }
    const file = files[0];
    this.setState({ file: file });
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        encType="multipart/form-data"
        className="form"
      >
        <input
          type="file"
          id="formfile"
          className="hidden"
          accept=".json"
          ref={this.refInput}
          onChange={(e) => this.handleChange(e.target.files)}
        ></input>

        <button
          className="btn btn-select"
          onClick={() => document.getElementById("formfile")?.click()}
        >
          Select a File
        </button>

        {this.state.file && (
          <span>Currently selected file : {this.state.file.name}</span>
        )}

        <button type="submit" className="btn btn-submit">
          Submit
        </button>
      </form>
    );
  }
}

export default FormFile;
