import { useEffect } from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { fetchUserData } from "./actions/action"
import "./App.css"
import { makeSelectLoading, makeSelectUserData } from "./selector"

function App({ fetchUserData, loading, userDatas}) {

  useEffect(() => {
    fetchUserData()
  })

console.log(loading, userDatas);

  return (
    <div className="App">
      <h1>App</h1>
      <button> Fetch </button>
    </div>
  )
}
const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  userDatas: makeSelectUserData(),
})
export default connect(mapStateToProps, { fetchUserData })(App)
