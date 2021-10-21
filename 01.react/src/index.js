import React from 'react';
import {render} from 'react-dom';

// 自定义组件
function APP(){
    return <div>React</div>
}

render(<APP />,document.getElementById('root'));