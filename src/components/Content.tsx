import React, { Component } from "react";
import axios from "axios";
import ContainerYear, { YearInfo } from "./ContainerYear";
import ContainerWasted from "./ContainerWasted";
import ContainterSample from "./ContainerSample";

type IProps = {};

type IState = {
  totalNumber: number;
  sampleSize: number;
  missingLinks: number;
  missingLinksSample: number;
  totalDurationSampleS: number;
  totalDurationS: number;
  avgDurationS: number;
  yearInfo: YearInfo[];
};

class Content extends Component<IProps, IState> {
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
      yearInfo: [],
    };

    this.fileInput = React.createRef();
  }

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
            yearInfo: advInfo.YearInfos,
            avgDurationS: advInfo.AvgDuration,
          });
        })
        .catch((err) => {
          console.log("Error : " + err);
        });
    }
    event.preventDefault();
  };

  render() {
    const data = this.state;
    return (
      <React.Fragment>
        <h1 className="title">Wasted on YT</h1>
        <form onSubmit={this.handleSubmit} encType="multipart/form-data">
          <label>
            Choisir un fichier :<input type="file" ref={this.fileInput}></input>
          </label>
          <br />
          <br />
          <button type="submit">Envoyer</button>
        </form>

        <p>
          {data.totalNumber
            ? "Total number of videos found : " + data.totalNumber
            : ""}
        </p>

        <p>
          {data.sampleSize
            ? "Number of videos to check for an accurate sample : " +
              data.sampleSize
            : ""}
        </p>

        <p>
          {data.missingLinksSample || data.totalNumber
            ? "Number of missing links on the sample : " +
              data.missingLinksSample
            : ""}
        </p>

        <p>
          {data.missingLinks
            ? "Missing links in total : " + data.missingLinks
            : ""}
        </p>

        <p>
          {data.totalDurationSampleS
            ? "Total duration of sample (in secs) : " +
              data.totalDurationSampleS
            : ""}
        </p>

        <p>
          {data.totalDurationS
            ? "Total duration of set (in secs) : " + data.totalDurationS
            : ""}
        </p>

        <p>
          {data.totalDurationS
            ? "Total duration of set (in hours) : " +
              Math.round((data.totalDurationS / 3600) * 100) / 100
            : ""}
        </p>

        <p>
          {data.avgDurationS
            ? "Average duration of videos watched (in secs): " +
              data.avgDurationS
            : ""}
        </p>

        {data.totalNumber ? (
          <ContainerWasted
            totalS={data.totalDurationS}
            avgDurationS={data.avgDurationS}
          />
        ) : (
          ""
        )}

        {data.yearInfo.length > 0 ? (
          <ContainerYear data={data.yearInfo} />
        ) : (
          // <ContainerYear
          //   data={[
          //     { Year: 2015, Value: 3945 },
          //     { Year: 2016, Value: 1248 },
          //     { Year: 2017, Value: 9810 },
          //   ]}
          // />
          ""
        )}

        {data.sampleSize ? (
          <ContainterSample
            nbSample={data.sampleSize}
            durationSample={data.totalDurationSampleS}
            brokenLinksSample={data.missingLinksSample}
          />
        ) : (
          ""
        )}
      </React.Fragment>
    );
  }
}

export default Content;
