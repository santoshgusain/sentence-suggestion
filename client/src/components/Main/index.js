import React, { Component } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

import Button from "@mui/material/Button";
import SendIcon from "@material-ui/icons/Send";
import Stack from "@mui/material/Stack";

import { connect } from "react-redux";
import { loadSentence } from "../../store/actions/sentence";
import Loader from "../Loading";
import SkeletonText from "../SkeletonText";
import BottomNav from "../BottomNav";

// next button
function Nextbutton(props) {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        sx={{ "margin-left": "auto" }}
        onClick={props.changeSentence}
        variant="contained"
        endIcon={<SendIcon />}
      >
        Next Sentence
      </Button>
    </Stack>
  );
}

// copyright text
function Copyright() {
  return (
    <Typography
      sx={{ textAlign: "center", fontSize: "10px" }}
      variant="body2"
      color="text.secondary"
    >
      {"Copyright © "}
      <Link color="inherit" href={"javascript:void()"}>
        Santosh Gusain
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// main component default exported
class Main extends Component {
  constructor(props) {
    super(props);
    const { sentences } = props;
    this.state = {
      loading: true,
      count: 0,
      sentence: null,
      sentences,
    };
  }

  componentDidMount() {
    this.loadSentences();
  }

  // function to load sentences array
  loadSentences = async () => {
    await this.props.loadSentence();
    let { sentences } = this.props.sentenceReducer;
    sentences = sentences?.sentences?.rows.map(({ sentence }) => sentence);
    const max = sentences.length,
      min = 0,
      index = Math.floor(Math.random() * (max - min) + min),
      sentence = sentences[index];
    this.setState({ ...this.state, sentences, sentence, loading: false });
  };

  // For changing sentence which is shown
  changeSentence = () => {
    let { sentences, count } = this.state;
    // reset count to zero if count exceeds index of the sentences
    if (count > sentences.length - 1) {
      count = 0;
    }
    // update state
    this.setState({
      ...this.state,
      sentence: sentences[count],
      count: count + 1,
    });
  };

  render() {
    let { loading } = this.state;
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        {loading ? <Loader /> : ""}
        <CssBaseline />
        <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
          <Typography variant="h2" component="h1" gutterBottom>
            {"Sentence"}
          </Typography>
          <Typography sx={{ mb: 4 }} variant="h5" component="h2" gutterBottom>
            {this.state.sentence == null ? (
              <SkeletonText />
            ) : (
              this.state.sentence
            )}
          </Typography>
        </Container>

        <Box
          component="footer"
          sx={{
            pt: 3,
            mt: "auto",
          }}
        >
          <Container maxWidth="sm" sx={{ mb: 2 }}>
            <Nextbutton changeSentence={this.changeSentence} />
          </Container>

          <Box
            component="div"
            sx={{
              pt: 1,
              px: 2,
              mt: "auto",
              backgroundColor: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[200]
                  : theme.palette.grey[800],
            }}
          >
            <Container maxWidth="sm">
              <Typography variant="body1">
                <BottomNav />
              </Typography>
              <Copyright />
            </Container>
          </Box>
        </Box>
      </Box>
    );
  }
}

const mapStateToProp = (state) => {
  return {
    sentenceReducer: state.sentenceReducer,
  };
};
export default connect(mapStateToProp, { loadSentence })(Main);
