import React,{Component} from 'react';
import meraNGO from '../ethereum/meraNGO';
//var $ = jQuery = require('jquery/dist/jquery.js');
//window.jQuery = $; // Assure it's available globally.
import {Card,Button} from 'semantic-ui-react';
import Layout from '../components/Layout';
import {Link} from '../routes';

class App extends Component {
    static async getInitialProps(){
        const NGO_add = await meraNGO.methods.getOnBoardedNGOs().call();
        //console.log(NGO_add);
        return {NGO_add};
    }

    renderNGOs(){
        const items = this.props.NGO_add.map(address => {
            return{
                header:address,
                description:(
                    <Link route={`/NGOs/${address}`}>
                        View More
                    </Link>
                ),
                fluid:true
            }
        })
        return(<Card.Group items={items}/>);
    } 
    render(){
        return (
        <Layout>
        <div>
            <br/>
            <h2>meraNGO</h2>
            <h3>A decentralized marketplace for NGOs</h3>

            <br/>
            <Link route="NGOs/new">
                <a>
                <Button
            content="On Board"
            icon="add circle"
            primary
            floated="right"
            />
                </a>
                </Link>
            
            {this.renderNGOs()}
           

            </div>
            </Layout>);
    }
}
export default App;