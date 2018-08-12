import React,{Component} from 'react';
import Layout from '../../components/Layout';
import {Card} from 'semantic-ui-react';
import NGO from '../../ethereum/NGO'

class ViewNGO extends Component{
    static async getInitialProps(props){
        const viewNGO = NGO(props.query.address);
        const summary = await viewNGO.methods.getSummary().call();
        //const NGO_add = await meraNGO.methods.getOnBoardedNGOs().call();
        console.log(summary);
        return {
            minContribution:summary[0],
            balance:summary[1],
            requestsCount:summary[2],
            contributersCount:summary[3],
            NGOaddress:summary[4]
        };
    }
    renderCards(){
        const {balance,NGOaddress,requestsCount,contributersCount,minContribution} = this.props
        const items =  [
            {
                header:NGOaddress,
                meta:"Address of NGO",
                description:"NGO account address",
                style:{overflowWrap: 'break-word'}
            },
            {
                header:minContribution,
                meta:"Minimum Contribution Requested",
                description:"NGO requests a minimum amount",
                style:{overflowWrap: 'break-word'}
            },
            {
                header:requestsCount,
                meta:"Total Requests",
                description:"Toatl donation requests made",
                style:{overflowWrap: 'break-word'}
            },
            {
                header:balance,
                meta:"Current Balance of the NGO",
                description:"Current balance",
                style:{overflowWrap: 'break-word'}
            },
            {
                header:contributersCount,
                meta:"Total Contributers",
                description:"Total contributers for this NGO",
                style:{overflowWrap: 'break-word'}
            }
        ]
        return (<Card.Group items={items}/>)
    }
    render(){
        return(
        <Layout>
            <div><h3>NGO Statistics</h3></div>
            {this.renderCards()}
        </Layout>
        )
        
    }

}

export default ViewNGO;
