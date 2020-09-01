import React, { Component } from "react";
import axios from "axios";
import ContainerYear, { YearInfo } from "./ContainerYear";
import ContainerWasted from "./ContainerWasted";
import ContainterSample from "./ContainerSample";
import ContainerGeneral from "./ContainerGereral";
import { getNumberYears } from "./Container";
import FormFile from "./FormFile";

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
  file: any;
};

class Content extends Component<IProps, IState> {
  // fileInput: any;
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
      file: null,
    };

    // this.fileInput = React.createRef();
  }

  handleSubmit = (fileReceived: any) => {
    if (fileReceived) {
      let formData = new FormData();
      formData.append("file", fileReceived);

      axios
        .post(
          process.env.REACT_APP_API || "http://localhost:8080/" + "upload",
          formData
        )
        // .post("http://localhost:8080/upload", formData)
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
          alert(err.toString());
        });
    } else {
      throw new Error("");
    }
  };

  render() {
    const data = this.state;
    return (
      <React.Fragment>
        <FormFile callback={this.handleSubmit} />

        {data.totalNumber ? (
          <ContainerGeneral
            nbVideo={data.totalNumber}
            nbYears={data.yearInfo ? getNumberYears(data.yearInfo) : 0}
            missingLinks={data.missingLinks}
          />
        ) : (
          ""
        )}

        {data.totalNumber ? (
          <ContainerWasted
            totalS={data.totalDurationS}
            avgDurationS={data.avgDurationS}
          />
        ) : (
          ""
        )}

        {data.yearInfo.length > 0 ? <ContainerYear data={data.yearInfo} /> : ""}

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

export { Content };
