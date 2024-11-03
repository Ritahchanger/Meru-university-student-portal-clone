import { useSelector } from "react-redux"
import "./Preloader.css"
const Preloader = () => {

 const isPreloaderSliceShown = useSelector((state)=>state.preloader.isPreloaderSliceShown)
 
  return (
    <div className={`preloader ${isPreloaderSliceShown ? 'active' : null}`}>
    <div className="preloader-circle"></div>
    <div className="preloader-circle preloader-circle2"></div>
    <div className="preloader-circle preloader-circle3"></div>
  </div>
  )
}

export default Preloader