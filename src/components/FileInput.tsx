import React, { Component } from "react";

import axios from "axios";

interface IProps {}

interface IState {
  totalNumber: number;
  sampleSize: number;
  missingLinks: number;
  missingLinksSample: number;
  totalDurationSampleS: number;
  totalDurationS: number;
  avgDurationS: number;
  yearInfo: YearInfo;
}

interface YearInfo {
  [key: string]: number;
}

class FileInput extends Component<IProps, IState> {
  fileInput: any;
  constructor(props: any) {
    super(props);

    // Where totalNumber is the ammount of videos found in the history
    // and sampleSize is the ammount that should be checked
    this.state = {
      totalNumber: 0,
      sampleSize: 0,
      missingLinks: 0,
      missingLinksSample: 0,
      totalDurationSampleS: 0,
      totalDurationS: 0,
      avgDurationS: 0,
      yearInfo: {},
    };
    this.fileInput = React.createRef();
  }

  getListYear = () => {
    const data = this.state.yearInfo;

    var listVideosYear = Object.keys(data).map((key) => (
      <li key={key}>
        <h3>{key}</h3>
        {data[key]}
      </li>
    ));

    return listVideosYear;
  };

  handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const file = this.fileInput.current.files[0];

    if (!file) {
      // TODO display banner danger add file
      return;
    }

    // checking that the input is .json file
    var extension = file.name.split(".").pop();

    if (extension !== "json") {
      console.log("Error, not a json file");
      // TODO display a danger banner
      return;
    }

    // sending the file with a HTTP POST request
    if (file != null) {
      let formData = new FormData();
      formData.append("file", file);

      axios
        .post(process.env.REACT_APP_API + "upload", formData)
        .then((response) => {
          var result = response.data;
          // TESTING: see the response object
          console.log(result);

          const basicInfo = result.RequestBasicInfo;
          const advInfo = result.RequestAdvancedInfo;

          this.setState({
            totalNumber: basicInfo.Population,
            sampleSize: basicInfo.SampleSize,
            missingLinks: basicInfo.MissingLinks,
            missingLinksSample: basicInfo.MissingLinksSample,
            totalDurationSampleS: advInfo.TotalDurationSample,
            totalDurationS: advInfo.TotalDurationSeconds,
            yearInfo: advInfo.YearInfo,
            avgDurationS: advInfo.AvgDuration,
          });
          return result;
        })
        .catch((err) => {
          console.log("Error : " + err);
        });
    }
    event.preventDefault();
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit} encType="multipart/form-data">
          <label>
            Choisir un fichier :<input type="file" ref={this.fileInput}></input>
          </label>
          <br />
          <br />
          <button type="submit">Envoyer</button>
        </form>

        <div>
          <p>
            {this.state.totalNumber
              ? "Total number of videos found : " + this.state.totalNumber
              : ""}
          </p>

          <p>
            {this.state.sampleSize
              ? "Number of videos to check for an accurate sample : " +
                this.state.sampleSize
              : ""}
          </p>

          <p>
            {this.state.missingLinksSample || this.state.totalNumber
              ? "Number of missing links on the sample : " +
                this.state.missingLinksSample
              : ""}
          </p>

          <p>
            {this.state.missingLinks
              ? "Missing links in total : " + this.state.missingLinks
              : ""}
          </p>

          <p>
            {this.state.totalDurationSampleS
              ? "Total duration of sample (in secs) : " +
                this.state.totalDurationSampleS
              : ""}
          </p>

          <p>
            {this.state.totalDurationS
              ? "Total duration of set (in secs) : " + this.state.totalDurationS
              : ""}
          </p>

          <p>
            {this.state.totalDurationS
              ? "Total duration of set (in hours) : " +
                Math.round((this.state.totalDurationS / 3600) * 100) / 100
              : ""}
          </p>

          <p>
            {this.state.avgDurationS
              ? "Average duration of videos watched (in secs): " +
                this.state.avgDurationS
              : ""}
          </p>

          <p>{this.state.yearInfo ? <ul>{this.getListYear()}</ul> : ""}</p>
        </div>
      </React.Fragment>
    );
  }
}

export default FileInput;
