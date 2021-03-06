import React from "react";
import { CircularProgress, Typography } from "@mui/material";
import MUIDataTable from "mui-datatables";
import { connect } from "react-redux";
import { loadVisits } from "../../store/actions/visits";

class Visit extends React.Component {
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
        name: "browser",
        label: "Browser",
      },
      {
        name: "isLinux",
        label: "Linux",
      },
      {
        name: "isMac",
        label: "Mac",
      },
      {
        name: "isMobile",
        label: "Mobile",
      },
      {
        name: "platform",
        label: "Platform",
      },
      {
        name: "os",
        label: "OS",
      },
      {
        name: "source",
        label: "Source",
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
    this.props.loadVisits();
    this.setState({ isLoading: false, count: 100 });
  };

  sort = (page, sortOrder) => {
    this.setState({ isLoading: true });
    this.setState({
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

    const visitors = this.props.visitReducer?.visitors.rows.map(
      ({ userAgent, _id }) => {
        const { browser, isLinux, isMac, isMobile, os, platform, source } =
          userAgent;
        return {
          browser,
          isLinux: isLinux?.toString(),
          isMac: isMac?.toString(),
          isMobile: isMobile?.toString(),
          os,
          platform,
          source,
          _id,
        };
      }
    );

    const options = {
      page,
      print: false,
      download: false,
      filter: true,
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
            this.props.loadVisits({
              perPage: tableState.rowsPerPage,
              page: tableState.page,
            });
            break;
          case "sort":
            const { name: sort, direction: order } = tableState.sortOrder;
            this.props.loadVisits({
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
            this.props.loadVisits({
              perPage: tableState.rowsPerPage,
              page: 0,
            });
            this.setState({
              page: 0,
              rowsPerPage: tableState.rowsPerPage,
            });
            console.log(tableState.rowsPerPage);
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
              Visitors Data
              {isLoading && (
                <CircularProgress
                  size={24}
                  style={{ marginLeft: 15, position: "relative", top: 4 }}
                />
              )}
            </Typography>
          }
          data={visitors}
          columns={this.state.columns}
          options={options}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    visitReducer: state?.visitReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadVisits: (params = {}) => {
      dispatch(loadVisits(params));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Visit);
