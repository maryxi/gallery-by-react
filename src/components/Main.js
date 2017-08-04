require('normalize.css/normalize.css');
require('styles/App.less');

import React from 'react';

let imagesData = require('../data/imageData.json');

// 图片转换成真实require的路径
imagesData = (function genImageData(genImageDataArr) {
  for (let i = 0, j = genImageDataArr.length; i < j; i++) {
    let singleImg = genImageDataArr[i];
    singleImg['imgUrl'] = require('../images/' + singleImg.fileName);
    genImageDataArr[i] = singleImg;
  }
  return genImageDataArr;
})(imagesData)


class AppComponent extends React.Component {

  render() {
    console.log(imagesData);

    return (
      <section className="stage">
        <section className="img-sec">
        </section>
        <nav className="controller-nav">
        </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;