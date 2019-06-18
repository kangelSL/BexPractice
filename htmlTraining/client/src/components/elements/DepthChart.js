import { ChartCanvas, Chart, XAxis, YAxis, CurrentCoordinate, AreaSeries, Gradient, HoverTooltip } from 'd3';
import * as d3 from "d3";

class DepthChartElement extends Component {


    render(
        return(
            <div>
            </div>
        )
    )
}


function mapStateToProps(state) {
    return {
      orders: state.orders
    };
  }
  
  const DepthChart = connect(mapStateToProps)(DepthChartElement);
  
  export default DepthChart;