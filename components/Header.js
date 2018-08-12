import React,{Component} from 'react';
import { Menu } from 'semantic-ui-react'

class Headers extends React.Component {
render(){
    //return (<div>hhh</div>)
    return(
        <div>
        <Menu>
           <Menu.item>
               KarmaCoin
           </Menu.item>
           <Menu.Menu position ="right">
           <Menu.item>
               NGO
           </Menu.item>
           <Menu.item>
               +
           </Menu.item>
           </Menu.Menu>
        </Menu> 
        </div>   
    )
}
}


export {Headers};