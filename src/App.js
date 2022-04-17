import { useEffect } from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { fetchUserData } from "./actions/action"
import "./App.css"
import { makeSelectLoading, makeSelectUserData } from "./selector"
import PropTypes from "prop-types"
function App({ fetchUserDetails, loading, userDatas }) {
  useEffect(() => {
    fetchUserDetails()
  })

  console.log(loading, userDatas)

  return (
    <div className="App">
      <h1>App</h1>
      <button> Fetch </button>
    </div>
  )
}
const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  // userDatas: makeSelectUserData(),
})

const mapDispatchToProps = (dispatch) => ({
  fetchUserDetails: () => dispatch(fetchUserData()),
})
App.propTypes = {
  fetchUserDetails: PropTypes.func,
}

// Inifinte call loops when stateToProps added
// uncomment 36 and comment 37 to see the error
export default connect(mapStateToProps, mapDispatchToProps)(App)
// export default connect(null, mapDispatchToProps)(App)

