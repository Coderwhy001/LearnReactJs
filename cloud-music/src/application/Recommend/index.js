import React from 'react';
import { connect } from "react-redux";
import {} from './style.js';
// 将状态 map UI connect prop

// 函数表征型组件
function Recommend(props){
  // / =>  HOME
  // console.log(props)  react props如果在router 之中，
  // 那么他会包含history, location route(当前route.routes)
  // const { route } = props;
  console.log(props);
  return (
    <div>
      Recommend
    </div>
  );
}

const mapStateToProps = (state) => ({
  // 不要再这里将数据toJS,不然每次diff比对props的时候都是不一样的引用，还是导致不必要的重渲染, 属于滥用immutable
  bannerList: state.getIn(['recommend', 'bannerList'])
});

// HOC 组件 高阶组件 装饰器
export default connect(mapStateToProps)(React.memo(Recommend));