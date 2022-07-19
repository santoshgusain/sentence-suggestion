import React from "react";
import { CircularProgress, Typography, IconButton } from "@mui/material";
import MUIDataTable from "mui-datatables";
import { connect } from "react-redux";
import { listSentences } from "../../store/actions/sentence";
import AddCircleIcon from "@mui/icons-material/AddCircle";

class Note extends React.Component {
  state = {
    page: 0,
    count: 1,
    rowsPerPage: 5,
    sortOrder: {},
    data: [["Loading Data..."]],
    columns: [
      {
        name: "_id",
        label: "Id",
        options: {},
      },
      {
        name: "sentence",
        label: "Sentence",
        options: {},
      },
    ],
    isLoading: false,
  };

  componentDidMount() {
    this.getData("", 0);
  }

  // get data
  getData = async () => {
    this.setState({ isLoading: true });
    this.props.listSentences();
    this.setState({ isLoading: false, count: 100 });
  };

  sort = (page, sortOrder) => {
    this.setState({ isLoading: true });
    this.setState({
      // data: res.data,
      // page: res.page,
      // count: res.total,
      sortOrder,
      isLoading: false,
    });
  };

  changePage = (page, sortOrder) => {
    this.setState({
      isLoading: true,
    });
    this.setState({
      isLoading: false,
      sortOrder,
      page,
    });
  };

  render() {
    const { page, count, isLoading, rowsPerPage, sortOrder } = this.state;
    const { rows: data } = this.props?.savedSentences;

    const options = {
      page,
      filter: true,
      print: false,
      download: false,
      filterType: "dropdown",
      responsive: "vertical",
      serverSide: true,
      count: count,
      rowsPerPage: rowsPerPage,
      rowsPerPageOptions: [5, 10, 15, 20],
      sortOrder: sortOrder,
      onTableChange: (action, tableState) => {
        // a developer could react to change on an action basis or
        // examine the state as a whole and do whatever they want
        switch (action) {
          case "changePage":
            this.changePage(tableState.page, tableState.sortOrder);
            this.props.listSentences({
              perPage: tableState.rowsPerPage,
              page: tableState.page,
            });
            break;
          case "sort":
            const { name: sort, direction: order } = tableState.sortOrder;
            this.props.listSentences({
              perPage: tableState.rowsPerPage,
              page: tableState.page,
              sort,
              order,
            });
            break;
          case "search":
            console.log(
              "user is searching now pleae make a functionality for it==================="
            );
            break;
          case "changeRowsPerPage":
            // this.sort(tableState.page, tableState.sortOrder);
            this.props.listSentences({
              perPage: tableState.rowsPerPage,
              page: 0,
            });
            this.setState({
              page: 0,
              rowsPerPage: tableState.rowsPerPage,
            });
            console.log(
              "current row per page==================",
              tableState.rowsPerPage
            );
            // this.setState({
            //   rowsPerPage: tableState.rowsPerPage,
            // });

            break;
          default:
            console.log("action not handled.");
        }
      },
    };

    return (
      <div>
        <MUIDataTable
          title={
            <Typography variant="h6">
              Saved Notes
              <IconButton aria-label="Add Note" color="primary" size="large">
                <AddCircleIcon />
              </IconButton>
              {isLoading && (
                <CircularProgress
                  size={24}
                  style={{ marginLeft: 15, position: "relative", top: 4 }}
                />
              )}
            </Typography>
          }
          data={data}
          columns={this.state.columns}
          options={options}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state?.sentenceReducer;
};

const mapDispatchToProps = (dispatch) => {
  return {
    listSentences: (params = {}) => {
      dispatch(listSentences(params));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Note);
